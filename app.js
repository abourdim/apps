/* ============================================================
   Workshop-Diy Kids Hub — app.js
   i18n (EN/FR/AR) · 7 Themes · Fun · Accessible
   ============================================================ */

const USER = "abourdim";
const VIEW = (repo) => `https://raw.githack.com/${USER}/${repo}/main/index.html`;

/* ──────── i18n STRINGS ──────── */
const I18N = {
  en: {
    subtitle: "Epic tools & hacks for builders ⚡",
    search_placeholder: 'Search apps\u2026 (try "robot" or "hack")',
    filter_all: "All", filter_microbit: "micro:bit", filter_camera: "Camera",
    filter_arabic: "Arabic", filter_classroom: "Classroom",
    filter_hardware: "Hardware", filter_learning: "Learning",
    filter_ai: "AI", filter_tools: "Tools",
    shuffle: "Shuffle",
    no_results: "Nothing found. Try another keyword 🔍",
    footer: 'Built by <strong>Workshop-Diy</strong> \u2022 Hit "Launch" to go!',
    github: "GitHub ↗", view_btn: "Launch ▶",
    badge_new: "NEW", badge_popular: "Popular", badge_hub: "Hub", badge_stable: "Stable",
    status_beta: "Beta", status_dev: "Dev", status_offline: "Offline",
    status_filter_all: "All", status_filter_stable: "Stable", status_filter_beta: "Beta", status_filter_dev: "Dev", status_filter_offline: "Offline",
    stats_apps: "apps", stats_cats: "categories", stats_made: "Built with 🔥",
    greeting_morning: "Rise & grind, builder! ☀️",
    greeting_afternoon: "What's up, hacker! 🌤️",
    greeting_evening: "Night mode activated! 🌙",
    explorer_prefix: "You've explored",
    explorer_suffix: "apps!",
    explorer_title_0: "Start building! 🔰",
    explorer_title_5: "Rookie Hacker! 🎮",
    explorer_title_10: "Tech Explorer! 🚀",
    explorer_title_15: "Elite Coder! 💻",
    explorer_title_22: "Workshop Legend! 🏆",
    tooltips: [
      "This one's sick! 🔥", "Try me if you dare! 💀", "Top tier! 👑",
      "Insane build! ⚡", "Smash that button! 💥", "Beep boop! 🤖",
      "Power unlocked! 🔓", "You'll crush this! 💪"
    ],
    jokes: [
      "Why do programmers prefer dark mode? Because light attracts bugs! 🪲",
      "What's a robot's favorite snack? Micro-chips! 🍟",
      "Why was the computer cold? It left its Windows open! 🥶",
      "What's a hacker's favorite season? Phishing season! 🎣",
      "Why do Java devs wear glasses? They can't C#! 🤓",
      "How does a computer get drunk? It takes screenshots! 📸"
    ]
  },
  fr: {
    subtitle: "Outils & hacks épiques pour builders ⚡",
    search_placeholder: "Chercher… (essaie « robot » ou « hack »)",
    filter_all: "Tous", filter_microbit: "micro:bit", filter_camera: "Caméra",
    filter_arabic: "Arabe", filter_classroom: "Classe",
    filter_hardware: "Matériel", filter_learning: "Apprendre",
    filter_ai: "IA", filter_tools: "Outils",
    shuffle: "Mélanger",
    no_results: "Rien trouvé. Essaie un autre mot 🔍",
    footer: "Construit par <strong>Workshop-Diy</strong> • Appuie sur « Lancer » pour y aller !",
    github: "GitHub ↗", view_btn: "Lancer ▶",
    badge_new: "NOUVEAU", badge_popular: "Populaire", badge_hub: "Hub", badge_stable: "Stable",
    status_beta: "Bêta", status_dev: "Dev", status_offline: "Hors ligne",
    status_filter_all: "Tous", status_filter_stable: "Stable", status_filter_beta: "Bêta", status_filter_dev: "Dev", status_filter_offline: "Hors ligne",
    stats_apps: "apps", stats_cats: "catégories", stats_made: "Construit avec 🔥",
    greeting_morning: "Debout, builder ! ☀️",
    greeting_afternoon: "Salut, hacker ! 🌤️",
    greeting_evening: "Mode nuit activé ! 🌙",
    explorer_prefix: "Tu as exploré",
    explorer_suffix: "apps !",
    explorer_title_0: "Commence à builder ! 🔰",
    explorer_title_5: "Hacker débutant ! 🎮",
    explorer_title_10: "Explorateur tech ! 🚀",
    explorer_title_15: "Codeur d'élite ! 💻",
    explorer_title_22: "Légende Workshop ! 🏆",
    tooltips: [
      "Celui-ci est dingue ! 🔥", "Essaie si tu oses ! 💀", "Top niveau ! 👑",
      "Build insane ! ⚡", "Clique ! 💥", "Bip boup ! 🤖",
      "Pouvoir débloqué ! 🔓", "Tu vas gérer ! 💪"
    ],
    jokes: [
      "Pourquoi les devs préfèrent le mode sombre ? La lumière attire les bugs ! 🪲",
      "Quel est le goûter préféré d'un robot ? Des micro-chips ! 🍟",
      "Pourquoi l'ordinateur avait froid ? Il avait laissé ses fenêtres ouvertes ! 🥶",
      "Quelle est la saison préférée d'un hacker ? La saison du phishing ! 🎣",
      "Pourquoi les devs Java portent des lunettes ? Ils peuvent pas C# ! 🤓",
      "Comment un ordinateur s'enivre ? Il prend des captures d'écran ! 📸"
    ]
  },
  ar: {
    subtitle: "أدوات و اختراقات ملحمية للبناة ⚡",
    search_placeholder: "بحث عن تطبيقات… (جرّب «روبوت» أو «هاك»)",
    filter_all: "الكل", filter_microbit: "مايكرو:بت", filter_camera: "كاميرا",
    filter_arabic: "عربي", filter_classroom: "فصل",
    filter_hardware: "عتاد", filter_learning: "تعلّم",
    filter_ai: "ذكاء", filter_tools: "أدوات",
    shuffle: "خلط",
    no_results: "لم يتم العثور على شيء. جرّب كلمة أخرى 🔍",
    footer: "بناه <strong>Workshop-Diy</strong> • اضغط \"إطلاق\" للانطلاق!",
    github: "GitHub ↗", view_btn: "إطلاق ▶",
    badge_new: "جديد", badge_popular: "شائع", badge_hub: "مركز", badge_stable: "مستقر",
    status_beta: "تجريبي", status_dev: "تطوير", status_offline: "غير متصل",
    status_filter_all: "الكل", status_filter_stable: "مستقر", status_filter_beta: "تجريبي", status_filter_dev: "تطوير", status_filter_offline: "غير متصل",
    stats_apps: "تطبيق", stats_cats: "فئات", stats_made: "بُني بـ 🔥",
    greeting_morning: "صباح الخير يا بنّاء! ☀️",
    greeting_afternoon: "أهلاً يا هاكر! 🌤️",
    greeting_evening: "الوضع الليلي مفعّل! 🌙",
    explorer_prefix: "لقد استكشفت",
    explorer_suffix: "تطبيقات!",
    explorer_title_0: "ابدأ البناء! 🔰",
    explorer_title_5: "هاكر مبتدئ! 🎮",
    explorer_title_10: "مستكشف تقني! 🚀",
    explorer_title_15: "مبرمج نخبة! 💻",
    explorer_title_22: "أسطورة الورشة! 🏆",
    tooltips: [
      "هذا جنوني! 🔥", "جرّب إن كنت تجرؤ! 💀", "أعلى مستوى! 👑",
      "بناء خرافي! ⚡", "اضغط! 💥", "بيب بوب! 🤖",
      "قوة مفتوحة! 🔓", "ستسحقه! 💪"
    ],
    jokes: [
      "لماذا يفضل المبرمجون الوضع المظلم؟ لأن الضوء يجذب الحشرات! 🪲",
      "ما هي وجبة الروبوت المفضلة؟ رقائق صغيرة! 🍟",
      "لماذا كان الكمبيوتر باردًا؟ لأنه ترك نوافذه مفتوحة! 🥶",
      "ما هو الموسم المفضل للهاكر؟ موسم التصيّد! 🎣",
      "لماذا مطورو جافا يرتدون نظارات؟ لأنهم لا يستطيعون C#! 🤓",
      "كيف يسكر الكمبيوتر؟ يأخذ لقطات شاشة! 📸"
    ]
  }
};

