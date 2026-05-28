
const SESSION_KEY = "farm_session";
const RESULTS_KEY = "farm_party_results"; // המפתח היחיד שהמשחק שומר בו

function readJSON(key, fb) { try { return JSON.parse(localStorage.getItem(key)) ?? fb; } catch { return fb; } }

const session = readJSON(SESSION_KEY, null);
if (!session) {
  alert("אין גישה — צריך להתחבר.");
  window.location.href = "login.html";
}

const displayName = session.displayName || session.username;
document.getElementById("who").textContent =
  `מחובר/ת כ: ${displayName} (${session.role === "admin" ? "מנהל" : "משתמש"})`;
document.getElementById("title").textContent = session.role === "admin"
  ? "כל התוצאות של כל המשתמשים"
  : "התוצאות שלי בלבד";

function formatDate(iso) { return new Date(iso).toLocaleString("he-IL"); }

function render() {
  const all = readJSON(RESULTS_KEY, []);

  // כל רשומה יכולה להיות עם player או username — נאחד
  const normalized = all.map(r => ({
    username: r.username || r.player || "שחקן/ית",
    game: (r.trackName || r.trackId || 'מסלול') + ' ' + (r.emoji || ''),
    score: r.score ?? 0,
    total: r.total || 12,
    dateISO: r.dateISO
  }));

  const data = session.role === "admin"
    ? normalized
    : normalized.filter(r =>
      r.username === session.username ||
      r.username === displayName
    );

  const tbody = document.getElementById("resultsBody");
  tbody.innerHTML = "";
  if (data.length === 0) {
    document.getElementById("empty").textContent = "אין עדיין תוצאות להצגה.";
    return;
  }
  document.getElementById("empty").textContent = "";
  data.slice().sort((a, b) => new Date(b.dateISO) - new Date(a.dateISO))
    .forEach(r => {
      const tr = document.createElement("tr");
      const pct = Math.round((r.score / r.total) * 100);
      tr.innerHTML = `
            <td>${r.username}</td>
            <td>${r.game}</td>
            <td><b>${r.score}/${r.total}</b> (${pct}%)</td>
            <td>${formatDate(r.dateISO)}</td>
          `;
      tbody.appendChild(tr);
    });
}
render();

// settings menu
document.getElementById("settingsUser").textContent = "שלום, " + displayName + " 👋";
var settingsBtn = document.getElementById("settingsBtn");
var settingsMenu = document.getElementById("settingsMenu");
settingsBtn.addEventListener("click", function (e) { e.stopPropagation(); settingsMenu.classList.toggle("open"); });
document.addEventListener("click", function () { settingsMenu.classList.remove("open"); });

function doLogout() {
  localStorage.removeItem(SESSION_KEY);
  window.location.href = "login.html";
}
document.getElementById("settingsLogout").addEventListener("click", doLogout);
document.getElementById("logout").addEventListener("click", doLogout);
