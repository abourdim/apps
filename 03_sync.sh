#!/usr/bin/env bash
# ============================================================
# Workshop-Diy — sync.sh
# Auto-detect new/removed GitHub repos and update the hub
#
# Usage:
#   ./sync.sh              # dry-run: show what changed
#   ./sync.sh --apply      # apply changes to files
#   ./sync.sh --full       # apply + thumbs + git push
# ============================================================

set -euo pipefail

GITHUB_USER="abourdim"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
DATA_FILE="$SCRIPT_DIR/apps-data.json"
JS_FILE="$SCRIPT_DIR/app.js"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m'

MODE="${1:-}"

log()  { echo -e "${BLUE}[sync]${NC} $1"; }
ok()   { echo -e "${GREEN}  ✅ $1${NC}"; }
warn() { echo -e "${YELLOW}  ⚠️  $1${NC}"; }
new()  { echo -e "${GREEN}  ➕ $1${NC}"; }
del()  { echo -e "${RED}  ➖ $1${NC}"; }

# ──────── Fetch all repos from GitHub ────────
fetch_github_repos() {
  local page=1
  local all=""
  while :; do
    local batch
    batch=$(curl -sf "https://api.github.com/users/$GITHUB_USER/repos?per_page=100&page=$page" 2>/dev/null || echo "[]")
    local names
    names=$(echo "$batch" | python3 -c "
import json, sys
try:
    data = json.load(sys.stdin)
    if isinstance(data, list):
        for r in data:
            name = r.get('name','')
            desc = r.get('description','') or ''
            # Skip non-app repos (license files etc)
            if name and name != 'MIT License':
                print(f'{name}|||{desc}')
except: pass
" 2>/dev/null)
    [ -z "$names" ] && break
    all="$all
$names"
    page=$((page + 1))
  done
  echo "$all" | grep -v '^$' | sort
}

# ──────── Check if repo has index.html (is a web app) ────────
has_index() {
  local repo="$1"
  local status
  status=$(curl -sf -o /dev/null -w "%{http_code}" \
    "https://raw.githubusercontent.com/$GITHUB_USER/$repo/main/index.html" 2>/dev/null || echo "000")
  [ "$status" = "200" ]
}

# ──────── Get current apps from apps-data.json ────────
get_current_apps() {
  python3 -c "
import json
try:
    data = json.load(open('$DATA_FILE'))
    for a in data.get('apps', []):
        print(a['name'])
except: pass
" 2>/dev/null
}

# ──────── Main sync logic in Python ────────
run_sync() {
  local github_data="$1"
  local apply="$2"

  python3 << PYEOF
import json, os, datetime

GITHUB_USER = "$GITHUB_USER"
DATA_FILE = "$DATA_FILE"
JS_FILE = "$JS_FILE"
apply = "$apply" == "1"

# ──── Parse GitHub repos ────
github_repos = {}
for line in """$github_data""".strip().split('\n'):
    if '|||' in line:
        name, desc = line.split('|||', 1)
        name = name.strip()
        if name:
            github_repos[name] = desc.strip()

# ──── Load current data ────
try:
    with open(DATA_FILE) as f:
        data = json.load(f)
except:
    data = {"generated": "", "user": GITHUB_USER, "apps": []}

current_names = {a['name'] for a in data.get('apps', [])}
github_names = set(github_repos.keys())

# ──── Diff ────
added = sorted(github_names - current_names)
removed = sorted(current_names - github_names)
unchanged = sorted(current_names & github_names)

print(f"\n{'='*50}")
print(f"  📊 SYNC REPORT")
print(f"{'='*50}")
print(f"  GitHub repos:  {len(github_names)}")
print(f"  Hub apps:      {len(current_names)}")
print(f"  ✅ Unchanged:   {len(unchanged)}")
print(f"  ➕ New:         {len(added)}")
print(f"  ➖ Removed:     {len(removed)}")
print(f"{'='*50}\n")

if added:
    print("  ➕ NEW repos to add:")
    for name in added:
        desc = github_repos.get(name, '')
        print(f"     {name}  →  {desc or '(no description)'}")
    print()

if removed:
    print("  ➖ REMOVED repos (no longer on GitHub):")
    for name in removed:
        print(f"     {name}")
    print()

if not added and not removed:
    print("  🎯 Everything is in sync! Nothing to do.\n")
    exit(0)

if not apply:
    print("  💡 Run with --apply to update files, or --full to also rebuild thumbs + push.\n")
    exit(0)

# ──── Auto-categorize new apps ────
CATEGORY_HINTS = {
    'micro': 'microbit', 'bit': 'microbit', 'robot': 'microbit', 'ble': 'microbit',
    'face': 'camera', 'camera': 'camera', 'track': 'camera', 'hand': 'camera',
    'arab': 'arabic', 'tts': 'arabic', 'piper': 'arabic', 'speak': 'arabic',
    'class': 'classroom', 'peer': 'classroom', 'mission': 'classroom',
    'lab': 'education', 'learn': 'education', 'academy': 'education',
    'crypto': 'education', 'pentest': 'education', 'linux': 'education',
    'esp32': 'education', 'wled': 'education', 'production': 'education',
}

EMOJI_HINTS = {
    'microbit': '🤖', 'camera': '📸', 'arabic': '🗣️',
    'classroom': '🏫', 'education': '📚', 'tools': '🛠️',
}

KEYWORD_EMOJIS = {
    'robot': '🤖', 'led': '💡', 'light': '💡', 'wled': '💡',
    'esp32': '⚡', 'linux': '🐧', 'hack': '🔐', 'pentest': '🔐',
    'crypto': '💰', 'game': '🎮', 'pixel': '🕹️', 'face': '🕵️',
    'magic': '🪄', 'talk': '🤖', 'brain': '🧠', 'teach': '🧠',
    'web': '🌐', 'tool': '🧰', 'auto': '🎭', 'puppet': '🎭',
    'gateway': '🚪', 'workshop': '🏗️', 'diy': '🏗️', 'site': '🏗️',
}

def guess_category(name):
    lower = name.lower().replace('-', ' ')
    for hint, cat in CATEGORY_HINTS.items():
        if hint in lower:
            return cat
    return 'tools'

def guess_emoji(name, category):
    lower = name.lower()
    for hint, emoji in KEYWORD_EMOJIS.items():
        if hint in lower:
            return emoji
    return EMOJI_HINTS.get(category, '🔧')

# ──── Add new apps ────
for name in added:
    cat = guess_category(name)
    emoji = guess_emoji(name, cat)
    gh_desc = github_repos.get(name, '')

    # Build descriptions (use GitHub desc if available, otherwise generic)
    if gh_desc:
        desc_en = gh_desc
    else:
        desc_en = f"{name.replace('-', ' ').title()} — explore and experiment!"

    new_app = {
        "name": name,
        "emoji": emoji,
        "categories": [cat],
        "badge": "new",
        "status": "stable",
        "tags": [t for t in name.split('-') if len(t) > 2][:3],
        "desc": {
            "en": desc_en,
            "fr": f"{name.replace('-', ' ').title()} — explorez et expérimentez !",
            "ar": f"{name.replace('-', ' ').title()} — استكشف وجرّب!"
        }
    }
    data['apps'].append(new_app)
    print(f"  ✅ Added: {name} [{emoji} {cat}]")

# ──── Remove deleted apps ────
if removed:
    data['apps'] = [a for a in data['apps'] if a['name'] not in removed]
    for name in removed:
        print(f"  🗑️  Removed: {name}")

# ──── Save apps-data.json ────
data['generated'] = datetime.datetime.utcnow().isoformat() + 'Z'
with open(DATA_FILE, 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
print(f"\n  📄 Updated {DATA_FILE} ({len(data['apps'])} apps)")

# ──── Update INLINE_APPS in app.js ────
# Read current JS
with open(JS_FILE) as f:
    js = f.read()

# Build new INLINE_APPS block
lines = ["const INLINE_APPS = ["]
for i, app in enumerate(data['apps']):
    name = app['name']
    emoji = app['emoji']
    cats = app.get('categories', app.get('category', ['tools']))
    if isinstance(cats, str):
        cats = [cats]
    cats_str = json.dumps(cats)
    badge = app.get('badge', '')
    status = app.get('status', 'stable')
    tags = app.get('tags', [])
    desc = app.get('desc', {})
    en = desc.get('en', '').replace('"', '\\"')
    fr = desc.get('fr', '').replace('"', '\\"')
    ar = desc.get('ar', '').replace('"', '\\"')
    tags_str = ','.join([f'"{t}"' for t in tags[:6]])
    badge_str = f'"{badge}"' if badge else '"stable"'

    lines.append(f'  {{ name:"{name}", emoji:"{emoji}", categories:{cats_str}, badge:{badge_str}, status:"{status}", tags:[{tags_str}],')
    lines.append(f'    desc:{{ en:"{en}", fr:"{fr}", ar:"{ar}" }}}},')

lines.append("];")
new_block = "\n".join(lines)

# Replace the INLINE_APPS block
import re
pattern = r'const INLINE_APPS = \[.*?\];'
js_new = re.sub(pattern, new_block, js, flags=re.DOTALL)

with open(JS_FILE, 'w') as f:
    f.write(js_new)
print(f"  📄 Updated {JS_FILE} (INLINE_APPS: {len(data['apps'])} entries)")

print(f"\n  🎉 Sync complete!\n")
PYEOF
}

# ============================================================
# MAIN
# ============================================================

echo ""
log "Fetching repos for ${CYAN}${GITHUB_USER}${NC}..."
github_data=$(fetch_github_repos)
repo_count=$(echo "$github_data" | grep -c '|||' || echo 0)
log "Found ${GREEN}${repo_count}${NC} repos on GitHub"

case "$MODE" in
  --apply)
    log "Mode: ${YELLOW}Apply changes${NC}"
    run_sync "$github_data" "1"
    echo ""
    ok "Files updated. Review changes then:"
    echo "    git add -A && git commit -m 'sync: update hub apps' && git push"
    echo ""
    ;;

  --full)
    log "Mode: ${YELLOW}Full rebuild${NC} (apply + thumbs + push)"
    run_sync "$github_data" "1"

    # Generate thumbnails for new apps
    if command -v node &>/dev/null && [ -f "$SCRIPT_DIR/screenshot.js" ]; then
      log "Generating thumbnails..."
      (cd "$SCRIPT_DIR" && node screenshot.js)
    fi

    # Generate manifest
    if [ -f "$SCRIPT_DIR/build.sh" ]; then
      log "Updating manifest..."
      export THUMBS_DIR="$SCRIPT_DIR/thumbs" MANIFEST="$SCRIPT_DIR/manifest.json"
      python3 -c "