/* ──────── LOAD APP DATA ──────── */
let APPS = [];
let LANG = localStorage.getItem("wdiy-lang") || "en";
let THEME = localStorage.getItem("wdiy-theme") || "islamic";
let SOUND = localStorage.getItem("wdiy-sound") !== "off";
let FAVS = JSON.parse(localStorage.getItem("wdiy-favs") || "[]");
let EXPLORED = JSON.parse(localStorage.getItem("wdiy-explored") || "[]");
let VIEW_MODE = localStorage.getItem("wdiy-view") || "grid";
let logoClicks = 0;

/* ──────── DOM REFS ──────── */
const grid = document.getElementById("grid");
const empty = document.getElementById("empty");
const q = document.getElementById("q");
const clearBtn = document.getElementById("clear-search");
const filterButtons = [...document.querySelectorAll(".mode-btn")];
const statusFilterButtons = [...document.querySelectorAll(".st-tog")];
const langButtons = [...document.querySelectorAll(".lang-btn")];
const themeButtons = [...document.querySelectorAll(".theme-btn")];
const viewButtons = [...document.querySelectorAll(".view-btn")];
const soundToggle = document.getElementById("sound-toggle");
const scrollTopBtn = document.getElementById("scroll-top");
const shuffleBtn = document.getElementById("shuffle-btn");
const greetingBar = document.getElementById("greeting-bar");
const statsBar = document.getElementById("stats-bar");
const jokeBar = document.getElementById("joke-bar");
const explorerBar = document.getElementById("explorer-bar");
const siteLogo = document.getElementById("site-logo");
const particleCanvas = document.getElementById("particles");
const confettiCanvas = document.getElementById("confetti-canvas");

let currentFilter = "microbit";
let currentStatusFilter = "stable";

/* ============================================================
   INLINE APP DATA
   status: "stable" (default) | "beta" | "dev" | "offline"
   ============================================================ */
