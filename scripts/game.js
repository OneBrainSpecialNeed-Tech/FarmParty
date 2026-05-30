
'use strict';
/* ═══════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════ */
const TRACK_QUESTIONS = {
    rabbit: [  // הפכים 🐰
      { cat: 'הפכים', q: 'הַהֶפֶךְ מֵעָצוּב:', opts: ['מְחֻיָּךְ', 'שָׂמֵחַ', 'שָׁמֵן'], ans: 1 },
      { cat: 'הפכים', q:' הַהֶפֶךְ מִגָּבוֹהַּ: ', opts: [' נָמוּךְ ', 'רָזֶה ', 'גַּמָּד'], ans: 0 },
      { cat: 'הפכים', q: 'הַהֶפֶךְ מֵרָזֶה: ', opts: ['דַּק ', 'שָׁמֵן ', 'שְמַנְמַן'], ans: 1 },
      { cat: 'הפכים', q:' הַהֶפֶךְ מִשָּקוּף: ', opts: ['סָגוּר ', 'נָעוּל ', 'אָטוּם'], ans: 2 },
      { cat: 'הפכים', q:' הַהֶפֶךְ מִפָּתוּחַ:', opts: ['יָבֵשׁ', 'סָגוּר ', 'חַם '], ans: 1 },
      { cat: 'הפכים', q:' הַהֶפֶךְ מִצַּדִּיק:' , opts: ['רָשָׁע ', 'חָכָם ', 'בֵּינוֹנִי'], ans: 0 },
      { cat: 'הפכים', q:' הַהֶפֶךְ מִשָּּׁחוֹר:', opts: ['וָרֹד ', 'לָבָן ', 'אָפוֹר'], ans: 1 },
      { cat: 'הפכים', q:' הַהֶפֶךְ מֵאָרֹךְ: ', opts: ['קָטָן ', 'חָתוּךְ ', 'קָצָר'], ans: 2 },
      { cat: 'הפכים', q: 'ההפך מחם:', opts: ['נעים', 'קר', 'קפוא'], ans: 1 },
      { cat: 'הפכים', q:' הַהֶפֶךְ מִגָּלוּי: ', opts: ['מְכֻסֶּה ', 'חָשׁוּךְ ', 'יָפֶה'], ans: 0 },
      { cat: 'הפכים', q:' הַהֶפֶךְ מֵחָזָק: ', opts: ['רָזָה ', 'חַלָּשׁ ', 'שָׁחוֹר'], ans: 1 },
      { cat: 'הפכים', q:' הַהֶפֶךְ מֵרָעֵב: ', opts: ['שָׂבֵעַ ', 'מַלֵּא ', 'נָפוּחַ'], ans: 0 },
      
    ],
monkey: [  // קטגוריות 🐒
  { cat: 'קטגוריות', q: 'לְאֵיזוֹ קְבוּצָה שַׁיָּךְ אָרוֹן?', opts: ['רָהִיטִים', 'כְּלֵי תַּחְבּוּרָה', 'סַכּוּ"ם'], ans: 0 },
  { cat: 'קטגוריות', q: 'לְאֵיזוֹ קְבוּצָה שַׁיָּךְ עִפָּרוֹן?', opts: ['כְּלֵי אֹכֶל', 'כְּלֵי כְּתִיבָה', 'כְּלֵי נְגִינָה'], ans: 1 },
  { cat: 'קטגוריות', q: 'לְאֵיזוֹ קְבוּצָה שַׁיֶּכֶת כַּפִּית?', opts: ['פֵּרוֹת', 'יְרָקוֹת', 'כְּלֵי אֹכֶל'], ans: 2 },
  { cat: 'קטגוריות', q: 'לְאֵיזוֹ קְבוּצָה שַׁיֶּכֶת גִּיטָרָה?', opts: ['כְּלֵי תַּחְבּוּרָה', 'כְּלֵי כְּתִיבָה', 'כְּלֵי נְגִינָה'], ans: 2 },
  { cat: 'קטגוריות', q: 'לְאֵיזוֹ קְבוּצָה שַׁיָּךְ כֶּלֶב?', opts: ['בַּעֲלֵי חַיִּים', 'פְּרִיטֵי לְבוּשׁ', 'כְּלֵי אֹכֶל'], ans: 0 },
  { cat: 'קטגוריות', q: 'לְאֵיזוֹ קְבוּצָה שַׁיָּךְ מְשֻׁלָּשׁ?', opts: ['צוּרוֹת', 'מוּצְרֵי חַשְׁמָל', 'מוּצְרֵי נִקָּיוֹן'], ans: 0 },
  { cat: 'קטגוריות', q: 'לְאֵיזוֹ קְבוּצָה שַׁיֶּכֶת חֻלְצָה?', opts: ['פְּרִיטֵי לְבוּשׁ', 'בַּעֲלֵי חַיִּים', 'מוּצְרֵי חַשְׁמָל'], ans: 0 },
  { cat: 'קטגוריות', q: 'לְאֵיזוֹ קְבוּצָה שַׁיָּךְ פַּחַד?', opts: ['צְבָעִים', 'רְגָשׁוֹת', 'רָהִיטִים'], ans: 1 },
  { cat: 'קטגוריות', q: 'לְאֵיזוֹ קְבוּצָה שַׁיָּךְ תַּפּוּחַ?', opts: ['יְרָקוֹת', 'פֵּרוֹת', 'דְּגָנִים'], ans: 1 },
  { cat: 'קטגוריות', q: 'לְאֵיזוֹ קְבוּצָה שַׁיָּךְ מָטוֹס?', opts: ['בַּעֲלֵי חַיִּים', 'כְּלֵי נְגִינָה', 'כְּלֵי תַּחְבּוּרָה'], ans: 2 },
  { cat: 'קטגוריות', q: 'לְאֵיזוֹ קְבוּצָה שַׁיָּךְ פִּיל?', opts: ['כְּלֵי בַּיִת', 'בַּעֲלֵי חַיִּים', 'יְרָקוֹת'], ans: 1 },
  { cat: 'קטגוריות', q: 'לְאֵיזוֹ קְבוּצָה שַׁיָּךְ סַכִּין?', opts: ['כְּלֵי נְגִינָה', 'פֵּרוֹת', 'סַכּוּ"ם'], ans: 2 },
  { cat: 'קטגוריות', q: 'לְאֵיזוֹ קְבוּצָה שַׁיָּךְ אוֹטוֹבּוּס?', opts: ['כְּלֵי תַּחְבּוּרָה', 'רָהִיטִים', 'בְּגָדִים'], ans: 0 },
  { cat: 'קטגוריות', q: 'לְאֵיזוֹ קְבוּצָה שַׁיֶּכֶת שִׂמְחָה?', opts: ['צוּרוֹת', 'רְגָשׁוֹת', 'כֵּלִים'], ans: 1 },
  { cat: 'קטגוריות', q: 'לְאֵיזוֹ קְבוּצָה שַׁיָּךְ מְלָפְפוֹן?', opts: ['פֵּרוֹת', 'יְרָקוֹת', 'דְּגָנִים'], ans: 1 },
],
dog: [  // יוצאי דופן 🐶
  { cat: 'יוצאי דופן', q: 'מַה יוֹצֵא דֹּפֶן מִבֵּין?', opts: ['יָד', 'רֹאשׁ', 'שָׁמַיִם'], ans: 2 },
  { cat: 'יוצאי דופן', q: 'מַה יוֹצֵא דֹּפֶן מִבֵּין?', opts: ['מְכוֹנִית', 'אֳנִיָּה', 'אוֹרְגָּן'], ans: 2 },
  { cat: 'יוצאי דופן', q: 'מַה יוֹצֵא דֹּפֶן מִבֵּין?', opts: ['מְלָפְפוֹן', 'עַגְבָנִיָּה', 'תַּפּוּז'], ans: 2 },
  { cat: 'יוצאי דופן', q: 'מַה יוֹצֵא דֹּפֶן מִבֵּין?', opts: ['רִצְפָּה', 'סַפָּה', 'שֻׁלְחָן'], ans: 0 },
  { cat: 'יוצאי דופן', q: 'מַה יוֹצֵא דֹּפֶן מִבֵּין?', opts: ['מְעִיל', 'כּוֹס', 'צָעִיף'], ans: 1 },
  { cat: 'יוצאי דופן', q: 'מַה יוֹצֵא דֹּפֶן מִבֵּין?', opts: ['דָּג', 'בַּרְוָז', 'נְמָלָה'], ans: 2 }, // נמלה יוצאת דופן (חרק לעומת בעלי חיים שקשורים למים)
  { cat: 'יוצאי דופן', q: 'מַה יוֹצֵא דֹּפֶן מִבֵּין?', opts: ['סֻכָּרִיָּה', 'אֵשׁ', 'מְדוּרָה'], ans: 0 },
  { cat: 'יוצאי דופן', q: 'מַה יוֹצֵא דֹּפֶן מִבֵּין?', opts: ['שִׂמְלָה', 'חֲצָאִית', 'פֶּרַח'], ans: 2 },
  { cat: 'יוצאי דופן', q: 'מַה יוֹצֵא דֹּפֶן מִבֵּין?', opts: ['לֶחֶם', 'סַכִּין', 'מַזְלֵג'], ans: 0 },
  { cat: 'יוצאי דופן', q: 'מַה יוֹצֵא דֹּפֶן מִבֵּין?', opts: ['שְׂמִיכָה', 'כָּרִית', 'עֵץ'], ans: 2 },
  { cat: 'יוצאי דופן', q: 'מַה יוֹצֵא דֹּפֶן מִבֵּין?', opts: ['תַּנּוּר', 'דֶּלֶת', 'מִיקְרוֹגָל'], ans: 1 },
  { cat: 'יוצאי דופן', q: 'מַה יוֹצֵא דֹּפֶן מִבֵּין?', opts: ['כַּבַּאִית', 'מָטוֹס', 'רֶכֶב'], ans: 1 }, // מטוס יוצא דופן (כלי טיס לעומת כלי רכב יבשתיים)
],
 mouse: [  // ידע עולם 🐭
  { cat: 'ידע עולם', q: 'מַדּוּעַ הָאַמְבּוּלַנְס צוֹפֵר?', opts: ['מִכֵּיוָן שֶׁהוּא מְמַהֵר לָקַחַת חוֹלֶה', 'מִכֵּיוָן שֶׁיֵּשׁ עֹמֶס בַּכְּבִישׁ', 'מִכֵּיוָן שֶׁהַכְּבִישׁ חִסוּם'], ans: 0 },
  { cat: 'ידע עולם', q: 'אֵיפֹה חַיִּים הַדָּגִים?', opts: ['בַּיָּם', 'בָּשְּלוּלִית', 'בֶּחָצֵר'], ans: 0 },
  { cat: 'ידע עולם', q: 'כַּמָּה עוֹנוֹת יֵשׁ בְּמֶשֶׁךְ הַשָּׁנָה?', opts: ['5', '4', '3'], ans: 1 },
  { cat: 'ידע עולם', q: 'אֵיזֶה בָּעַל חַיִּים מְיַצֵּר דְּבָשׁ?', opts: ['דַּבּוּר', 'פַּרְפַּר', 'דְּבוֹרָה'], ans: 2 },
  { cat: 'ידע עולם', q: 'מַהוּ כְּלִי הַתַּחְבּוּרָה שֶׁחוֹצֶה אֶת הַיָּם?', opts: ['אֳנִיָּה', 'מָטוֹס', 'קוֹרְקִינֶט'], ans: 0 },
  { cat: 'ידע עולם', q: 'בְּאֵיזוֹ עוֹנָה יוֹרֵד שֶׁלֶג?', opts: ['אָבִיב', 'סְתָיו', 'חֹרֶף'], ans: 2 },
  { cat: 'ידע עולם', q: 'אֵיזֶה בָּעַל חַיִּים מְשַׁמֵּשׁ לִרְכִיבָה?', opts: ['אַרְיֵה', 'פִּיל', 'סוּס'], ans: 2 },
  { cat: 'ידע עולם', q: 'מַדּוּעַ לוֹבְשִׁים סְוֶדֶר?', opts: ['כִּי קַר', 'כִּי חָם', 'כִּי נָעִים'], ans: 0 },
  { cat: 'ידע עולם', q: 'אֵיזֶה בָּעַל חַיִּים הוּא מֶלֶךְ הַחַיּוֹת?', opts: ['אַרְיֵה', 'סוּס', 'בַּרְדְּלָס'], ans: 0 },
  { cat: 'ידע עולם', q: 'אֵיזֶה כְּלִי תַּחְבּוּרָה נוֹסֵעַ מִתַּחַת לַיָּם?', opts: ['אוֹפַנּוֹעַ', 'צוֹלֶלֶת', 'מָטוֹס'], ans: 1 },
  { cat: 'ידע עולם', q: 'הֵיכָן קוֹנִים אַקָּמוֹל?', opts: ['בֵּית מֵרְקַחַת', 'סוּפֶּר', 'בַּנְק'], ans: 0 },
  { cat: 'ידע עולם', q: 'בְּאֵיזֶה כְּלִי חוֹרְשִׁים אֶת הָאֲדָמָה?', opts: ['טְרַקְטוֹר', 'מַגָּל', 'מְעַרְבֵּל בֶּטוֹן'], ans: 0 },
],
};

