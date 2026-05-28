
(function () {
  var SESSION_KEY = 'farm_session';
  var s = null;
  try { s = JSON.parse(localStorage.getItem(SESSION_KEY)); } catch (e) { }
  var userEl = document.getElementById('settingsUser');
  if (s && userEl) userEl.textContent = 'שלום, ' + (s.displayName || s.username) + ' 👋';
  var btn = document.getElementById('settingsBtn');
  var menu = document.getElementById('settingsMenu');
  btn.addEventListener('click', function (e) { e.stopPropagation(); menu.classList.toggle('open'); });
  document.addEventListener('click', function () { menu.classList.remove('open'); });
  document.getElementById('settingsLogout').addEventListener('click', function () {
    localStorage.removeItem(SESSION_KEY);
    location.reload();
  });
})();
