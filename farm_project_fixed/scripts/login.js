/* login.js — התחברות / הרשמה */

const USERS_KEY   = "farm_users";
const SESSION_KEY = "farm_session";
const PLAYER_KEY  = "farm_party_player";

function readJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}
function writeJSON(key, val) { localStorage.setItem(key, JSON.stringify(val)); }
function getSession() { return readJSON(SESSION_KEY, null); }

/* ── Seed: משתמש מנהל ברירת מחדל אם אין משתמשים בכלל ── */
(function seedAdmin() {
  const users = readJSON(USERS_KEY, null);
  if (!users) {
    writeJSON(USERS_KEY, [{
      username: 'admin',
      displayName: 'מנהל',
      password: 'admin123',
      role: 'admin'
    }]);
  }
})();

/* ── כפתור הגדרות ── */
(function () {
  const s    = getSession();
  const u    = document.getElementById('settingsUser');
  if (s && u) u.textContent = 'שלום, ' + (s.displayName || s.username) + ' 👋';
  const btn  = document.getElementById('settingsBtn');
  const menu = document.getElementById('settingsMenu');
  if (btn) btn.addEventListener('click', e => { e.stopPropagation(); menu.classList.toggle('open'); });
  document.addEventListener('click', () => menu && menu.classList.remove('open'));
  const sl = document.getElementById('settingsLogout');
  if (sl) sl.addEventListener('click', () => {
    localStorage.removeItem(SESSION_KEY);
    window.location.href = 'login.html';
  });
})();

/* ── עזר: האם משתמש הוא מנהל ── */
function isAdminUser(user) {
  return user.role === 'admin' || user.username.toLowerCase().startsWith('admin');
}

/* ── הצג מסך ברכה (למשתמש רגיל) ── */
function showWelcome(displayName) {
  document.getElementById('authCard').style.display  = 'none';
  document.getElementById('welcomeCard').style.display = '';
  document.getElementById('helloName').textContent   = 'שלום ' + displayName + '! 🎉';
}

/* ── בדוק אם כבר מחובר ── */
const existingSession = getSession();
if (existingSession) {
  if (isAdminUser(existingSession)) {
    window.location.href = 'admin.html';
  } else {
    const displayName = existingSession.displayName || existingSession.username;
    localStorage.setItem(PLAYER_KEY, displayName);
    showWelcome(displayName);
  }
}

/* ── Tab switching ── */
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.panel').forEach(p => {
      p.classList.toggle('show', p.dataset.panel === btn.dataset.tab);
    });
  });
});

function setMsg(id, text, type) {
  const el = document.getElementById(id);
  el.textContent = text;
  el.className   = 'msg ' + (type || '');
}

/* ── כניסה ── */
document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;
  const users    = readJSON(USERS_KEY, []);
  const user     = users.find(u => u.username.toLowerCase() === username.toLowerCase());

  if (!user || user.password !== password) {
    return setMsg('loginMsg', 'לא מחובר ! , נא עבור להרשמה', 'err');
  }

  writeJSON(SESSION_KEY, {
    username:    user.username,
    displayName: user.displayName || user.username,
    role:        user.role || 'user'
  });
  localStorage.setItem(PLAYER_KEY, user.displayName || user.username);

  if (isAdminUser(user)) {
    setMsg('loginMsg', 'ברוך הבא מנהל! מעביר ללוח בקרה...', 'ok');
    setTimeout(() => { window.location.href = 'admin.html'; }, 700);
  } else {
    setMsg('loginMsg', 'התחברת בהצלחה! מעביר...', 'ok');
    setTimeout(() => { showWelcome(user.displayName || user.username); }, 600);
  }
});

/* ── הרשמה ── */
document.getElementById('registerForm').addEventListener('submit', e => {
  e.preventDefault();
  const username    = document.getElementById('regUsername').value.trim();
  const displayName = document.getElementById('regDisplayName').value.trim();
  const password    = document.getElementById('regPassword').value;
  const role        = username.toLowerCase().startsWith('admin') ? 'admin' : 'user';

  if (username.length < 3)  return setMsg('regMsg', 'שם משתמש חייב להיות לפחות 3 תווים.', 'err');
  if (!displayName)          return setMsg('regMsg', 'נא למלא שם תצוגה.', 'err');
  if (password.length < 6)  return setMsg('regMsg', 'סיסמה חייבת להיות לפחות 6 תווים.', 'err');

  const users = readJSON(USERS_KEY, []);
  if (users.some(u => u.username.toLowerCase() === username.toLowerCase()))
    return setMsg('regMsg', 'שם המשתמש כבר קיים. בחר/י שם אחר.', 'err');

  users.push({ username, displayName, password, role });
  writeJSON(USERS_KEY, users);

  setMsg('regMsg', 'נרשמת בהצלחה! עובר לכניסה...', 'ok');

  /* עבור לטאב התחברות */
  setTimeout(() => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelector(".tab[data-tab='login']").classList.add('active');
    document.querySelectorAll('.panel').forEach(p =>
      p.classList.toggle('show', p.dataset.panel === 'login'));
    document.getElementById('loginUsername').value = username;
    document.getElementById('loginPassword').value = password;
    document.getElementById('regMsg').textContent  = '';
  }, 800);
});

/* ── החלף משתמש ── */
document.getElementById('switchUserBtn').addEventListener('click', () => {
  localStorage.removeItem(SESSION_KEY);
  document.getElementById('authCard').style.display  = '';
  document.getElementById('welcomeCard').style.display = 'none';
});