const INLINE_APPS = [
  { name:"bit-bot", emoji:"🤖", categories:["microbit"], badge:"popular", status:"stable", tags:["robot","micro:bit","BLE","motor","gamepad"],
    desc:{ en:"Drive a Bit:Bot robot from your browser over Bluetooth — virtual joystick, line-follow test and obstacle mode.", fr:"Pilotez un robot Bit:Bot depuis votre navigateur en Bluetooth — joystick virtuel, suivi de ligne et mode obstacles.", ar:"قُد روبوت Bit:Bot من متصفحك عبر البلوتوث — عصا تحكم افتراضية، اختبار تتبع الخط ووضع العوائق." }},
  { name:"magic-hands", emoji:"🪄", categories:["camera", "ai"], badge:"popular", status:"stable", tags:["camera","hand-tracking","mediapipe","effects","fun"],
    desc:{ en:"Wave your hands in front of the camera to trigger magic effects — confetti, trails, neon glow — powered by MediaPipe hand tracking.", fr:"Agitez vos mains devant la caméra pour déclencher des effets magiques — confettis, traînées, lueur néon — grâce au suivi de mains MediaPipe.", ar:"لوّح بيديك أمام الكاميرا لإطلاق تأثيرات سحرية — قصاصات ملونة، مسارات، توهج نيون — بفضل تتبع اليد MediaPipe." }},
  { name:"face-quest", emoji:"🕵️", categories:["camera", "ai", "microbit"], badge:"popular", status:"stable", tags:["camera","face-detection","game","privacy","local"],
    desc:{ en:"A face-detection game you play with your webcam — smile, blink, turn your head to score points. Privacy-first: runs 100% locally.", fr:"Un jeu de détection faciale avec votre webcam — souriez, clignez, tournez la tête pour marquer des points. Respect de la vie privée : 100% local.", ar:"لعبة كشف الوجه بكاميرا الويب — ابتسم، اغمز، أدر رأسك لتسجيل النقاط. الخصوصية أولاً: تعمل 100% محلياً." }},
  { name:"talking-robot", emoji:"💬", categories:["microbit", "ai"], badge:"stable", status:"stable", tags:["robot","speech","TTS","STT","BLE","emotions"],
    desc:{ en:"A browser robot that speaks, listens and shows emotions — send text or voice commands to a micro:bit over BLE.", fr:"Un robot navigateur qui parle, écoute et montre des émotions — envoyez du texte ou des commandes vocales à un micro:bit en BLE.", ar:"روبوت متصفح يتحدث ويستمع ويُظهر المشاعر — أرسل نصوصاً أو أوامر صوتية إلى micro:bit عبر BLE." }},
  { name:"teachable-machine", emoji:"🧠", categories:["microbit", "camera", "ai"], badge:"popular", status:"stable", tags:["ml","tensorflow","micro:bit","BLE","camera","gestures"],
    desc:{ en:"Train gestures or sounds in the browser with Teachable Machine, then send the results to a micro:bit over Bluetooth in real time.", fr:"Entraînez des gestes ou sons dans le navigateur avec Teachable Machine, puis envoyez les résultats à un micro:bit en Bluetooth en temps réel.", ar:"درّب إيماءات أو أصوات في المتصفح مع Teachable Machine، ثم أرسل النتائج إلى micro:bit عبر البلوتوث في الوقت الحقيقي." }},
  { name:"face-tracking", emoji:"😎", categories:["camera", "microbit"], badge:"stable", status:"stable", tags:["camera","face-tracking","BLE","events","kids"],
    desc:{ en:"Kids-friendly face tracking with event triggers — optionally send face position data to a micro:bit over BLE.", fr:"Suivi de visage pour enfants avec déclencheurs d'événements — envoyez optionnellement les données au micro:bit en BLE.", ar:"تتبع وجه للأطفال مع مشغلات أحداث — أرسل اختيارياً بيانات موضع الوجه إلى micro:bit عبر BLE." }},
  { name:"bitmoji-lab", emoji:"😄", categories:["microbit"], badge:"stable", status:"stable", tags:["emoji","micro:bit","BLE","LED","art"],
    desc:{ en:"Pick emojis and turn them into colorful 5×5 LED pixel art on your micro:bit — send wirelessly over BLE.", fr:"Choisissez des emojis et transformez-les en pixel art LED 5×5 sur votre micro:bit — envoi sans fil en BLE.", ar:"اختر رموزاً تعبيرية وحوّلها إلى فن بكسل LED ملوّن 5×5 على micro:bit — إرسال لاسلكي عبر BLE." }},
  { name:"mission-control", emoji:"🚀", categories:["classroom", "microbit"], badge:"stable", status:"stable", tags:["webrtc","video","chat","BLE","commands"],
    desc:{ en:"Mission control dashboard with live video/chat via WebRTC — send button commands to a micro:bit over BLE.", fr:"Tableau de bord mission control avec vidéo/chat en direct via WebRTC — envoyez des commandes au micro:bit en BLE.", ar:"لوحة تحكم المهام مع فيديو/دردشة مباشرة عبر WebRTC — أرسل أوامر إلى micro:bit عبر BLE." }},
  { name:"bit-playground", emoji:"🧩", categories:["microbit"], badge:"stable", status:"stable", tags:["micro:bit","BLE","LEDs","sensors","servos","gamepad","charts"],
    desc:{ en:"The ultimate micro:bit BLE playground — control LEDs, read sensors, drive servos, play games and plot charts from the browser.", fr:"Le terrain de jeu ultime micro:bit BLE — LEDs, capteurs, servos, jeux et graphiques depuis le navigateur.", ar:"ملعب micro:bit BLE المطلق — تحكم في LEDs، اقرأ المستشعرات، حرّك المحركات، العب وارسم مخططات من المتصفح." }},
  { name:"rxy", emoji:"🎛️", categories:["microbit"], badge:"stable", status:"stable", tags:["remote","builder","micro:bit","BLE","no-code"],
    desc:{ en:"Build a custom Bluetooth remote for micro:bit — drag buttons, sliders and D-pads. No coding, just click and play.", fr:"Créez une télécommande Bluetooth personnalisée pour micro:bit — glissez des boutons, curseurs et D-pads. Sans code.", ar:"أنشئ جهاز تحكم بلوتوث مخصص لـ micro:bit — اسحب أزراراً ومنزلقات ولوحات اتجاه. بدون برمجة." }},
  { name:"pixel-gateway", emoji:"🎨", categories:["tools"], badge:"stable", status:"stable", tags:["pixel-art","retro","animation","creative"],
    desc:{ en:"A retro pixel art portal — draw on a grid, animate frames, preview sprites and share your pixel creations.", fr:"Un portail pixel art rétro — dessinez sur une grille, animez des images, prévisualisez et partagez vos créations.", ar:"بوابة بيكسل آرت ريترو — ارسم على شبكة، حرّك الإطارات، عاين وشارك إبداعاتك." }},
  { name:"wled-kids-lab", emoji:"💡", categories:["hardware", "learning"], badge:"stable", status:"beta", tags:["WLED","LED","ESP32","neopixel","colors"],
    desc:{ en:"Control WS2812 / Neopixel LED strips with WLED — pick colors, effects and brightness. Fun intro to addressable LEDs.", fr:"Contrôlez des rubans LED WS2812 / Neopixel avec WLED — couleurs, effets et luminosité. Introduction ludique aux LEDs adressables.", ar:"تحكم في شرائط LED WS2812 / Neopixel مع WLED — ألوان، تأثيرات وسطوع. مقدمة ممتعة لأضواء LED القابلة للعنونة." }},
  { name:"esp32-c3-kids-lab", emoji:"⚡", categories:["hardware", "learning"], badge:"stable", status:"beta", tags:["ESP32","C3","IoT","sensors","LED","WiFi"],
    desc:{ en:"Hands-on ESP32-C3 lab — blink LEDs, read temperature sensors, connect to WiFi and build simple IoT projects from the browser.", fr:"Labo pratique ESP32-C3 — faites clignoter des LEDs, lisez des capteurs, connectez-vous au WiFi et créez des projets IoT depuis le navigateur.", ar:"مختبر ESP32-C3 عملي — أضئ LEDs، اقرأ مستشعرات الحرارة، اتصل بالواي فاي وأنشئ مشاريع IoT من المتصفح." }},
  { name:"crypto-academy", emoji:"🪙", categories:["learning"], badge:"stable", status:"beta", tags:["crypto","blockchain","education","interactive"],
    desc:{ en:"Interactive lessons on cryptocurrency and blockchain — learn how wallets, mining and smart contracts work.", fr:"Leçons interactives sur la cryptomonnaie et la blockchain — apprenez le fonctionnement des portefeuilles, du minage et des contrats intelligents.", ar:"دروس تفاعلية حول العملات المشفرة والبلوكتشين — تعلّم كيف تعمل المحافظ والتعدين والعقود الذكية." }},
  { name:"pentest-lab", emoji:"🔐", categories:["learning"], badge:"stable", status:"beta", tags:["security","pentest","hacking","education","CTF"],
    desc:{ en:"A beginner-friendly penetration testing sandbox — learn cybersecurity basics through guided challenges and CTF-style exercises.", fr:"Un bac à sable de test d'intrusion pour débutants — apprenez la cybersécurité à travers des défis guidés et des exercices de type CTF.", ar:"بيئة اختبار اختراق للمبتدئين — تعلّم أساسيات الأمن السيبراني من خلال تحديات موجهة وتمارين CTF." }},
  { name:"linux-kids-lab", emoji:"🐧", categories:["learning"], badge:"stable", status:"beta", tags:["linux","terminal","bash","commands","sandbox"],
    desc:{ en:"Learn Linux commands in a safe browser sandbox — navigate files, use pipes, write scripts and become a terminal ninja.", fr:"Apprenez les commandes Linux dans un bac à sable navigateur — naviguez dans les fichiers, utilisez les pipes, écrivez des scripts.", ar:"تعلّم أوامر لينكس في بيئة آمنة بالمتصفح — تنقل بين الملفات، استخدم الأنابيب، اكتب السكريبتات." }},
  { name:"classroom", emoji:"🏫", categories:["classroom"], badge:"stable", status:"beta", tags:["peerjs","webrtc","classroom","video","room-code"],
    desc:{ en:"PeerJS-powered cloud classroom — create a room with a code, share screens, chat and collaborate with up to 12 students.", fr:"Classe cloud PeerJS — créez une salle avec un code, partagez l'écran, discutez et collaborez avec jusqu'à 12 élèves.", ar:"فصل سحابي PeerJS — أنشئ غرفة برمز، شارك الشاشة، تحدث وتعاون مع حتى 12 طالب." }},
  { name:"arabic-translator", emoji:"🌐", categories:["arabic"], badge:"stable", status:"stable", tags:["arabic","translate","browser-only","no-server"],
    desc:{ en:"Translate text to and from Arabic directly in the browser — no server, no API key, fully offline-capable.", fr:"Traduisez du texte vers et depuis l'arabe dans le navigateur — sans serveur, sans clé API, fonctionne hors ligne.", ar:"ترجم النصوص من وإلى العربية مباشرة في المتصفح — بدون خادم، بدون مفتاح API، يعمل بدون إنترنت." }},
  { name:"piper-arabic-tts", emoji:"🎙️", categories:["arabic", "ai"], badge:"stable", status:"beta", tags:["arabic","piper","WASM","TTS","neural"],
    desc:{ en:"High-quality Arabic text-to-speech using Piper neural TTS compiled to WebAssembly — runs in the browser, no cloud needed.", fr:"Synthèse vocale arabe haute qualité avec Piper TTS neuronal compilé en WebAssembly — fonctionne dans le navigateur.", ar:"تحويل نص إلى كلام عربي عالي الجودة بتقنية Piper TTS العصبية عبر WebAssembly — يعمل في المتصفح." }},
  { name:"usb-logger", emoji:"🔌", categories:["microbit"], badge:"stable", status:"stable", tags:["micro:bit","serial","USB","WebSerial","data"],
    desc:{ en:"Talk to your micro:bit over USB serial from the browser — send commands, receive data and run speed tests via WebSerial.", fr:"Communiquez avec votre micro:bit via USB série depuis le navigateur — commandes, données et tests de vitesse via WebSerial.", ar:"تواصل مع micro:bit عبر USB التسلسلي من المتصفح — أرسل أوامر، استقبل بيانات واختبر السرعة عبر WebSerial." }},
  { name:"ble-logger", emoji:"📡", categories:["microbit"], badge:"stable", status:"stable", tags:["BLE","micro:bit","logger","debug","tools"],
    desc:{ en:"Bluetooth logger and debug playground for micro:bit — connect, inspect services, read sensors and log data in real time.", fr:"Enregistreur et débogueur Bluetooth pour micro:bit — connectez, inspectez les services, lisez les capteurs et logguez en temps réel.", ar:"مسجل وأداة تصحيح بلوتوث لـ micro:bit — اتصل، تفحّص الخدمات، اقرأ المستشعرات وسجّل البيانات." }},
  { name:"claude-toolkit", emoji:"🧰", categories:["ai", "tools"], badge:"dev", status:"beta", tags:["ai","claude","anthropic","prompts","workflow"],
    desc:{ en:"A toolkit for building apps and workflows with Claude AI — prompt templates, chained calls and output formatting.", fr:"Boîte à outils pour créer des apps et workflows avec Claude AI — modèles de prompts, appels chaînés et formatage.", ar:"مجموعة أدوات لبناء تطبيقات وسير عمل مع Claude AI — قوالب أوامر، استدعاءات متسلسلة وتنسيق المخرجات." }},
  { name:"puppeteer-playground", emoji:"🎭", categories:["tools"], badge:"stable", status:"beta", tags:["puppeteer","automation","scraping","testing","headless"],
    desc:{ en:"Experiment with Puppeteer browser automation — write scripts to scrape pages, take screenshots and run headless tests.", fr:"Expérimentez l'automatisation navigateur avec Puppeteer — scraping, captures d'écran et tests headless.", ar:"جرّب أتمتة المتصفح مع Puppeteer — كشط صفحات، التقاط لقطات شاشة واختبارات بدون واجهة." }},
  { name:"workshop-diy", emoji:"🏗️", categories:["tools"], badge:"hub", status:"stable", tags:["website","workshop","landing","STEM"],
    desc:{ en:"The official Workshop-Diy landing site — browse workshops, meet the team and explore STEM resources.", fr:"Le site officiel Workshop-Diy — parcourez les ateliers, découvrez l'équipe et explorez les ressources STEM.", ar:"موقع Workshop-Diy الرسمي — تصفح الورشات، تعرّف على الفريق واستكشف موارد STEM." }},
  { name:"circuit-lab", emoji:"🔋", categories:["hardware", "learning"], badge:"dev", status:"beta", tags:["circuit","electronics","simulation","LED","resistor"],
    desc:{ en:"Build and simulate electronic circuits in the browser — wire up LEDs, resistors, sensors and see the current flow.", fr:"Construisez et simulez des circuits électroniques dans le navigateur — câblez des LEDs, résistances, capteurs et visualisez le courant.", ar:"ابنِ وحاكِ دوائر إلكترونية في المتصفح — وصّل LEDs، مقاومات، مستشعرات وشاهد تدفق التيار." }},
  { name:"rocket-shield-vpn", emoji:"🛡️", categories:["tools"], badge:"dev", status:"beta", tags:["vpn","network","security","privacy"],
    desc:{ en:"Visual guide to VPNs and network security — see how encrypted tunnels protect your data.", fr:"Guide visuel des VPN et de la sécurité réseau — visualisez les tunnels chiffrés qui protègent vos données.", ar:"دليل مرئي للشبكات الافتراضية وأمن الشبكات — شاهد كيف تحمي الأنفاق المشفرة بياناتك." }},
  { name:"3d-lab", emoji:"🧊", categories:["learning"], badge:"dev", status:"beta", tags:["3D","three.js","modeling","creative"],
    desc:{ en:"Explore 3D design in the browser — create, rotate and light up objects using Three.js.", fr:"Explorez la 3D dans le navigateur — créez, faites pivoter et éclairez des objets avec Three.js.", ar:"استكشف التصميم ثلاثي الأبعاد في المتصفح — أنشئ، أدر وأضئ أشكالاً بـ Three.js." }},
  { name:"git-lab", emoji:"🔀", categories:["learning"], badge:"dev", status:"beta", tags:["git","version-control","tutorial","interactive"],
    desc:{ en:"Learn Git step by step — interactive lessons on commit, branch, merge and pull requests.", fr:"Apprenez Git pas à pas — leçons interactives sur commit, branch, merge et pull requests.", ar:"تعلّم Git خطوة بخطوة — دروس تفاعلية حول commit و branch و merge و pull requests." }},
  { name:"prompt-hero", emoji:"✨", categories:["ai", "learning"], badge:"dev", status:"beta", tags:["prompt","LLM","ai","writing","techniques"],
    desc:{ en:"Master AI prompting — learn techniques to write effective prompts for ChatGPT, Claude and other language models.", fr:"Maîtrisez l'art du prompting IA — techniques pour écrire des prompts efficaces pour ChatGPT, Claude et autres.", ar:"أتقن كتابة الأوامر للذكاء الاصطناعي — تقنيات لكتابة أوامر فعّالة لـ ChatGPT و Claude وغيرها." }},
  { name:"save-our-planet", emoji:"🌍", categories:["learning"], badge:"dev", status:"beta", tags:["climate","recycling","sustainability","kids"],
    desc:{ en:"Interactive lessons on climate change, recycling and sustainability — quizzes, facts and action plans for kids.", fr:"Leçons interactives sur le climat, le recyclage et la durabilité — quiz, faits et plans d'action pour les enfants.", ar:"دروس تفاعلية حول تغير المناخ وإعادة التدوير والاستدامة — اختبارات، حقائق وخطط عمل للأطفال." }},
  { name:"ops-catalog", emoji:"📋", categories:["tools"], badge:"dev", status:"beta", tags:["devops","CI-CD","docker","catalog"],
    desc:{ en:"A browsable catalog of DevOps tools and workflows — CI/CD pipelines, Docker, Kubernetes and monitoring cheat sheets.", fr:"Catalogue navigable d'outils DevOps — pipelines CI/CD, Docker, Kubernetes et aide-mémoire monitoring.", ar:"كتالوج قابل للتصفح لأدوات DevOps — أنابيب CI/CD، Docker، Kubernetes ومراجع المراقبة." }},
  { name:"code-kids", emoji:"💻", categories:["learning"], badge:"dev", status:"beta", tags:["HTML","CSS","JavaScript","beginner","kids"],
    desc:{ en:"Learn to code from scratch — step-by-step exercises in HTML, CSS and JavaScript with a live preview editor.", fr:"Apprenez à coder de zéro — exercices pas à pas en HTML, CSS et JavaScript avec éditeur à prévisualisation en direct.", ar:"تعلّم البرمجة من الصفر — تمارين خطوة بخطوة في HTML و CSS و JavaScript مع محرر معاينة مباشرة." }},
  { name:"smart-home", emoji:"🏡", categories:["hardware", "learning"], badge:"dev", status:"beta", tags:["IoT","dashboard","sensors","ESP32","automation"],
    desc:{ en:"Build a smart home dashboard — monitor sensors, toggle lights, set automations and learn IoT basics.", fr:"Créez un tableau de bord maison connectée — capteurs, lumières, automatisations et bases de l'IoT.", ar:"أنشئ لوحة تحكم للمنزل الذكي — راقب المستشعرات، بدّل الأضواء، اضبط الأتمتة وتعلّم أساسيات IoT." }},
  { name:"makecode-adventures", emoji:"🧱", categories:["microbit", "learning"], badge:"dev", status:"beta", tags:["makecode","blocks","micro:bit","beginner"],
    desc:{ en:"Block-based coding adventures with MakeCode — guided projects that teach programming through micro:bit challenges.", fr:"Aventures de programmation par blocs avec MakeCode — projets guidés qui enseignent la programmation via des défis micro:bit.", ar:"مغامرات برمجة بالكتل مع MakeCode — مشاريع موجهة تعلّم البرمجة عبر تحديات micro:bit." }},
  { name:"bit-54-activities", emoji:"🤖", categories:["microbit", "learning"], badge:"dev", status:"beta", tags:["micro:bit","activities","projects","beginner","advanced"],
    desc:{ en:"54 hands-on activities for BBC micro:bit — from blinking LEDs to BLE robots, beginner to advanced.", fr:"54 activités pratiques pour BBC micro:bit — du clignotement de LEDs aux robots BLE, débutant à avancé.", ar:"54 نشاطاً عملياً لـ BBC micro:bit — من إضاءة LEDs إلى روبوتات BLE، من المبتدئ إلى المتقدم." }},
  { name:"crypto-vault", emoji:"💰", categories:["learning"], badge:"dev", status:"beta", tags:["cryptography","encryption","hashing","keys","digital-signatures"],
    desc:{ en:"Learn cryptography basics hands-on — encrypt messages, hash passwords, generate keys and verify digital signatures.", fr:"Apprenez la cryptographie en pratique — chiffrez des messages, hachez des mots de passe, générez des clés et vérifiez des signatures.", ar:"تعلّم أساسيات التشفير عملياً — شفّر رسائل، جزّئ كلمات مرور، ولّد مفاتيح وتحقق من التوقيعات الرقمية." }},
  { name:"apps", emoji:"🏠", categories:["tools"], badge:"new", status:"dev", tags:["hub","index","multilingual","kids","STEM"],
    desc:{ en:"A fun, multilingual hub for all Workshop-Diy mini-apps — built for kids, beginners, and STEM classrooms.", fr:"Apps — explorez et expérimentez !", ar:"Apps — استكشف وجرّب!" }},
  { name:"bonjour", emoji:"👋", categories:["learning"], badge:"new", status:"dev", tags:["mDNS","Bonjour","DNS-SD","networking","kids"],
    desc:{ en:"Learn mDNS/Bonjour networking — discover devices, send queries, register services and explore local network protocols.", fr:"Bonjour — explorez et expérimentez !", ar:"Bonjour — استكشف وجرّب!" }},
  { name:"cowsay", emoji:"🐄", categories:["learning"], badge:"new", status:"dev", tags:["math","ASCII-art","fun-facts","kids"],
    desc:{ en:"A fun ASCII cow that solves math expressions and shares amazing facts — pick a category and learn!", fr:"Cowsay — explorez et expérimentez !", ar:"Cowsay — استكشف وجرّب!" }},
  { name:"dhcp-lab", emoji:"🔗", categories:["tools", "hardware"], badge:"new", status:"dev", tags:["DHCP","networking","Python","dashboard"],
    desc:{ en:"Zero-dependency Python DHCP server with real-time web dashboard.", fr:"Dhcp Lab — explorez et expérimentez !", ar:"Dhcp Lab — استكشف وجرّب!" }},
  { name:"emojis", emoji:"😀", categories:["learning"], badge:"new", status:"dev", tags:["emoji","visual-coding","programming","kids"],
    desc:{ en:"EmojiFlow — learn programming concepts through emoji-based coding challenges and visual blocks.", fr:"Emojis — explorez et expérimentez !", ar:"Emojis — استكشف وجرّب!" }},
  { name:"morse-code", emoji:"📟", categories:["microbit", "learning", "hardware"], badge:"new", status:"dev", tags:["morse-code","BLE","micro:bit","audio","kids"],
    desc:{ en:"Learn Morse code interactively — alphabet trainer, encoder/decoder, audio playback, challenge quizzes and micro:bit BLE communication.", fr:"Morse Code — explorez et expérimentez !", ar:"Morse Code — استكشف وجرّب!" }},
  { name:"mqtt-lab", emoji:"📨", categories:["learning", "hardware"], badge:"new", status:"dev", tags:["MQTT","IoT","pub-sub","security","kids"],
    desc:{ en:"Learn MQTT hands-on — connect to a broker, publish/subscribe to topics, explore IoT security and chat with an AI assistant.", fr:"Mqtt Lab — explorez et expérimentez !", ar:"Mqtt Lab — استكشف وجرّب!" }},
  { name:"ocpp", emoji:"⛽", categories:["tools", "learning"], badge:"new", status:"dev", tags:["OCPP","EV-charging","WebSocket","Python","simulation"],
    desc:{ en:"A complete, production-quality OCPP 1.6J simulation ecosystem for learning, testing, and development. Includes a CSMS, Charging Station, and EV Battery simulator — all with real-time web UIs —...", fr:"Ocpp — explorez et expérimentez !", ar:"Ocpp — استكشف وجرّب!" }},
  { name:"ollama-bot", emoji:"🦙", categories:["ai", "tools"], badge:"new", status:"dev", tags:["AI","chatbot","ollama","local-LLM","offline"],
    desc:{ en:"Chat with a local AI running on your computer via Ollama — private, offline, no cloud needed.", fr:"Ollama Bot — explorez et expérimentez !", ar:"Ollama Bot — استكشف وجرّب!" }},
  { name:"salat-times", emoji:"🕐", categories:["microbit", "arabic"], badge:"new", status:"dev", tags:["prayer-times","adhan","micro:bit","BLE","PWA","Islamic"],
    desc:{ en:"A single-file Islamic prayer times web app with micro:bit V2 Adhan Lantern support.", fr:"Salat Times — explorez et expérimentez !", ar:"Salat Times — استكشف وجرّب!" }},
  { name:"scapy", emoji:"🕸️", categories:["learning"], badge:"new", status:"dev", tags:["packets","networking","Scapy","cybersecurity","kids"],
    desc:{ en:"Scapy Kids Lab — 16 interactive demos to build, inspect and visualize network packets layer by layer.", fr:"Scapy — explorez et expérimentez !", ar:"Scapy — استكشف وجرّب!" }},
  { name:"sdr-lab", emoji:"📻", categories:["learning", "hardware"], badge:"new", status:"dev", tags:["SDR","radio","spectrum","frequencies","kids"],
    desc:{ en:"SDR Kids Lab — learn Software Defined Radio with interactive lessons on radio waves, frequencies and signal decoding.", fr:"Sdr Lab — explorez et expérimentez !", ar:"Sdr Lab — استكشف وجرّب!" }},
  { name:"template", emoji:"📄", categories:["tools"], badge:"new", status:"dev", tags:["boilerplate","starter","i18n"],
    desc:{ en:"Starter template for new Workshop-DIY apps — boilerplate HTML with i18n, themes and standard layout.", fr:"Template — explorez et expérimentez !", ar:"Template — استكشف وجرّب!" }},
  { name:"tesbih", emoji:"📿", categories:["arabic"], badge:"new", status:"dev", tags:["tasbih","dhikr","prayer","counter","PWA","Islamic"],
    desc:{ en:"A digital tasbih (prayer bead counter) with dhikr tracking — tap to count, fully offline PWA.", fr:"Tesbih — explorez et expérimentez !", ar:"Tesbih — استكشف وجرّب!" }},
  { name:"tethkir", emoji:"✅", categories:["arabic", "tools"], badge:"new", status:"dev", tags:["task-manager","notes","encryption","PWA","Islamic"],
    desc:{ en:"Islamic Task Manager & Secure Notes", fr:"Tethkir — explorez et expérimentez !", ar:"Tethkir — استكشف وجرّب!" }},
  { name:"time-machine", emoji:"⏳", categories:["learning", "arabic"], badge:"new", status:"dev", tags:["Islamic-scientists","history","game","interactive","kids"],
    desc:{ en:"An interactive educational game about Muslim scientists who changed the world.", fr:"Time Machine — explorez et expérimentez !", ar:"Time Machine — استكشف وجرّب!" }},
  { name:"tty", emoji:"🖥️", categories:["tools", "hardware"], badge:"new", status:"dev", tags:["serial","terminal","bash","WebSerial","remote"],
    desc:{ en:"A web-based tool to send and execute bash scripts on a Linux board over serial — terminal, session recording, hex display and profiles.", fr:"Tty — explorez et expérimentez !", ar:"Tty — استكشف وجرّب!" }},
  { name:"workshop-diy-logos", emoji:"🖼️", categories:["tools"], badge:"new", status:"dev", tags:["logos","SVG","branding","assets"],
    desc:{ en:"Official Workshop-DIY logo pack — SVG, PNG, ICO and AI formats for all platforms.", fr:"Workshop Diy Logos — explorez et expérimentez !", ar:"Workshop Diy Logos — استكشف وجرّب!" }},
  { name:"flight-tracker", emoji:"✈️", categories:["learning", "microbit"], badge:"stable", status:"stable", tags:["flight-tracking","real-time","micro:bit","BLE","kids"],
    desc:{ en:"A kid-friendly real-time flight tracker that turns the sky into an interactive classroom.", fr:"Flight Tracker — explorez et expérimentez !", ar:"Flight Tracker — استكشف وجرّب!" }},
  { name:"flyers", emoji:"📰", categories:["tools"], badge:"stable", status:"stable", tags:["flyers","social-media","marketing","design"],
    desc:{ en:"Promotional flyer templates and social media posts for Workshop-DIY apps.", fr:"Flyers — explorez et expérimentez !", ar:"Flyers — استكشف وجرّب!" }},
  { name:"git-pulse", emoji:"💓", categories:["tools"], badge:"dev", status:"offline", tags:["GitHub","repository-manager","CLI","developer-tool"],
    desc:{ en:"The complete GitHub repository manager — CLI + Web UI", fr:"Git Pulse — explorez et expérimentez !", ar:"Git Pulse — استكشف وجرّب!" }},
  { name:"golden-age", emoji:"🏛️", categories:["learning", "arabic", "classroom"], badge:"stable", status:"stable", tags:["Islamic-history","Golden-Age","interactive","game","kids"],
    desc:{ en:"An interactive educational journey through the Islamic Golden Age — explore algebra, medicine, optics, engineering and more.", fr:"Golden Age — explorez et expérimentez !", ar:"Golden Age — استكشف وجرّب!" }},
  { name:"hacktivist-kids", emoji:"🥷", categories:["learning"], badge:"stable", status:"stable", tags:["cybersecurity","pranks","crypto","hacker-culture","kids"],
    desc:{ en:"A playful cybersecurity roleplay for kids — fake hacker terminal, prank missions, poster generator and spy-themed mini-games.", fr:"Hacktivist Kids — explorez et expérimentez !", ar:"Hacktivist Kids — استكشف وجرّب!" }},
  { name:"linkedin", emoji:"💼", categories:["tools"], badge:"stable", status:"stable", tags:["portfolio","job-search","CV","multilingual"],
    desc:{ en:"Abdelhak Bourdim — Senior Embedded Software Engineer — 20+ years", fr:"Linkedin — explorez et expérimentez !", ar:"Linkedin — استكشف وجرّب!" }},
  { name:"posts", emoji:"📝", categories:["tools"], badge:"stable", status:"stable", tags:["post-generator","social-media","canvas","PWA"],
    desc:{ en:"Outil multi-mode de création de visuels pour Workshop-DIY (Chelles 77500). Application 100% client-side, fichier HTML unique, zéro dépendance serveur. PWA installable.", fr:"Posts — explorez et expérimentez !", ar:"Posts — استكشف وجرّب!" }},
  { name:"pranky-kids", emoji:"🃏", categories:["learning"], badge:"stable", status:"stable", tags:["pranks","fun","suite-index","kids"],
    desc:{ en:"A showcase of 115 Workshop-DIY files — the complete suite index in one page.", fr:"Pranky Kids — explorez et expérimentez !", ar:"Pranky Kids — استكشف وجرّب!" }},
  { name:"roadmaps", emoji:"🗺️", categories:["tools"], badge:"stable", status:"stable", tags:["Islamic","YouTube","learning-paths","curriculum"],
    desc:{ en:"Curated Islamic YouTube channel roadmaps and learning paths.", fr:"Roadmaps — explorez et expérimentez !", ar:"Roadmaps — استكشف وجرّب!" }},
  { name:"sada", emoji:"📖", categories:["learning", "arabic"], badge:"stable", status:"stable", tags:["content-archive","564-files","multilingual","educational"],
    desc:{ en:"564 self-contained HTML files across 3 languages (EN/FR/AR) for the Workshop-DIY educational ecosystem.", fr:"Sada — explorez et expérimentez !", ar:"Sada — استكشف وجرّب!" }},
  { name:"sanitize-names-toolkit", emoji:"🧹", categories:["tools"], badge:"stable", status:"stable", tags:["bash","file-names","sanitize","CLI"],
    desc:{ en:"Bash toolkit to sanitize and normalize file and folder names — simple and advanced modes.", fr:"Sanitize Names Toolkit — explorez et expérimentez !", ar:"Sanitize Names Toolkit — استكشف وجرّب!" }},
  { name:"satellites", emoji:"🛰️", categories:["learning", "arabic", "classroom"], badge:"stable", status:"stable", tags:["satellite-tracking","astronomy","Islamic-heritage","interactive","kids"],
    desc:{ en:"An interactive educational experience about satellites, orbital mechanics, and the Arab astronomical heritage that made it all possible.", fr:"Satellites — explorez et expérimentez !", ar:"Satellites — استكشف وجرّب!" }},
  { name:"termlite", emoji:"🔧", categories:["tools"], badge:"stable", status:"stable", tags:["SSH","SFTP","VNC","remote-access","self-hosted"],
    desc:{ en:"Self-hosted browser-based remote access hub. SSH terminal, SFTP file browser, VNC viewer, network scanner, encrypted credential vault, AI copilot, DHCP server, session recording, workflow...", fr:"Termlite — explorez et expérimentez !", ar:"Termlite — استكشف وجرّب!" }},
];

