/* party.js — דף מסיבת הסיום */

const SESSION_KEY = 'farm_session';
const RESULTS_KEY = 'farm_party_results';

function readJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}

/* ── כפתור הגדרות ── */
(function () {
  const s    = readJSON(SESSION_KEY, null);
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

/* ── נתוני session ── */
const session     = readJSON(SESSION_KEY, null);
const currentUser = session ? (session.username || session.displayName) : null;
const displayName = session ? (session.displayName || session.username || 'שחקן/ית') : 'שחקן/ית';

/* ── ניקוד האחרון ── */
const lastScore = parseInt(localStorage.getItem('lastScore') || '0', 10);
document.getElementById('finalScore').textContent = 'הניקוד שלך: ' + lastScore + '/12';

/* ── אנימציית חיות ── */
document.addEventListener('DOMContentLoaded', () => {
  const tracks = document.querySelectorAll('.animal-track');
  tracks.forEach((track, index) => {
    setTimeout(() => {
      track.classList.add('animate');
      setTimeout(() => track.classList.add('finished'), 2300);
    }, index * 600);
  });

  /* ── תוצאות המשתמש הנוכחי ── */
  const allResults = readJSON(RESULTS_KEY, []);
  const myResults  = currentUser
    ? allResults.filter(r => r.username === currentUser || r.player === currentUser || r.username === displayName || r.player === displayName)
    : [];

  renderMyResults(myResults);
  renderAllResults(allResults);
});

function renderMyResults(myResults) {
  const el = document.getElementById('myResultsList');
  if (!el) return;

  if (myResults.length === 0) {
    el.innerHTML = '<p class="no-results">עדיין אין תוצאות. שחק/י ותחזור/י!</p>';
    return;
  }

  /* מיין מהחדש לישן */
  const sorted = myResults.slice().sort((a, b) => new Date(b.dateISO) - new Date(a.dateISO));

  el.innerHTML = sorted.map(r => {
    const pct   = Math.round(((r.score || 0) / (r.total || 12)) * 100);
    const stars = pct >= 100 ? '⭐⭐⭐' : pct >= 58 ? '⭐⭐' : '⭐';
    const date  = r.dateISO ? new Date(r.dateISO).toLocaleString('he-IL', { day:'2-digit', month:'2-digit', hour:'2-digit', minute:'2-digit' }) : '';
    return `
      <div class="my-result-card">
        <div class="mrc-emoji">${r.emoji || '🐾'}</div>
        <div class="mrc-info">
          <div class="mrc-track">${r.trackName || r.game || 'מסלול'}</div>
          <div class="mrc-score">${stars} <b>${r.score}/${r.total || 12}</b> (${pct}%)</div>
          <div class="mrc-date">${date}</div>
        </div>
      </div>`;
  }).join('');
}

function renderAllResults(allResults) {
  const el = document.getElementById('resultsList');
  if (!el) return;

  if (allResults.length === 0) {
    el.innerHTML = '<p class="no-results">עדיין אין הישגים רשומים.</p>';
    return;
  }

  /* Top 10 לפי ניקוד */
  const sorted = allResults.slice().sort((a, b) => (b.score || 0) - (a.score || 0)).slice(0, 10);
  el.innerHTML = sorted.map((r, i) => {
    const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i + 1) + '.';
    return `
      <div class="result-card${(r.username === currentUser || r.player === currentUser) ? ' is-me' : ''}">
        <div class="rc-rank">${medal}</div>
        <div class="rc-name">👤 ${r.displayName || r.username || r.player || 'שחקן/ית'}</div>
        <div class="rc-track">${r.emoji || '🐾'} ${r.trackName || ''}</div>
        <div class="rc-score">🎯 ${r.score}/${r.total || 12}</div>
      </div>`;
  }).join('');
}

function getAnimalEmoji(track) {
  const m = { rabbit:'🐰', cow:'🐮', sheep:'🐑', chicken:'🐔', pig:'🐷', dog:'🐶', mouse:'🐭', monkey:'🐵' };
  return m[track] || '🐾';
}