import json, os, datetime
THUMBS_DIR = os.environ.get('THUMBS_DIR', './thumbs')
manifest = {'generated': datetime.datetime.utcnow().isoformat() + 'Z', 'thumbs': {}}
if os.path.isdir(THUMBS_DIR):
    for f in sorted(os.listdir(THUMBS_DIR)):
        if f.endswith('.png'):
            path = os.path.join(THUMBS_DIR, f)
            manifest['thumbs'][f.replace('.png', '')] = {'file': f, 'size': os.path.getsize(path)}
with open(os.environ.get('MANIFEST', './manifest.json'), 'w') as f:
    json.dump(manifest, f, indent=2)
print(f'  Manifest: {len(manifest[\"thumbs\"])} thumbnails')
"
    fi

    # Git push
    log "Pushing to GitHub..."
    cd "$SCRIPT_DIR"
    git add -A
    git commit -m "🔄 sync: $(date -u '+%Y-%m-%d %H:%M') — auto-update hub apps" 2>/dev/null || log "Nothing to commit"
    git push origin main 2>/dev/null || warn "Push failed (check auth)"
    echo ""
    ok "Full sync + deploy complete! 🚀"
    ;;

  *)
    log "Mode: ${CYAN}Dry run${NC} (preview only)"
    run_sync "$github_data" "0"
    ;;
esac