/* ============================================================
   INIT
   ============================================================ */
function init() {
  APPS = INLINE_APPS.map((a, i) => ({
    ...a,
    _num: i + 1,
    github: `https://github.com/${USER}/${a.name}`,
    view: VIEW(a.name)
  }));

  applyTheme(THEME);
  applyLang(LANG);
  applyViewMode(VIEW_MODE);
  updateFilterCounts();
  render();
  updateGreeting();
  updateStats();
  updateJoke();
  updateExplorer();
  initParticles();
  initListeners();
}

/* ============================================================
   i18n
   ============================================================ */
function t(key) { return (I18N[LANG] || I18N.en)[key] || (I18N.en)[key] || key; }

function applyLang(lang) {
  LANG = lang;
  localStorage.setItem("wdiy-lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.dataset.lang = lang;

  langButtons.forEach(b => b.classList.toggle("active", b.dataset.lang === lang));

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = t(key);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  updateGreeting();
  updateStats();
  updateJoke();
  updateExplorer();
  updateFilterCounts();
  render();
}

/* ============================================================
   THEMES
   ============================================================ */
function applyTheme(theme) {
  THEME = theme;
  localStorage.setItem("wdiy-theme", theme);
  document.documentElement.dataset.theme = theme;
  themeButtons.forEach(b => b.classList.toggle("active", b.dataset.theme === theme));
  initParticles();
}

/* ============================================================
   SOUND EFFECTS
   ============================================================ */
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;

function playSound(type) {
  if (!SOUND) return;
  if (!audioCtx) audioCtx = new AudioCtx();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  gain.gain.value = 0.08;

  if (type === "pop") {
    osc.frequency.setValueAtTime(600, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
    osc.start(); osc.stop(audioCtx.currentTime + 0.15);
  } else if (type === "zap") {
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.1);
    gain.gain.value = 0.1;
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
    osc.start(); osc.stop(audioCtx.currentTime + 0.15);
  } else if (type === "whoosh") {
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(300, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.25);
    gain.gain.value = 0.04;
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
    osc.start(); osc.stop(audioCtx.currentTime + 0.25);
  } else if (type === "tada") {
    [523, 659, 784].forEach((freq, i) => {
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.connect(g); g.connect(audioCtx.destination);
      o.frequency.value = freq;
      g.gain.value = 0.06;
      g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3 + i * 0.1);
      o.start(audioCtx.currentTime + i * 0.1);
      o.stop(audioCtx.currentTime + 0.3 + i * 0.1);
    });
  }
}