const TRACKS = [
  { id: 'rabbit', name: 'ארנב', emoji: '🐰', food: '🥕', catLabel: '🔄 הפכים', color: '#e06060' },
  { id: 'monkey', name: 'קוף', emoji: '🐒', food: '🍌', catLabel: '📦 קטגוריות', color: '#d0800a' },
  { id: 'dog', name: 'כלב', emoji: '🐶', food: '🦴', catLabel: '🔍 יוצאי דופן', color: '#2a7a2a' },
  { id: 'mouse', name: 'עכבר', emoji: '🐭', food: '🧀', catLabel: '🌍 ידע עולם', color: '#1a5aaa' },
];

const TQ = 12, SK = 'farm_v3', PLAYER_KEY = 'farm_party_player';
const RESULTS_KEY = 'farm_party_results';
const AUTH_RESULTS_KEY = 'farm_results';

const LEVEL_CONFIG = {
  easy: { enemySpeed: 1.5, phase2Threshold: 6, timerSec: 15, label: 'קל' },
  hard: { enemySpeed: 3.0, phase2Threshold: 4, timerSec: 10, label: 'קשה' },
};

/* ═══════════════════════════════════════════════════════════════
   1. AUDIO — Web Audio API with clear distinct sounds
═══════════════════════════════════════════════════════════════ */
let actx = null;
function ac() {
  if (!actx) try { actx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { }
  return actx;
}
function tone(freq, dur, type = 'square', vol = 0.12, delay = 0, vibrato = 0) {
  const c = ac(); if (!c) return;
  const o = c.createOscillator(), g = c.createGain();
  o.connect(g); g.connect(c.destination);
  o.type = type; o.frequency.value = freq;
  if (vibrato > 0) {
    const lfo = c.createOscillator(), lg = c.createGain();
    lfo.frequency.value = 5; lg.gain.value = vibrato;
    lfo.connect(lg); lg.connect(o.frequency); lfo.start();
    setTimeout(() => { try { lfo.stop(); } catch (e) { } }, (delay + dur) * 1000 + 100);
  }
  const s = c.currentTime + delay;
  g.gain.setValueAtTime(0, s);
  g.gain.linearRampToValueAtTime(vol, s + 0.01);
  g.gain.exponentialRampToValueAtTime(0.001, s + dur);
  o.start(s); o.stop(s + dur + 0.05);
}

/* Named sounds — each clearly different */
function sndJump() { tone(330, 0.07, 'square', 0.1); tone(440, 0.07, 'square', 0.1, 0.06); tone(550, 0.09, 'square', 0.1, 0.12); }
function sndCoin() { tone(1320, 0.06, 'sine', 0.11); tone(1760, 0.09, 'sine', 0.09, 0.06); }
function sndCorrect() { [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.11, 'square', 0.12, i * 0.08)); }
function sndWrong() { tone(180, 0.12, 'sawtooth', 0.15); tone(140, 0.16, 'sawtooth', 0.12, 0.11); }
function sndQuestion() { tone(660, 0.06, 'square', 0.11); tone(880, 0.09, 'square', 0.1, 0.08); }
function sndVictory() { [523, 659, 784, 1047, 784, 1047, 1319].forEach((f, i) => tone(f, 0.16, 'square', 0.13, i * 0.13)); }
function sndStart() { [261, 329, 392, 523].forEach((f, i) => tone(f, 0.14, 'square', 0.11, i * 0.12)); }
function sndBump() { tone(200, 0.08, 'square', 0.1); tone(160, 0.06, 'square', 0.08, 0.07); }
function sndHit() { tone(120, 0.1, 'sawtooth', 0.18); tone(80, 0.15, 'sawtooth', 0.14, 0.08); }
function sndShoot() { tone(880, 0.04, 'square', 0.1); tone(1320, 0.07, 'sine', 0.12, 0.04); }
function sndEnemyDie() { tone(600, 0.04, 'square', 0.12); tone(400, 0.05, 'square', 0.1, 0.04); tone(200, 0.08, 'sawtooth', 0.1, 0.08); }
function sndTimeout() { tone(300, 0.1, 'sawtooth', 0.13); tone(200, 0.2, 'sawtooth', 0.1, 0.1); }
function sndPhase2() { [392, 523, 659, 784, 1047].forEach((f, i) => tone(f, 0.12, 'square', 0.13, i * 0.1)); }

