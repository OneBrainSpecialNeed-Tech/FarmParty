/* admin.js — לוח בקרה מנהל */

const USERS_KEY   = "farm_users";
const RESULTS_KEY = "farm_party_results";
const SESSION_KEY = "farm_session";

function readJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}
function writeJSON(key, val) { localStorage.setItem(key, JSON.stringify(val)); }

/* ── הגדרות (settings btn) ── */
(function () {
  const s = readJSON(SESSION_KEY, null);
  const u = document.getElementById('settingsUser');
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

/* ── בדיקת הרשאת מנהל ── */
const session = readJSON(SESSION_KEY, null);
const isAdmin = session && (
  session.role === 'admin' ||
  (session.username && session.username.toLowerCase().startsWith('admin'))
);
if (!isAdmin) {
  alert('אין הרשאה לדף זה.');
  window.location.href = 'login.html';
}

/* ── שם מחובר ── */
document.getElementById('adminName').textContent =
  'מחובר/ת כ: ' + (session.displayName || session.username) + ' (מנהל 👑)';

/* ── נתונים ── */
const users   = readJSON(USERS_KEY, []);
const results = readJSON(RESULTS_KEY, []);

/* סטטיסטיקות */
document.getElementById('statUsers').textContent  = users.length;
document.getElementById('statAdmins').textContent = users.filter(u => u.role === 'admin').length;
document.getElementById('statGames').textContent  = results.length;
const bestScore = results.length
  ? Math.max(...results.map(r => r.score || 0)) + '/' + (results[0].total || 12)
  : '—';
document.getElementById('statBest').textContent = bestScore;

/* ── טבלת משתמשים ── */
const usersRows = document.getElementById('usersRows');
usersRows.innerHTML = '';
if (users.length === 0) {
  usersRows.innerHTML = "<tr class='empty-row'><td colspan='5'>אין משתמשים רשומים עדיין</td></tr>";
} else {
  users.forEach((u, i) => {
    const tr  = document.createElement('tr');
    const pwId = 'pw_' + i;
    tr.innerHTML = `
      <td><b>${i + 1}</b></td>
      <td><b>${u.username}</b></td>
      <td class="col-display">${u.displayName || '—'}</td>
      <td class="col-pw">
        <div class="pw-wrap">
          <span class="pw-dots" id="${pwId}">••••••</span>
          <button class="pw-toggle" onclick="togglePw('${pwId}','${(u.password || '').replace(/'/g, "\\'")}')">👁️</button>
        </div>
      </td>
      <td><span class="badge ${u.role || 'user'}">${u.role === 'admin' ? 'מנהל 👑' : 'משתמש 🎮'}</span></td>
    `;
    usersRows.appendChild(tr);
  });
}

function togglePw(id, pw) {
  const el = document.getElementById(id);
  const isHidden = el.textContent === '••••••';
  el.textContent      = isHidden ? pw : '••••••';
  el.style.color         = isHidden ? '#3a2010' : '#aaa';
  el.style.letterSpacing = isHidden ? 'normal'  : '2px';
  el.style.fontSize      = isHidden ? '13px'    : '18px';
}

/* ── טבלת תוצאות ── */
const resultsRows = document.getElementById('resultsRows');
resultsRows.innerHTML = '';
const sorted = results.slice().sort((a, b) => new Date(b.dateISO) - new Date(a.dateISO));
if (sorted.length === 0) {
  resultsRows.innerHTML = "<tr class='empty-row'><td colspan='4'>אין תוצאות עדיין</td></tr>";
} else {
  sorted.forEach(r => {
    const tr = document.createElement('tr');
    const d  = new Date(r.dateISO).toLocaleString('he-IL');
    tr.innerHTML = `
      <td><b>${r.player || r.username || '—'}</b></td>
      <td>${r.trackName || r.game || '—'} ${r.emoji || ''}</td>
      <td><b>${r.score}/${r.total}</b></td>
      <td style="font-size:12px;color:#888;">${d}</td>
    `;
    resultsRows.appendChild(tr);
  });
}

/* ── התנתקות ── */
document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.removeItem(SESSION_KEY);
  window.location.href = 'login.html';
});