/* ============================================================
   PARTICLES — stars in Medina theme, circles otherwise
   ============================================================ */
let particles = [];
let animFrameId = null;

function drawStar(ctx, cx, cy, r, points, innerR) {
  ctx.beginPath();
  for (let i = 0; i < points * 2; i++) {
    const radius = i % 2 === 0 ? r : innerR;
    const angle = (Math.PI * i) / points - Math.PI / 2;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.closePath();
}

function initParticles() {
  if (animFrameId) cancelAnimationFrame(animFrameId);
  const ctx = particleCanvas.getContext("2d");
  particleCanvas.width = window.innerWidth;
  particleCanvas.height = window.innerHeight;

  const isMedina = THEME === "islamic";
  const isAlhambra = THEME === "alhambra";
  const isIznik = THEME === "iznik";
  const isZellige = THEME === "zellige";
  const isArabesque = THEME === "arabesque";
  const isIslamic = isMedina || isAlhambra || isIznik || isZellige || isArabesque;
  const color = getComputedStyle(document.documentElement).getPropertyValue('--particle-color').trim() || 'rgba(127,90,240,0.3)';
  const count = window.innerWidth < 600 ? (isIslamic ? 18 : 25) : (isIslamic ? 35 : 50);
  particles = [];

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * particleCanvas.width,
      y: Math.random() * particleCanvas.height,
      r: isIslamic ? Math.random() * 5 + 2 : Math.random() * 3 + 1,
      dx: (Math.random() - 0.5) * (isIslamic ? 0.25 : 0.5),
      dy: (Math.random() - 0.5) * (isIslamic ? 0.25 : 0.5),
      alpha: Math.random() * 0.5 + 0.2,
      rot: Math.random() * Math.PI * 2,
      dr: (Math.random() - 0.5) * (isArabesque ? 0.003 : 0.008),
      points: (isMedina || isAlhambra) ? (Math.random() > 0.4 ? 8 : 6) :
              isIznik ? (Math.random() > 0.5 ? 6 : 4) :
              isZellige ? 4 : 0,
      shape: isArabesque ? "leaf" : isZellige ? "diamond" : isIznik ? "diamond" : "star"
    });
  }

  function animate() {
    ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;
      p.rot += p.dr;
      if (p.x < 0 || p.x > particleCanvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > particleCanvas.height) p.dy *= -1;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = color.replace(/[\d.]+\)$/, p.alpha + ')');

      if (isMedina && p.points) {
        drawStar(ctx, 0, 0, p.r, p.points, p.r * 0.45);
        ctx.fill();
        ctx.strokeStyle = color.replace(/[\d.]+\)$/, (p.alpha * 0.5) + ')');
        ctx.lineWidth = 0.5;
        ctx.stroke();
      } else if (isAlhambra && p.points) {
        drawStar(ctx, 0, 0, p.r, p.points, p.r * 0.4);
        ctx.fill();
        ctx.strokeStyle = color.replace(/[\d.]+\)$/, (p.alpha * 0.4) + ')');
        ctx.lineWidth = 0.5;
        ctx.stroke();
      } else if ((isIznik || isZellige) && p.points) {
        // Diamond / rotated square
        const s = p.r;
        ctx.beginPath();
        ctx.moveTo(0, -s); ctx.lineTo(s, 0); ctx.lineTo(0, s); ctx.lineTo(-s, 0);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = color.replace(/[\d.]+\)$/, (p.alpha * 0.4) + ')');
        ctx.lineWidth = 0.5;
        ctx.stroke();
      } else if (isArabesque) {
        // Organic leaf shape
        const s = p.r;
        ctx.beginPath();
        ctx.moveTo(0, -s);
        ctx.bezierCurveTo(s * 0.8, -s * 0.5, s * 0.8, s * 0.5, 0, s);
        ctx.bezierCurveTo(-s * 0.8, s * 0.5, -s * 0.8, -s * 0.5, 0, -s);
        ctx.closePath();
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    });
    animFrameId = requestAnimationFrame(animate);
  }
  animate();
}