/* ═══════════════════════════════════════════════════════════════
   CANVAS SETUP
═══════════════════════════════════════════════════════════════ */
const canvas = document.getElementById('gc');
const ctx = canvas.getContext('2d');
let W = 400, H = 280;

/* ═══════════════════════════════════════════════════════════════
   GAME STATE
═══════════════════════════════════════════════════════════════ */
let track = null, pool = [], qIdx = 0, score = 0, streak = 0;
let lives = 3;
const MAX_LIVES = 3;
let gameRunning = false, inQuestion = false;
let timerInterval = null, timerLeft = 0;
let currentPhase = 1;
let currentLevel = 'easy';
let flagReached = false;

const GRAVITY = 0.55, JUMP_FORCE = -13.5, MOVE_SPEED = 3.5, MAX_FALL = 14;
let GROUND_Y = H - 48;
const LEVEL_W = 3200;
const PHASE2_SPEED_MULT = 1.7;

/* Player */
const player = {
  x: 80, y: 0, w: 40, h: 40,
  vx: 0, vy: 0, onGround: false, facingRight: true,
  hitCooldown: 0, wasOnGround: false, blinkT: 0
};

/* Camera */
let camX = 0;

/* Level objects */
let platforms = [], qBlocks = [], coins = [], particles = [], floatingTexts = [];
let butterflies = [], clouds = [], bgClouds = [];
let enemies = [], bullets = [];

/* Scrolling parallax */
const keys = { left: false, right: false, jump: false, shoot: false };
let jumpWasDown = false;
let raf = null;

/* ═══════════════════════════════════════════════════════════════
   CUSTOM ALERT (replaces browser alert)
═══════════════════════════════════════════════════════════════ */
function showAlert(icon, title, msg, cb) {
  document.getElementById('alertIcon').textContent = icon;
  document.getElementById('alertTitle').textContent = title;
  document.getElementById('alertMsg').textContent = msg;
  const el = document.getElementById('custom-alert');
  el.classList.add('show');
  const ok = document.getElementById('alertOk');
  const handler = () => {
    el.classList.remove('show');
    ok.removeEventListener('click', handler);
    if (cb) cb();
  };
  ok.addEventListener('click', handler);
}

/* ═══════════════════════════════════════════════════════════════
   STORAGE HELPERS
═══════════════════════════════════════════════════════════════ */
function getScores() { try { return JSON.parse(localStorage.getItem(SK)) || {}; } catch { return {}; } }
function saveScores(s) { try { localStorage.setItem(SK, JSON.stringify(s)); } catch { } }
function getPlayerName() { return localStorage.getItem(PLAYER_KEY) || 'שחקן/ית'; }

function saveFullResult() {
  try {
    // קבל שם שחקן: קודם מה-session, אחר כך מ-localStorage
    let playerName = 'שחקן/ית';
    try {
      const session = JSON.parse(localStorage.getItem('farm_session'));
      if (session && session.username) playerName = session.username;
    } catch (e) { }
    if (playerName === 'שחקן/ית') playerName = getPlayerName();

    const entry = {
      player: playerName,
      username: playerName,
      trackId: track ? track.id : '',
      trackName: track ? track.name : '',
      game: 'מסלול ה' + (track ? track.name : '') + ' ' + (track ? track.emoji : ''),
      emoji: track ? track.emoji : '🐾',
      score,
      total: TQ,
      level: currentLevel,
      dateISO: new Date().toISOString()
    };

    // שמירה ל-farm_party_results (קורא highscores.js)
    const partyAll = JSON.parse(localStorage.getItem(RESULTS_KEY) || '[]');
    partyAll.push(entry);
    localStorage.setItem(RESULTS_KEY, JSON.stringify(partyAll));

    // שמירה ל-farm_results (קורא results.js / auth)
    const authAll = JSON.parse(localStorage.getItem(AUTH_RESULTS_KEY) || '[]');
    authAll.push({ username: playerName, game: entry.game, score, total: TQ, dateISO: entry.dateISO });
    localStorage.setItem(AUTH_RESULTS_KEY, JSON.stringify(authAll));

    // lastScore לדף המסיבה
    localStorage.setItem('lastScore', score);
  } catch (e) { }
}

/* ═══════════════════════════════════════════════════════════════
   UTILS
═══════════════════════════════════════════════════════════════ */
function shuffle(a) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* includes() usage — validate track ID */
function isValidTrack(id) { return TRACKS.map(t => t.id).includes(id); }

/* sort on objects — sorted leaderboard */
function getSortedHighScores() {
  const sc = getScores();
  return TRACKS
    .map(t => ({ ...t, best: sc[t.id] ?? -1 }))
    .sort((a, b) => b.best - a.best);
}

/* ═══════════════════════════════════════════════════════════════
   8. setTimeout / setInterval — TIMER SYSTEM (clear & explicit)
═══════════════════════════════════════════════════════════════ */
/* The question countdown is driven by setInterval, updating every 1s */
function startQuestionTimer(totalSec, onTick, onExpire) {
  clearQuestionTimer();
  timerLeft = totalSec;
  const bar = document.getElementById('timerBar');
  bar.style.transition = 'none';
  bar.style.width = '100%';
  bar.style.background = '#ffd700';
  // Force reflow then animate
  setTimeout(() => {
    bar.style.transition = `width ${totalSec}s linear`;
    bar.style.width = '0%';
  }, 30);

  timerInterval = setInterval(() => {
    timerLeft--;
    if (timerLeft <= 3) bar.style.background = '#ff4444';
    onTick(timerLeft);
    if (timerLeft <= 0) {
      clearQuestionTimer();
      onExpire();
    }
  }, 1000);
}
function clearQuestionTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
}

/* ═══════════════════════════════════════════════════════════════
   HOME SCREEN — CLOUDS ANIMATION
═══════════════════════════════════════════════════════════════ */
function initHomeClouds() {
  const wrap = document.getElementById('homeClouds');
  wrap.innerHTML = '';
  const clouds = ['☁️', '⛅', '☁️'];
  for (let i = 0; i < 5; i++) {
    const el = document.createElement('div');
    el.className = 'hcloud';
    el.textContent = clouds[i % clouds.length];
    const dur = 18 + Math.random() * 16;
    const top = 5 + Math.random() * 30;
    const delay = -Math.random() * dur;
    el.style.cssText = `top:${top}%;font-size:${28 + Math.random() * 24}px;animation-duration:${dur}s;animation-delay:${delay}s;`;
    wrap.appendChild(el);
  }
}

function initSparkles() {
  const wrap = document.getElementById('homeSparkles');
  if (!wrap) return;
  wrap.innerHTML = '';
  const emojis = ['✨', '⭐', '🌟', '💫', '🌸', '🌻'];
  for (let i = 0; i < 10; i++) {
    const el = document.createElement('div');
    el.className = 'sparkle';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    const dur = 2.5 + Math.random() * 3;
    const delay = Math.random() * 5;
    el.style.cssText = `
      left:${5 + Math.random() * 90}%;
      top:${10 + Math.random() * 75}%;
      font-size:${14 + Math.random() * 14}px;
      animation-duration:${dur}s;
      animation-delay:${delay}s;
    `;
    wrap.appendChild(el);
  }
}

/* ═══════════════════════════════════════════════════════════════
   HOME SCREEN — CAROUSEL
═══════════════════════════════════════════════════════════════ */
let carIdx = 0;

function renderHome() {
  initHomeClouds();
  initSparkles();
  const sc = getScores();

  // Name
  const savedName = localStorage.getItem(PLAYER_KEY) || '';
  document.getElementById('nameInput').value = savedName;

  // Build carousel cards
  const stage = document.getElementById('carStage');
  const n = TRACKS.length;
  stage.innerHTML = TRACKS.map((t, i) =>
    `<div class="car-card" id="cc${i}" onclick="carSelect(${i})">
       <button class="car-arrow car-arrow-right" onclick="event.stopPropagation();carGoTo((${i}-1+${n})%${n})">◀</button>
       <div class="car-emoji">${t.emoji}</div>
       <div class="car-name">מסלול ה${t.name}</div>
       <div class="car-food">${t.food}</div>
       <button class="car-arrow car-arrow-left" onclick="event.stopPropagation();carGoTo((${i}+1)%${n})">▶</button>
     </div>`
  ).join('');

  // Dots
  document.getElementById('carDots').innerHTML =
    TRACKS.map((_, i) => `<div class="car-dot${i === carIdx ? ' active' : ''}" onclick="carGoTo(${i})"></div>`).join('');

  updateCarousel();
  updateCarInfo();

  // Touch swipe
  let tSX = 0;
  stage.addEventListener('touchstart', e => { tSX = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tSX;
    if (Math.abs(dx) > 40) carGoTo(dx < 0 ? (carIdx + 1) % TRACKS.length : (carIdx - 1 + TRACKS.length) % TRACKS.length);
  }, { passive: true });

  // Scores — sorted using .sort()
  const sorted = getSortedHighScores().filter(t => t.best >= 0);
  document.getElementById('homeScores').textContent =
    sorted.length ? sorted.map(t => `${t.emoji} ${t.name}: ${t.best}/12`).join('  ·  ') : 'עוד לא שיחקת!';

  showScreen('home');
}

