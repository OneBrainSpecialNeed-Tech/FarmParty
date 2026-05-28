function read() {
  try { return JSON.parse(localStorage.getItem('farm_party_results') || '[]') } catch { return [] }
}
const rows = document.querySelector('#rows'), empty = document.querySelector('#empty'); const data = read().slice().sort((a, b) => b.score - a.score || new Date(a.dateISO) - new Date(b.dateISO));
if (!data.length) empty.textContent = 'עדיין אין שיאים להצגה.';
data.slice(0, 10).forEach((r, i) => {
  const tr = document.createElement('tr'); tr.innerHTML = `<td>${i + 1}</td><td>${r.player}</td><td>${r.emoji} ${r.trackName}</td><td>${r.level}</td><td>${r.score}/${r.total}</td>`;
  rows.appendChild(tr);
});
window.addEventListener('scroll', () => document.body.classList.toggle('scrolled', scrollY > 20));

(function () {
  var s = null; try { s = JSON.parse(localStorage.getItem('farm_session')); } catch (e) { }
  var u = document.getElementById('settingsUser');
  if (s && u) u.textContent = 'שלום, ' + (s.displayName || s.username) + ' 👋';
  var btn = document.getElementById('settingsBtn'), menu = document.getElementById('settingsMenu');
  btn.addEventListener('click', function (e) { e.stopPropagation(); menu.classList.toggle('open'); });
  document.addEventListener('click', function () { menu.classList.remove('open'); });
  document.getElementById('settingsLogout').addEventListener('click', function () {
    localStorage.removeItem('farm_session'); window.location.href = 'login.html';
  });
})();