window.addEventListener("resize", () => {
  particleCanvas.width = window.innerWidth;
  particleCanvas.height = window.innerHeight;
});

/* ============================================================
   CONFETTI
   ============================================================ */
function fireConfetti() {
  const ctx = confettiCanvas.getContext("2d");
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const pieces = [];
  const islamicThemes = {
    islamic: ["#d4a843", "#f0c75e", "#1b8c6a", "#b8922e", "#3aaf85", "#f2e8d0", "#0f5e47", "#fff"],
    alhambra: ["#e8922e", "#f0c75e", "#c46a1a", "#a0522d", "#f5e6cc", "#d4a843", "#fff"],
    iznik: ["#00bcd4", "#e84040", "#1a73e8", "#fff", "#1a3a7a", "#00e5ff", "#ff6666"],
    zellige: ["#1a8c50", "#e8a832", "#2a78c8", "#c46028", "#3aaf70", "#fff", "#f0c75e"],
    arabesque: ["#5a8068", "#b0b8d0", "#d0d8e8", "#3a5a44", "#7880a0", "#fff"]
  };
  const colors = islamicThemes[THEME]
    || ["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#8b5cf6", "#06b6d4", "#fff"];

  for (let i = 0; i < 100; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 16 + 6;
    pieces.push({
      x: window.innerWidth / 2, y: window.innerHeight / 2,
      dx: Math.cos(angle) * speed, dy: Math.sin(angle) * speed - 8,
      r: Math.random() * 5 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * 360, dr: (Math.random() - 0.5) * 15,
      life: 1, shape: Math.random() > 0.5 ? "rect" : "circle"
    });
  }

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    let alive = false;
    pieces.forEach(p => {
      if (p.life <= 0) return;
      alive = true;
      p.x += p.dx; p.y += p.dy; p.dy += 0.35;
      p.rot += p.dr; p.life -= 0.016; p.dx *= 0.985;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      if (p.shape === "rect") ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 0.5);
      else { ctx.beginPath(); ctx.arc(0, 0, p.r / 2, 0, Math.PI * 2); ctx.fill(); }
      ctx.restore();
    });
    if (alive && frame < 180) { frame++; requestAnimationFrame(draw); }
    else { ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height); }
  }
  draw();
}