function carGoTo(idx) { carIdx = idx; updateCarousel(); updateCarInfo(); }
function carSelect(idx) { if (idx === carIdx) return; carGoTo(idx); }

function updateCarousel() {
  const n = TRACKS.length;
  TRACKS.forEach((_, i) => {
    const diff = ((i - carIdx) % n + n) % n;
    document.getElementById('cc' + i).className = 'car-card ' +
      (diff === 0 ? 'active' : diff === 1 ? 'next' : diff === n - 1 ? 'prev' : 'hidden');
  });
  document.querySelectorAll('.car-dot').forEach((d, i) => d.classList.toggle('active', i === carIdx));
}
function updateCarInfo() {
  const t = TRACKS[carIdx];
  const best = getScores()[t.id];
  document.getElementById('carCatLabel').textContent = t.catLabel;
  document.getElementById('carScoreLabel').textContent = best !== undefined ? `🏆 שיא: ${best}/12` : 'עוד לא שיחקת';
}

/* ═══════════════════════════════════════════════════════════════
   5. LEVEL SYSTEM — easy / hard via buttons (not just query params)
═══════════════════════════════════════════════════════════════ */
function startWithLevel(level) {
  currentLevel = level;
  startTrack(carIdx);
}

/* ═══════════════════════════════════════════════════════════════
   LEVEL GENERATION
═══════════════════════════════════════════════════════════════ */
function buildLevel() {
  platforms = []; qBlocks = []; coins = []; particles = []; floatingTexts = [];
  butterflies = []; clouds = []; enemies = []; bullets = [];

  // Platforms
  const platDefs = [
    { x: 300, yUp: 100, w: 96 }, { x: 480, yUp: 160, w: 80 }, { x: 660, yUp: 80, w: 96 },
    { x: 820, yUp: 200, w: 64 }, { x: 980, yUp: 120, w: 80 }, { x: 1100, yUp: 60, w: 96 },
    { x: 1260, yUp: 180, w: 80 }, { x: 1420, yUp: 100, w: 96 }, { x: 1580, yUp: 220, w: 64 },
    { x: 1740, yUp: 140, w: 80 }, { x: 1900, yUp: 80, w: 96 }, { x: 2060, yUp: 200, w: 64 },
    { x: 2200, yUp: 120, w: 96 }, { x: 2380, yUp: 160, w: 80 }, { x: 2520, yUp: 60, w: 96 },
    { x: 2680, yUp: 180, w: 64 }, { x: 2840, yUp: 100, w: 80 },
  ];
  platDefs.forEach(p => platforms.push({ x: p.x, y: GROUND_Y - p.yUp, w: p.w, h: 16 }));

  // Q blocks
  const spacing = (LEVEL_W - 500) / TQ;
  for (let i = 0; i < TQ; i++) {
    const bx = 280 + i * spacing, by = GROUND_Y - 110 - Math.random() * 20;
    qBlocks.push({ x: bx, y: by, w: 40, h: 40, hit: false, idx: i, bounceAnim: 0 });
    coins.push({ x: bx + 8, y: by - 52, w: 24, h: 24, idx: i, collected: false, floatT: Math.random() * Math.PI * 2 });
  }

  // Clouds (parallax)
  for (let i = 0; i < 20; i++) {
    clouds.push({ x: Math.random() * LEVEL_W, y: 10 + Math.random() * 90, spd: 0.15 + Math.random() * 0.2, emoji: ['☁️', '⛅'][i % 2] });
  }

  // Butterflies
  for (let i = 0; i < 5; i++) spawnButterfly();

  // Enemies — based on level
  buildEnemies();
}

function buildEnemies() {
  const cfg = LEVEL_CONFIG[currentLevel] || LEVEL_CONFIG.easy;
  // Platform enemies (every 3rd platform in hard, every 5th in easy)
  const step = currentLevel === 'hard' ? 3 : 5;
  platforms.forEach((p, i) => {
    if (i > 0 && i % step === 0) {
      enemies.push({
        x: p.x + 10, y: p.y - 32, w: 30, h: 30,
        startX: p.x + 10, endX: p.x + p.w - 40,
        speed: cfg.enemySpeed, baseSpeed: cfg.enemySpeed,
        dir: 1, emoji: '👾', dead: false, deadAnim: 0
      });
    }
  });
  // Ground enemies
  const gps = currentLevel === 'hard' ? [500, 1000, 1500, 2000, 2500, 3000] : [600, 1400, 2200, 3000];
  gps.forEach(gx => {
    enemies.push({
      x: gx, y: GROUND_Y - 36, w: 34, h: 34,
      startX: gx - 80, endX: gx + 80,
      speed: cfg.enemySpeed * 0.9, baseSpeed: cfg.enemySpeed * 0.9,
      dir: 1, emoji: '🐛', dead: false, deadAnim: 0
    });
  });
}

function spawnButterfly() {
  butterflies.push({
    x: camX + Math.random() * W, y: 20 + Math.random() * 160,
    vx: (Math.random() < 0.5 ? 1 : -1) * (0.4 + Math.random() * 0.7),
    flapT: Math.random() * Math.PI * 2,
    emoji: ['🦋', '🌸', '✨'][Math.floor(Math.random() * 3)],
    size: 12 + Math.random() * 10, life: 400 + Math.random() * 300
  });
}

/* ═══════════════════════════════════════════════════════════════
   5. PHASE SYSTEM — clear visual + audio transition
═══════════════════════════════════════════════════════════════ */
function checkPhase() {
  const cfg = LEVEL_CONFIG[currentLevel] || LEVEL_CONFIG.easy;
  if (currentPhase === 1 && qIdx >= cfg.phase2Threshold) {
    currentPhase = 2;
    enemies.forEach(en => {
      if (!en.dead) { en.speed = en.baseSpeed * PHASE2_SPEED_MULT; }
    });
    // Phase 2 banner via DOM — clear animation
    const el = document.createElement('div');
    el.className = 'phase-banner';
    el.innerHTML = '<div class="phase-banner-box">⚡ שלב 2 — מהירות גבוהה! ⚡</div>';
    document.body.appendChild(el);
    sndPhase2();
    // setTimeout to remove it — visible usage of setTimeout
    setTimeout(() => {
      el.style.transition = 'opacity 0.5s';
      el.style.opacity = '0';
      setTimeout(() => el.remove(), 500);
    }, 2000);
    updateHUD();
  }
}