/* ============================================================
   FILTERING & SEARCHING
   ============================================================ */
function normalize(s) { return (s || "").toLowerCase(); }

function matches(app) {
  const desc = (app.desc && typeof app.desc === 'object') ? (app.desc[LANG] || app.desc.en || '') : (app.desc || '');
  const text = normalize(app.name + " " + desc + " " + (app.tags || []).join(" ") + " " + (app.status || ""));
  const query = normalize(q.value).trim();
  const words = query.split(/\s+/).filter(Boolean);
  const okQuery = words.length === 0 || words.every(w => text.includes(w));
  const okFilter = !currentFilter || (app.categories && app.categories.includes(currentFilter));
  const okStatus = !currentStatusFilter || app.status === currentStatusFilter;
  return okQuery && okFilter && okStatus;
}

/* ============================================================
   CARD BUILDER
   ============================================================ */
const CARD_COLORS = [
  "#ef4444","#f97316","#eab308","#22c55e","#10b981",
  "#14b8a6","#06b6d4","#0ea5e9","#3b82f6","#6366f1",
  "#8b5cf6","#7c3aed","#2563eb","#0891b2","#059669",
  "#ca8a04","#dc2626","#ea580c","#4f46e5","#0d9488",
  "#16a34a","#d97706","#9333ea"
];