/* ═══════════════════════════════════════════════════════════════
   PHYSICS
═══════════════════════════════════════════════════════════════ */
function updatePhysics() {
  if (inQuestion || !gameRunning) return;

  // Horizontal
  if (keys.left) { player.vx = -MOVE_SPEED; player.facingRight = false; }
  else if (keys.right) { player.vx = MOVE_SPEED; player.facingRight = true; }
  else { player.vx *= 0.75; }

  // Jump
  const jd = keys.jump;
  if (jd && !jumpWasDown && player.onGround) { player.vy = JUMP_FORCE; player.onGround = false; sndJump(); }
  jumpWasDown = jd;

  // Gravity
  player.vy = Math.min(player.vy + GRAVITY, MAX_FALL);
  player.x += player.vx;
  player.y += player.vy;

  // Bounds
  player.x = Math.max(0, Math.min(LEVEL_W - player.w, player.x));

  player.onGround = false;

  // Ground
  if (player.y + player.h >= GROUND_Y) {
    player.y = GROUND_Y - player.h; player.vy = 0; player.onGround = true;
  }

  // Platforms
  platforms.forEach(p => {
    if (player.x + player.w > p.x && player.x < p.x + p.w && player.y + player.h > p.y && player.y + player.h < p.y + p.h + 12 && player.vy >= 0) {
      player.y = p.y - player.h; player.vy = 0; player.onGround = true;
    }
    if (player.x + player.w > p.x + 4 && player.x < p.x + p.w - 4 && player.y < p.y + p.h && player.y + player.h > p.y && player.y > p.y && player.vy < 0) {
      player.vy = 1;
    }
  });

  // Q Blocks
  qBlocks.forEach(qb => {
    if (qb.hit) return;
    const bump = player.x + player.w > qb.x + 4 && player.x < qb.x + qb.w - 4 &&
      player.y < qb.y + qb.h && player.y + player.h > qb.y && player.vy < 0;
    const land = player.x + player.w > qb.x && player.x < qb.x + qb.w &&
      player.y + player.h >= qb.y - 2 && player.y + player.h <= qb.y + 8 && player.vy >= 0;
    if (bump) {
      player.vy = 2; qb.hit = true; qb.bounceAnim = 12; sndCoin();
      triggerQuestion(qb.idx);
    } else if (land) {
      player.y = qb.y - player.h; player.vy = 0; player.onGround = true;
    }
  });

  // Coins
  coins.forEach(c => {
    if (c.collected) return;
    if (qBlocks[c.idx]?.hit && player.x + player.w > c.x && player.x < c.x + c.w && player.y + player.h > c.y && player.y < c.y + c.h) {
      c.collected = true; sndCoin(); addParticles(c.x, c.y, track.food, 6);
    }
  });

  // Camera
  const tgt = player.x - W * 0.35;
  camX += (tgt - camX) * 0.12;
  camX = Math.max(0, Math.min(LEVEL_W - W, camX));

  // Q block bounce
  qBlocks.forEach(qb => { if (qb.bounceAnim > 0) qb.bounceAnim = Math.max(0, qb.bounceAnim - 1.5); });

  // Particles
  particles.forEach(p => { p.x += p.vx; p.y += p.vy; p.vy += 0.32; p.life--; p.alpha = p.life / p.maxLife; });
  particles = particles.filter(p => p.life > 0);

  // Butterflies
  butterflies.forEach(b => { b.flapT += 0.12; b.x += b.vx + Math.sin(b.flapT * 0.3) * 0.3; b.y += Math.sin(b.flapT * 0.5) * 0.5; b.life--; });
  butterflies = butterflies.filter(b => b.life > 0);
  if (butterflies.length < 4 && Math.random() < 0.02) spawnButterfly();

  // Floating texts
  floatingTexts.forEach(t => { t.y -= 1.3; t.alpha -= 0.022; });
  floatingTexts = floatingTexts.filter(t => t.alpha > 0);

  // Fall recovery
  if (player.y > H + 60) { player.x = Math.max(60, camX + 80); player.y = GROUND_Y - player.h - 10; player.vy = 0; player.vx = 0; }

  // Landing effect
  if (!player.wasOnGround && player.onGround) { addParticles(player.x + player.w / 2, player.y + player.h, '💨', 4); sndBump(); }
  player.wasOnGround = player.onGround;

  // Hit cooldown
  if (player.hitCooldown > 0) player.hitCooldown--;

  // Enemies
  updateEnemies();
  // Bullets
  updateBullets();
  // Phase check
  checkPhase();
  // Flag check
  checkFlag();

  updateHUD();
}

/* ═══════════════════════════════════════════════════════════════
   7. BULLETS / SHOOTING — extra challenge mechanic
═══════════════════════════════════════════════════════════════ */
let shootCooldown = 0;
function tryShoot() {
  if (shootCooldown > 0 || !gameRunning || inQuestion) return;
  shootCooldown = 22;
  sndShoot();
  const dir = player.facingRight ? 1 : -1;
  bullets.push({
    x: player.x + (dir > 0 ? player.w : 0),
    y: player.y + player.h * 0.4,
    vx: 9 * dir, vy: -1,
    w: 12, h: 12, life: 60,
    emoji: '⭐'
  });
  addParticles(player.x + player.w / 2, player.y + player.h * 0.4, '✨', 3);
}
function updateBullets() {
  if (shootCooldown > 0) shootCooldown--;
  bullets.forEach(b => { b.x += b.vx; b.y += b.vy; b.life--; });
  // Bullet-enemy collision
  bullets = bullets.filter(b => {
    if (b.life <= 0) return false;
    let hit = false;
    enemies.forEach(en => {
      if (en.dead) return;
      if (b.x + b.w > en.x && b.x < en.x + en.w && b.y + b.h > en.y && b.y < en.y + en.h) {
        hit = true; en.dead = true; en.deadAnim = 20;
        sndEnemyDie();
        addParticles(en.x + en.w / 2, en.y + en.h / 2, '💥', 8);
        floatingTexts.push({ x: en.x + en.w / 2, y: en.y - 10, text: '💥 נמחק!', color: '#ffff44', alpha: 1 });
      }
    });
    return !hit;
  });
}

/* ═══════════════════════════════════════════════════════════════
   ENEMIES
═══════════════════════════════════════════════════════════════ */
function updateEnemies() {
  enemies.forEach(en => {
    if (en.dead) { en.deadAnim = Math.max(0, en.deadAnim - 1); return; }
    en.x += en.speed * en.dir;
    if (en.x >= en.endX || en.x <= en.startX) en.dir *= -1;

    if (player.hitCooldown === 0 && player.x < en.x + en.w && player.x + player.w > en.x && player.y < en.y + en.h && player.y + player.h > en.y) {
      hitPlayer();
    }
  });
  enemies = enemies.filter(en => !en.dead || en.deadAnim > 0);
}

function hitPlayer() {
  if (player.hitCooldown > 0) return;
  player.hitCooldown = 90; lives = Math.max(0, lives - 1); streak = 0;
  player.vy = -8; player.vx = player.facingRight ? -5 : 5;
  sndHit();
  addParticles(player.x + player.w / 2, player.y + player.h / 2, '💢', 8);
  floatingTexts.push({ x: player.x + 20, y: player.y - 10, text: '-❤️', color: '#ff4444', alpha: 1 });
  // Red flash overlay
  const fl = document.createElement('div');
  fl.style.cssText = 'position:fixed;inset:0;background:rgba(255,0,0,.35);z-index:99;pointer-events:none;transition:opacity 0.4s';
  document.body.appendChild(fl);
  setTimeout(() => { fl.style.opacity = '0'; setTimeout(() => fl.remove(), 400); }, 80);
  updateHUD();
  if (lives <= 0) {
    stopGame(); // עצור מיד כדי שהדגל לא יופעל במהלך ה-delay
    setTimeout(() => {
      showAlert('💔', 'נגמרו החיים!', `אספת ${score} תשובות נכונות.\nרוצה לנסות שוב?`, () => { showResults(); });
    }, 600);
  }
}

/* ═══════════════════════════════════════════════════════════════
   DRAW
═══════════════════════════════════════════════════════════════ */
function draw() {
  ctx.clearRect(0, 0, W, H);

  // Sky
  const sky = ctx.createLinearGradient(0, 0, 0, H);
  if (currentPhase === 2) { sky.addColorStop(0, '#4a9fd4'); sky.addColorStop(0.5, '#78bae0'); sky.addColorStop(1, '#a0d888'); }
  else { sky.addColorStop(0, '#5bc8f5'); sky.addColorStop(0.5, '#87ceeb'); sky.addColorStop(1, '#b8f0a0'); }
  ctx.fillStyle = sky; ctx.fillRect(0, 0, W, H);

  // Sun
  const sunX = W - 80 - camX * 0.03;
  const sg = ctx.createRadialGradient(sunX, 52, 0, sunX, 52, 38);
  sg.addColorStop(0, '#fff7a0'); sg.addColorStop(0.6, '#ffd700'); sg.addColorStop(1, 'rgba(255,180,0,0)');
  ctx.fillStyle = sg; ctx.beginPath(); ctx.arc(sunX, 52, 38, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#ffee44'; ctx.beginPath(); ctx.arc(sunX, 52, 22, 0, Math.PI * 2); ctx.fill();

  // Parallax clouds
  clouds.forEach(c => {
    const cx = ((c.x - camX * c.spd) % LEVEL_W + LEVEL_W) % LEVEL_W - 80;
    if (cx > W + 80 || cx < -80) return;
    ctx.font = '28px serif'; ctx.globalAlpha = 0.45; ctx.textAlign = 'left';
    ctx.fillText(c.emoji, cx, c.y);
  });
  ctx.globalAlpha = 1;

  // Hills
  drawHills();

  // Ground
  ctx.fillStyle = '#2a6a18'; ctx.fillRect(0, GROUND_Y, W, H - GROUND_Y);
  ctx.fillStyle = '#4aaa2a'; ctx.fillRect(0, GROUND_Y, W, 10);
  ctx.fillStyle = 'rgba(0,80,0,0.25)';
  for (let i = 0; i < W / 40 + 2; i++) ctx.fillRect(-camX % 40 + i * 40, GROUND_Y, 2, H - GROUND_Y);

  // Platforms
  platforms.forEach(p => {
    const sx = p.x - camX;
    if (sx + p.w < -10 || sx > W + 10) return;
    drawPlatform(sx, p.y, p.w, p.h);
  });

  // Q Blocks
  qBlocks.forEach(qb => {
    const sx = qb.x - camX;
    if (sx + qb.w < -10 || sx > W + 10) return;
    const by = qb.bounceAnim > 0 ? qb.y - Math.sin(qb.bounceAnim / 12 * Math.PI) * 8 : qb.y;
    drawQBlock(sx, by, qb.w, qb.h, qb.hit);
  });

  // Coins
  coins.forEach(c => {
    if (c.collected) return;
    const sx = c.x - camX; if (sx < -20 || sx > W + 20) return;
    c.floatT += 0.06;
    const fy = c.y + Math.sin(c.floatT) * 5;
    ctx.font = '22px serif'; ctx.textAlign = 'left';
    ctx.shadowColor = 'rgba(255,220,80,0.7)'; ctx.shadowBlur = 10;
    ctx.fillText(track ? track.food : '🥕', sx, fy + 20);
    ctx.shadowBlur = 0;
  });

  // Butterflies
  butterflies.forEach(b => {
    const sx = b.x - camX; if (sx < -30 || sx > W + 30) return;
    ctx.font = b.size + 'px serif';
    ctx.globalAlpha = 0.75 + 0.25 * Math.sin(b.flapT);
    ctx.textAlign = 'left'; ctx.fillText(b.emoji, sx, b.y);
  });
  ctx.globalAlpha = 1;

  // Enemies
  enemies.forEach(en => {
    if (en.dead && en.deadAnim <= 0) return;
    const sx = en.x - camX; if (sx + en.w < -20 || sx > W + 20) return;
    ctx.save();
    if (en.dead) { ctx.globalAlpha = en.deadAnim / 20; ctx.translate(sx + en.w / 2, en.y + en.h / 2); ctx.scale(1 + 0.5 * (1 - en.deadAnim / 20), 1 + 0.5 * (1 - en.deadAnim / 20)); ctx.translate(-en.w / 2, -en.h / 2); }
    if (currentPhase === 2 && !en.dead) { ctx.shadowColor = 'rgba(255,50,0,0.8)'; ctx.shadowBlur = 14; }
    ctx.font = '26px serif'; ctx.textAlign = 'left';
    ctx.fillText(en.emoji, en.dead ? 0 : sx, en.y + 26);
    ctx.shadowBlur = 0;
    ctx.restore();
  });

  // Bullets
  bullets.forEach(b => {
    const sx = b.x - camX;
    ctx.font = '16px serif'; ctx.textAlign = 'left';
    ctx.shadowColor = 'rgba(255,220,0,0.9)'; ctx.shadowBlur = 12;
    ctx.fillText(b.emoji, sx, b.y + 14);
    ctx.shadowBlur = 0;
  });

  // Particles
  particles.forEach(p => {
    ctx.globalAlpha = p.alpha; ctx.font = p.size + 'px serif';
    ctx.textAlign = 'center'; ctx.fillText(p.emoji, p.x - camX, p.y);
  });
  ctx.globalAlpha = 1;

  // Floating texts
  floatingTexts.forEach(t => {
    ctx.globalAlpha = t.alpha; ctx.fillStyle = t.color || '#ffd700';
    ctx.font = 'bold 9px "Press Start 2P",monospace';
    ctx.textAlign = 'center'; ctx.fillText(t.text, t.x - camX, t.y);
  });
  ctx.globalAlpha = 1;

  // Player
  drawPlayer();

  // Finish flag
  drawFinishLine();

  // Backpack HUD
  drawBackpackHUD();
}

function drawHills() {
  ctx.fillStyle = 'rgba(60,160,30,0.5)';
  [0, 200, 500, 800, 1100].forEach(ox => {
    const hx = (ox - camX * 0.3) % (W + 300) - 150;
    ctx.beginPath(); ctx.ellipse(hx, GROUND_Y, 130, 72, 0, Math.PI, 0); ctx.fill();
    ctx.beginPath(); ctx.ellipse(hx + 190, GROUND_Y, 90, 52, 0, Math.PI, 0); ctx.fill();
  });
}

function drawPlatform(x, y, w, h) {
  ctx.fillStyle = '#7ec850'; ctx.fillRect(x, y, w, 8);
  const g = ctx.createLinearGradient(0, y + 8, 0, y + h);
  g.addColorStop(0, '#c8a96e'); g.addColorStop(1, '#8b5e2a');
  ctx.fillStyle = g; ctx.fillRect(x, y + 8, w, h - 8);
  ctx.fillStyle = 'rgba(255,255,255,0.2)'; ctx.fillRect(x + 2, y + 2, w - 4, 4);
}

function drawQBlock(x, y, w, h, hit) {
  if (hit) {
    const g = ctx.createLinearGradient(0, y, 0, y + h);
    g.addColorStop(0, '#888'); g.addColorStop(1, '#444');
    ctx.fillStyle = g; ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = '#666'; ctx.lineWidth = 2; ctx.strokeRect(x + 1, y + 1, w - 2, h - 2);
    ctx.fillStyle = '#666'; ctx.font = 'bold 12px "Press Start 2P",monospace'; ctx.textAlign = 'center';
    ctx.fillText('!', x + w / 2, y + h - 10);
  } else {
    const g = ctx.createLinearGradient(0, y, 0, y + h);
    g.addColorStop(0, '#ffe066'); g.addColorStop(0.5, '#ffa500'); g.addColorStop(1, '#cc7700');
    ctx.fillStyle = g; ctx.fillRect(x, y, w, h);
    ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.fillRect(x + 2, y + 2, w - 4, 5);
    ctx.strokeStyle = '#ffdd44'; ctx.lineWidth = 2; ctx.strokeRect(x + 1, y + 1, w - 2, h - 2);
    ctx.shadowColor = 'rgba(255,200,0,0.7)'; ctx.shadowBlur = 8;
    ctx.fillStyle = '#fff'; ctx.font = 'bold 16px "Press Start 2P",monospace'; ctx.textAlign = 'center';
    ctx.fillText('?', x + w / 2, y + h - 9);
    ctx.shadowBlur = 0;
  }
}

function drawPlayer() {
  const sx = player.x - camX, sy = player.y;
  // Blink when hit
  if (player.hitCooldown > 0 && Math.floor(player.hitCooldown / 6) % 2 === 0) return;
  ctx.save();
  ctx.translate(sx + player.w / 2, sy + player.h / 2);
  let sX = 1, sY = 1;
  if (!player.onGround) { sY = 1.1; sX = 0.9; }
  ctx.scale(player.facingRight ? sX : -sX, sY);
  ctx.font = '34px serif'; ctx.textAlign = 'center';
  ctx.fillText(track ? track.emoji : '🐰', 0, player.h / 2 - 4);
  ctx.restore();
  // Shadow
  if (player.onGround) {
    ctx.fillStyle = 'rgba(0,0,0,0.22)';
    ctx.beginPath(); ctx.ellipse(sx + player.w / 2, GROUND_Y + 4, 14, 4, 0, 0, Math.PI * 2); ctx.fill();
  }
}

function drawFinishLine() {
  const fx = LEVEL_W - 120 - camX;
  if (fx > W + 50 || fx < -60) return;
  ctx.fillStyle = '#bbb'; ctx.fillRect(fx, GROUND_Y - 200, 8, 200);
  ctx.fillStyle = '#ee3322';
  ctx.beginPath(); ctx.moveTo(fx + 8, GROUND_Y - 200); ctx.lineTo(fx + 56, GROUND_Y - 178); ctx.lineTo(fx + 8, GROUND_Y - 156); ctx.fill();
  ctx.font = '22px serif'; ctx.textAlign = 'left'; ctx.fillText('🏠', fx - 16, GROUND_Y + 8);
}

function drawBackpackHUD() {
  if (!track) return;
  ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.fillRect(0, H - 28, W, 28);
  ctx.font = '6px "Press Start 2P",monospace'; ctx.fillStyle = '#ffd700'; ctx.textAlign = 'right';
  ctx.fillText('תרמיל: ', W - 8, H - 10);
  ctx.font = '14px serif';
  for (let i = 0; i < TQ; i++) {
    const ix = W - 8 - (TQ - i) * 18;
    ctx.globalAlpha = i < score ? 1 : 0.18;
    ctx.textAlign = 'left'; ctx.fillText(track.food, ix, H - 8);
  }
  ctx.globalAlpha = 1;
}

/* ═══════════════════════════════════════════════════════════════
   FLAG / FINISH
═══════════════════════════════════════════════════════════════ */
function checkFlag() {
  const poleX = LEVEL_W - 120;
  if (!flagReached && !inQuestion && player.x + player.w > poleX - 20 && player.x < poleX + 30) {
    flagReached = true; triggerFlagSequence();
  }
}

function triggerFlagSequence() {
  if (!gameRunning) return;
  gameRunning = false; cancelAnimationFrame(raf); clearQuestionTimer();
  document.getElementById('qov').classList.remove('show');

  const overlay = document.getElementById('flagOverlay');
  const fc = document.getElementById('flagCanvas');
  overlay.classList.add('show');
  const sw = window.innerWidth, sh = window.innerHeight;
  fc.width = sw; fc.height = sh;
  const fc2 = fc.getContext('2d');

  const POLE_X = sw * 0.62, GROUND_FL = sh * 0.72, POLE_TOP = sh * 0.08, POLE_H = GROUND_FL - POLE_TOP;
  let flagY = POLE_TOP, pX = sw * 0.1, pY = GROUND_FL - 44, phase = 'run', phaseT = 0, frameId;
  const em = track ? track.emoji : '🐰';

  overlay.style.background = '#fff';
  setTimeout(() => overlay.style.background = 'linear-gradient(180deg,#5bc8f5 0%,#87ceeb 72%,#5dba2f 100%)', 80);
  sndVictory();

  function drawFlag() {
    fc2.clearRect(0, 0, sw, sh);
    const sg = fc2.createLinearGradient(0, 0, 0, sh);
    sg.addColorStop(0, '#5bc8f5'); sg.addColorStop(0.72, '#87ceeb'); sg.addColorStop(1, '#5dba2f');
    fc2.fillStyle = sg; fc2.fillRect(0, 0, sw, sh);
    fc2.fillStyle = '#5dba2f'; fc2.fillRect(0, GROUND_FL, sw, sh - GROUND_FL);
    fc2.fillStyle = '#7edb4a'; fc2.fillRect(0, GROUND_FL, sw, 10);
    // Sun
    fc2.fillStyle = '#ffee44'; fc2.beginPath(); fc2.arc(60, 60, 28, 0, Math.PI * 2); fc2.fill();
    // Pole
    fc2.fillStyle = '#ccc'; fc2.fillRect(POLE_X - 4, POLE_TOP, 8, POLE_H);
    fc2.fillStyle = '#888'; fc2.beginPath(); fc2.arc(POLE_X, POLE_TOP, 10, 0, Math.PI * 2); fc2.fill();
    fc2.font = `${Math.round(sh * 0.055)}px serif`; fc2.fillText('🚩', POLE_X + 4, flagY + 24);
    fc2.font = `${Math.round(sh * 0.14)}px serif`; fc2.textAlign = 'left'; fc2.fillText('🏰', POLE_X + 60, GROUND_FL + 12);
    fc2.font = `${Math.round(sh * 0.055)}px serif`; fc2.fillText(em, pX, pY + 40);

    phaseT++;
    if (phase === 'run') {
      pX = Math.min(sw * 0.1 + phaseT * sw * 0.008, POLE_X - 24);
      if (pX >= POLE_X - 24) { phase = 'slide'; phaseT = 0; pY = POLE_TOP - 4; }
    } else if (phase === 'slide') {
      const pr = Math.min(phaseT / 60, 1);
      flagY = POLE_TOP + (POLE_H - 30) * pr; pY = POLE_TOP + (GROUND_FL - 44 - POLE_TOP) * pr;
      if (pr >= 1) { phase = 'walk'; phaseT = 0; }
    } else if (phase === 'walk') {
      pX = Math.min(POLE_X + phaseT * sw * 0.007, POLE_X + sw * 0.18);
      if (phaseT === 30) {
        fc2.fillStyle = '#ffd700'; fc2.font = `bold ${Math.round(sh * 0.04)}px "Press Start 2P",monospace`;
        fc2.textAlign = 'center'; fc2.fillText('⭐ ' + score + '/' + TQ + ' ⭐', sw / 2, sh * 0.42);
      }
      if (phaseT > 80) { phase = 'done'; }
    } else {
      cancelAnimationFrame(frameId);
      setTimeout(() => {
        overlay.classList.remove('show');
        saveFullResult();
        window.location.href = 'party.html';
      }, 500);
      return;
    }
    frameId = requestAnimationFrame(drawFlag);
  }
  drawFlag();
}

function addParticles(x, y, emoji, n) {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2, spd = 1 + Math.random() * 3;
    particles.push({ x, y, vx: Math.cos(a) * spd, vy: Math.sin(a) * spd - 2, emoji, life: 40, maxLife: 40, alpha: 1, size: 14 + Math.random() * 6 });
  }
}