function card(app, index) {
  const el = document.createElement("article");
  const num = app._num || (index + 1);
  const color = CARD_COLORS[((app._num || index + 1) - 1) % CARD_COLORS.length];
  el.className = "kids-card";
  el.dataset.cat = (app.categories && app.categories[0]) || "";
  el.style.setProperty("--card-color", color);
  el.setAttribute("tabindex", "0");
  el.setAttribute("role", "article");
  el.setAttribute("aria-label", app.name);

  const desc = (app.desc && typeof app.desc === 'object') ? (app.desc[LANG] || app.desc.en || '') : (app.desc || '');
  const isFav = FAVS.includes(app.name);

  // Badge (NEW / Popular / Hub)
  let badgeHTML = "";
  if (app.badge === "new") badgeHTML = `<span class="card-badge new">${t("badge_new")}</span>`;
  else if (app.badge === "popular") badgeHTML = `<span class="card-badge popular">${t("badge_popular")}</span>`;
  else if (app.badge === "hub") badgeHTML = `<span class="card-badge hub">${t("badge_hub")}</span>`;
  else if (app.badge === "stable") badgeHTML = `<span class="card-badge stable">${t("badge_stable")}</span>`;

  // Status badge (Beta / Dev / Offline / custom — stable shows nothing)
  let statusHTML = "";
  if (app.status === "beta") statusHTML = `<span class="status-badge beta">${t("status_beta")}</span>`;
  else if (app.status === "dev") statusHTML = `<span class="status-badge dev">${t("status_dev")}</span>`;
  else if (app.status === "offline") statusHTML = `<span class="status-badge offline">${t("status_offline")}</span>`;
  else if (app.status && app.status !== "stable") statusHTML = `<span class="status-badge custom">${app.status}</span>`;

  el.innerHTML = `
    ${badgeHTML}
    <button class="fav-btn ${isFav ? 'favorited' : ''}" data-fav="${app.name}" title="Favorite" aria-label="Toggle favorite">🔥</button>
    <h3><span class="card-number">#${num}</span><span class="kids-emoji">${app.emoji}</span><span class="kids-name">${app.name}</span>${statusHTML}</h3>
    <p class="kids-desc">${desc}</p>
    <div class="kids-actions">
      <a class="kids-link" href="${app.github}" target="_blank" rel="noreferrer">${t("github")}</a>
      <a class="kids-link primary view-link" href="${app.view}" target="_blank" rel="noreferrer" data-app="${app.name}">${t("view_btn")}</a>
    </div>
    <div class="kids-tags">
      ${(app.tags || []).slice(0, 5).map(tag => `<span class="kids-tag">${tag}</span>`).join("")}
    </div>
  `;

  el.querySelector(".fav-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFav(app.name, e.currentTarget);
  });

  el.querySelector(".view-link")?.addEventListener("click", () => {
    fireConfetti();
    playSound("tada");
    trackExplored(app.name);
  });

  return el;
}

/* ============================================================
   FAVORITES
   ============================================================ */
function toggleFav(name, btn) {
  if (FAVS.includes(name)) {
    FAVS = FAVS.filter(f => f !== name);
    btn.classList.remove("favorited");
    playSound("pop");
  } else {
    FAVS.push(name);
    btn.classList.add("favorited");
    playSound("zap");
  }
  localStorage.setItem("wdiy-favs", JSON.stringify(FAVS));
}

/* ============================================================
   EXPLORER TRACKER
   ============================================================ */
function trackExplored(name) {
  if (!EXPLORED.includes(name)) {
    EXPLORED.push(name);
    localStorage.setItem("wdiy-explored", JSON.stringify(EXPLORED));
    updateExplorer();
  }
}

function updateExplorer() {
  const count = EXPLORED.length;
  let title = t("explorer_title_0");
  if (count >= 22) title = t("explorer_title_22");
  else if (count >= 15) title = t("explorer_title_15");
  else if (count >= 10) title = t("explorer_title_10");
  else if (count >= 5) title = t("explorer_title_5");

  if (count > 0) {
    explorerBar.innerHTML = `${t("explorer_prefix")} <strong>${count}</strong> ${t("explorer_suffix")} — ${title}`;
  } else {
    explorerBar.innerHTML = title;
  }
}

/* ============================================================
   GREETING
   ============================================================ */
function updateGreeting() {
  const hour = new Date().getHours();
  let key = "greeting_morning";
  if (hour >= 12 && hour < 18) key = "greeting_afternoon";
  else if (hour >= 18 || hour < 5) key = "greeting_evening";
  greetingBar.textContent = t(key);
}

/* ============================================================
   STATS
   ============================================================ */
function updateStats() {
  const cats = new Set(APPS.flatMap(a => a.categories || []));
  statsBar.innerHTML = `
    <span class="stat-item"><span class="stat-num">${APPS.length}</span> ${t("stats_apps")}</span>
    <span class="stat-item">•</span>
    <span class="stat-item"><span class="stat-num">${cats.size}</span> ${t("stats_cats")}</span>
    <span class="stat-item">•</span>
    <span class="stat-item">${t("stats_made")}</span>
  `;
}

/* ============================================================
   JOKE
   ============================================================ */
function updateJoke() {
  const jokes = t("jokes");
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  jokeBar.innerHTML = `<span class="joke-emoji">😂</span> ${joke}`;
}

/* ============================================================
   FILTER COUNTS
   ============================================================ */
function updateFilterCounts() {
  document.querySelectorAll("[data-count-filter]").forEach(el => {
    const cat = el.dataset.countFilter;
    const count = cat ? APPS.filter(a => a.categories && a.categories.includes(cat)).length : APPS.length;
    el.textContent = count;
  });
}

/* ============================================================
   RENDER
   ============================================================ */
function render() {
  grid.innerHTML = "";
  const items = APPS.filter(matches);
  items.forEach((a, i) => grid.appendChild(card(a, i)));
  empty.style.display = items.length ? "none" : "block";
}

/* ============================================================
   VIEW MODE
   ============================================================ */
function applyViewMode(mode) {
  VIEW_MODE = mode;
  localStorage.setItem("wdiy-view", mode);
  grid.classList.toggle("list-view", mode === "list");
  viewButtons.forEach(b => b.classList.toggle("active", b.dataset.view === mode));
}

/* ============================================================
   SHUFFLE
   ============================================================ */
function shuffleApps() {
  for (let i = APPS.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [APPS[i], APPS[j]] = [APPS[j], APPS[i]];
  }
  playSound("whoosh");
  render();
}

/* ============================================================
   EASTER EGG — Click logo 5 times
   ============================================================ */
function easterEgg() {
  logoClicks++;
  if (logoClicks >= 5) {
    logoClicks = 0;
    fireConfetti();
    playSound("tada");
    siteLogo.style.animation = "wiggle 0.5s ease-in-out 3";
    setTimeout(() => { siteLogo.style.animation = ""; }, 1500);
  }
}

/* ============================================================
   SCROLL TO TOP
   ============================================================ */
function checkScroll() {
  scrollTopBtn.classList.toggle("visible", window.scrollY > 300);
}

/* ============================================================
   LISTENERS
   ============================================================ */
function initListeners() {
  q.addEventListener("input", () => {
    clearBtn.style.display = q.value ? "block" : "none";
    render();
  });
  clearBtn.addEventListener("click", () => {
    q.value = "";
    clearBtn.style.display = "none";
    render();
    q.focus();
  });

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter || "";
      playSound("pop");
      render();
    });
  });

  statusFilterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      statusFilterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentStatusFilter = btn.dataset.status || "";
      playSound("pop");
      render();
    });
  });

  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      playSound("pop");
      applyLang(btn.dataset.lang);
    });
  });

  themeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      playSound("zap");
      applyTheme(btn.dataset.theme);
    });
  });

  viewButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      playSound("pop");
      applyViewMode(btn.dataset.view);
    });
  });

  soundToggle.addEventListener("click", () => {
    SOUND = !SOUND;
    localStorage.setItem("wdiy-sound", SOUND ? "on" : "off");
    soundToggle.textContent = SOUND ? "🔊" : "🔇";
    if (SOUND) playSound("pop");
  });
  soundToggle.textContent = SOUND ? "🔊" : "🔇";

  shuffleBtn.addEventListener("click", shuffleApps);

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    playSound("whoosh");
  });
  window.addEventListener("scroll", checkScroll, { passive: true });

  siteLogo.addEventListener("click", easterEgg);

  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== q) {
      e.preventDefault();
      q.focus();
    }
    if (e.key === "Escape" && document.activeElement === q) {
      q.blur();
    }
  });
}

/* ============================================================
   START
   ============================================================ */
init();