/* ═══════════════════════════════════════════════════════════════
   HUD
═══════════════════════════════════════════════════════════════ */
function updateHUD() {
  document.getElementById('hq').textContent = qIdx + '/' + TQ;
  document.getElementById('hsc').textContent = score;
  const hs = document.getElementById('hstreak');
  hs.textContent = 'x' + streak;
  hs.style.color = streak >= 3 ? '#ff0' : '#6f6';
  const hp = document.getElementById('hphase');
  hp.textContent = currentPhase;
  hp.className = 'hud-val' + (currentPhase === 2 ? ' phase2' : '');
  let h = ''; for (let i = 0; i < MAX_LIVES; i++) h += i < lives ? '❤️' : '🖤';
  document.getElementById('hlives').textContent = h;
}

/* ═══════════════════════════════════════════════════════════════
   QUESTION SYSTEM
═══════════════════════════════════════════════════════════════ */
let currentQuestion = null; // תיקון: שמירת השאלה הנוכחית ישירות

function triggerQuestion(idx) {
  if (inQuestion || idx >= pool.length) return;
  inQuestion = true; sndQuestion();
  const q = pool[idx];
  currentQuestion = q; // שמירת השאלה הנוכחית
  const cfg = LEVEL_CONFIG[currentLevel] || LEVEL_CONFIG.easy;
  document.getElementById('qcat').textContent = '【 ' + q.cat + ' 】';
  document.getElementById('qtxt').textContent = q.q;
  document.getElementById('qfb').textContent = '';
  document.getElementById('qopts').innerHTML = q.opts.map((o, i) =>
    `<button class="qbtn" data-idx="${i}">${String.fromCharCode(0x05D0 + i)}. ${o}</button>`
  ).join('');
  document.querySelectorAll('.qbtn').forEach(btn => {
    btn.addEventListener('click', () => answerQ(parseInt(btn.dataset.idx)));
  });
  document.getElementById('qov').classList.add('show');
  qIdx++;

  /* setInterval for countdown — EXPLICIT setInterval usage */
  startQuestionTimer(cfg.timerSec,
    (left) => { /* tick */ },
    () => { autoTimeout(q); }
  );
}

function autoTimeout(q) {
  document.querySelectorAll('.qbtn').forEach((b, i) => { if (i === q.ans) b.classList.add('correct'); });
  document.getElementById('qfb').style.color = '#ff8';
  document.getElementById('qfb').textContent = '⏱ הזמן נגמר!';
  streak = 0; sndTimeout();
  setTimeout(closeQuestion, 1700);
}

function answerQ(idx) {
  clearQuestionTimer();
  const q = currentQuestion; if (!q) return; // תיקון: שימוש ב-currentQuestion
  const btns = Array.from(document.querySelectorAll('.qbtn'));
  btns.forEach(b => b.style.pointerEvents = 'none');
  const fb = document.getElementById('qfb');
  btns[q.ans].classList.add('correct');

  if (idx === q.ans) {
    if (btns[idx]) btns[idx].classList.add('correct');
    streak++;
    const bonus = streak >= 3 ? ' (רצף x' + streak + '!!!)' : '';
    fb.style.color = '#5aff5a'; fb.textContent = '✓ נכון!' + bonus;
    score++; sndCorrect();
    addParticles(player.x + 20, player.y, track.food, 8);
    floatingTexts.push({ x: player.x + 20, y: player.y - 10, text: '+1 ' + track.food, color: '#ffd700', alpha: 1 });
    // Streak HUD animation
    const hs = document.getElementById('hstreak');
    hs.classList.remove('streak-pulse'); void hs.offsetWidth; hs.classList.add('streak-pulse');
  } else {
    if (btns[idx]) btns[idx].classList.add('wrong');
    fb.style.color = '#ff5a5a'; fb.textContent = '✗ טעות! הנכון: ' + q.opts[q.ans];
    streak = 0; sndWrong();
  }
  setTimeout(closeQuestion, 1800);
}

function closeQuestion() {
  document.getElementById('qov').classList.remove('show');
  inQuestion = false; currentQuestion = null; updateHUD();
  if (qIdx >= TQ) setTimeout(showResults, 900);
}

/* ═══════════════════════════════════════════════════════════════
   GAME LOOP
═══════════════════════════════════════════════════════════════ */
function gameLoop() { updatePhysics(); draw(); raf = requestAnimationFrame(gameLoop); }

/* ═══════════════════════════════════════════════════════════════
   START / STOP
═══════════════════════════════════════════════════════════════ */
function startTrack(idx) {
  ac(); sndStart();
  if (!isValidTrack(TRACKS[idx].id)) return; // uses includes()
  track = TRACKS[idx];
  pool = shuffle(TRACK_QUESTIONS[track.id] || []).slice(0, TQ);
  qIdx = 0; score = 0; streak = 0; lives = MAX_LIVES;
  inQuestion = false; flagReached = false; currentPhase = 1; shootCooldown = 0;

  document.getElementById('htk').textContent = track.emoji + ' ' + (LEVEL_CONFIG[currentLevel]?.label || '');
  updateHUD();

  player.x = 80; player.y = 0; player.vx = 0; player.vy = 0; player.onGround = true;
  player.hitCooldown = 0; player.wasOnGround = false;
  camX = 0;

  // Resize canvas
  const hudH = document.querySelector('.hud')?.offsetHeight || 56;
  const ctrlH = document.querySelector('.controls')?.offsetHeight || 100;
  W = canvas.width = window.innerWidth;
  H = canvas.height = Math.max(200, window.innerHeight - hudH - ctrlH);
  canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
  GROUND_Y = H - 48; player.y = GROUND_Y - player.h - 2;

  buildLevel();
  showScreen('gameScreen');
  gameRunning = true;
  cancelAnimationFrame(raf);
  gameLoop();
}

function stopGame() {
  gameRunning = false; cancelAnimationFrame(raf); clearQuestionTimer();
  document.getElementById('qov').classList.remove('show');
}
function goHome() { stopGame(); renderHome(); }

/* ═══════════════════════════════════════════════════════════════
   4. RESULTS + CONFETTI ANIMATION
═══════════════════════════════════════════════════════════════ */
function showResults() {
  stopGame();
  const sc = getScores();
  if (sc[track.id] === undefined || score > sc[track.id]) { sc[track.id] = score; saveScores(sc); }
  saveFullResult();

  document.getElementById('rscore').textContent = score + '/' + TQ;
  const stars = document.querySelectorAll('.rstar');
  stars.forEach(s => s.classList.remove('lit'));
  const trophy = document.getElementById('rtrophy');

  if (score === TQ) {
    trophy.textContent = '🏆';
    document.getElementById('rtitle').textContent = 'מושלם! 12/12!';
    document.getElementById('rmsg').textContent = 'שיחקת אותה מלך!\n' + track.food.repeat(12);
    stars.forEach((s, i) => setTimeout(() => s.classList.add('lit'), i * 300));
    sndVictory(); spawnConfetti();
  } else if (score >= 7) {
    trophy.textContent = '🥈';
    document.getElementById('rtitle').textContent = 'כל הכבוד!';
    document.getElementById('rmsg').textContent = 'אספת ' + score + ' פריטים!';
    setTimeout(() => stars[0].classList.add('lit'), 200);
    setTimeout(() => stars[1].classList.add('lit'), 500);
    sndCorrect();
  } else {
    trophy.textContent = '🥉';
    document.getElementById('rtitle').textContent = 'נסה שוב!';
    document.getElementById('rmsg').textContent = 'אספת ' + score + ' פריטים.\nאתה יכול יותר!';
    setTimeout(() => stars[0].classList.add('lit'), 300);
  }
  showScreen('results');
}

function spawnConfetti() {
  const rs = document.getElementById('results');
  const cols = ['#ffd700', '#ff6b6b', '#6bffb8', '#6bb5ff', '#ff6bff', '#ff9900'];
  for (let i = 0; i < 60; i++) {
    const c = document.createElement('div'); c.className = 'confetti';
    c.style.cssText = `left:${Math.random() * 100}%;top:-10px;background:${cols[i % cols.length]};` +
      `animation-duration:${1.5 + Math.random() * 2}s;animation-delay:${Math.random() * 0.8}s;` +
      `width:${6 + Math.random() * 8}px;height:${6 + Math.random() * 8}px;`;
    rs.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

/* ═══════════════════════════════════════════════════════════════
   INPUT — KEYBOARD
═══════════════════════════════════════════════════════════════ */
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft' || e.key === 'a') keys.left = true;
  if (e.key === 'ArrowRight' || e.key === 'd') keys.right = true;
  if ((e.key === 'ArrowUp' || e.key === 'w' || e.key === ' ') && !keys.jump) keys.jump = true;
  if (e.key === 'z' || e.key === 'Z') tryShoot();
  if (e.key === 'Escape') { const gs = document.getElementById('gameScreen'); if (gs.classList.contains('active')) goHome(); }
  if (e.key === 'ArrowUp' || e.key === ' ') e.preventDefault();
});
document.addEventListener('keyup', e => {
  if (e.key === 'ArrowLeft' || e.key === 'a') keys.left = false;
  if (e.key === 'ArrowRight' || e.key === 'd') keys.right = false;
  if (e.key === 'ArrowUp' || e.key === 'w' || e.key === ' ') keys.jump = false;
});

/* ═══════════════════════════════════════════════════════════════
   INPUT — MOBILE BUTTONS
═══════════════════════════════════════════════════════════════ */
function mobileBtn(id, onPress, onRelease) {
  const btn = document.getElementById(id);
  btn.addEventListener('touchstart', e => { e.preventDefault(); onPress(); btn.classList.add('pressed'); }, { passive: false });
  btn.addEventListener('touchend', e => { e.preventDefault(); onRelease(); btn.classList.remove('pressed'); }, { passive: false });
  btn.addEventListener('mousedown', () => { onPress(); btn.classList.add('pressed'); });
  btn.addEventListener('mouseup', () => { onRelease(); btn.classList.remove('pressed'); });
  btn.addEventListener('mouseleave', () => { onRelease(); btn.classList.remove('pressed'); });
}
mobileBtn('btnLeft', () => keys.left = true, () => keys.left = false);
mobileBtn('btnRight', () => keys.right = true, () => keys.right = false);
mobileBtn('btnJump', () => keys.jump = true, () => keys.jump = false);
mobileBtn('btnShoot', () => tryShoot(), () => { });

/* ═══════════════════════════════════════════════════════════════
   CAROUSEL BUTTONS
═══════════════════════════════════════════════════════════════ */
// arrows are now built inside each card
document.getElementById('btnEasy').onclick = () => startWithLevel('easy');
document.getElementById('btnHard').onclick = () => startWithLevel('hard');
document.getElementById('backBtn').onclick = () => goHome();
document.getElementById('btnPlayAgain').onclick = () => startTrack(TRACKS.indexOf(track));
document.getElementById('btnHome').onclick = () => goHome();

/* ═══════════════════════════════════════════════════════════════
   NAME FORM — submit event
═══════════════════════════════════════════════════════════════ */
document.getElementById('nameForm').addEventListener('submit', e => {
  e.preventDefault(); // preventDefault on submit
  const val = document.getElementById('nameInput').value.trim().replace(/[<>]/g, '');
  if (!val) return;
  localStorage.setItem(PLAYER_KEY, val);
  const g = document.getElementById('nameGreet');
  g.textContent = 'שלום ' + val + '! 👋';
  setTimeout(() => { g.textContent = ''; }, 3000);
});
document.getElementById('nameInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') return;
  e.target.style.borderColor = '#6dbe45';
});
document.getElementById('nameInput').addEventListener('blur', e => {
  e.target.style.borderColor = '#ffd700';
  const val = e.target.value.trim().replace(/[<>]/g, '');
  if (val) localStorage.setItem(PLAYER_KEY, val);
});

/* ═══════════════════════════════════════════════════════════════
   RESIZE — 2. FULL RESPONSIVENESS
═══════════════════════════════════════════════════════════════ */
function handleResize() {
  if (!gameRunning) return;
  const hudH = document.querySelector('.hud')?.offsetHeight || 56;
  const ctrlH = document.querySelector('.controls')?.offsetHeight || 100;
  W = canvas.width = window.innerWidth;
  H = canvas.height = Math.max(200, window.innerHeight - hudH - ctrlH);
  canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
  GROUND_Y = H - 48;
}
window.addEventListener('resize', handleResize);

/* ═══════════════════════════════════════════════════════════════
   CUSTOM ALERT OK BUTTON
═══════════════════════════════════════════════════════════════ */
document.getElementById('alertOk').addEventListener('click', () => {
  document.getElementById('custom-alert').classList.remove('show');
});

/* ═══════════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════════ */
// כפתור הוראות — עוצר את המשחק ופותח הוראות עם ?from=game
const _instrBtn = document.getElementById('instrBtn');
if (_instrBtn) _instrBtn.addEventListener('click', () => {
  if (gameRunning) stopGame();
  window.location.href = 'instructions.html?from=game';
});

// Logout button
const _lBtn = document.getElementById('logoutBtn');
if (_lBtn) _lBtn.addEventListener('click', () => {
  localStorage.removeItem('farm_session');
  window.location.href = '../pages/login.html';
});

// ⚙️ הגדרות
(function () {
  const s = JSON.parse(localStorage.getItem('farm_session') || 'null');
  const u = document.getElementById('settingsUser');
  if (s && u) u.textContent = 'שלום, ' + (s.displayName || s.username) + ' 👋';
  const btn = document.getElementById('settingsBtn');
  const menu = document.getElementById('settingsMenu');
  if (btn) btn.addEventListener('click', e => { e.stopPropagation(); menu.classList.toggle('open'); });
  document.addEventListener('click', () => menu && menu.classList.remove('open'));
  const sLogout = document.getElementById('settingsLogout');
  if (sLogout) sLogout.addEventListener('click', () => {
    localStorage.removeItem('farm_session');
    window.location.href = '../pages/login.html';
  });
})();

renderHome();
