// מוזיקה
const music = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");
const startBtn = document.getElementById("startGameBtn");
const bars = document.querySelectorAll(".bar");

if (startBtn) {
  startBtn.addEventListener("click", () => {
    window.location.href = "game.html";
  });
}

let playing = false;

function toggleMusic() {
  if (!music || !playBtn) return;

  if (!playing) {
    music.play().catch(err => console.log("Music play blocked:", err));
    playBtn.textContent = "⏸️";
    bars.forEach(b => b.classList.remove("paused"));
    playing = true;
  } else {
    music.pause();
    playBtn.textContent = "▶️";
    bars.forEach(b => b.classList.add("paused"));
    playing = false;
  }
}

// TOPBAR
(function () {
  const s = JSON.parse(localStorage.getItem('farm_session'));
  const u = document.getElementById('settingsUser');

  if (s && u) {
    u.textContent = 'שלום, ' + (s.displayName || s.username);
  }

  const menu = document.getElementById('settingsMenu');
  const btn = document.getElementById('settingsBtn');

  if (btn && menu) {
    btn.onclick = function (e) {
      e.stopPropagation();
      menu.classList.toggle("open");
    };

    document.addEventListener('click', () => {
      menu.classList.remove("open");
    });
  }

  const logout = document.getElementById('settingsLogout');
  if (logout) {
    logout.onclick = () => {
      localStorage.removeItem('farm_session');
      location.href = 'login.html';
    };
  }
})();


(function () {
  // הצג כפתור "המשך משחק" רק אם הגיעו מהמשחק
  const params = new URLSearchParams(location.search);
  if (params.get('from') === 'game') {
    document.getElementById('backBtnWrap').style.display = 'block';
  }
  document.getElementById('backToGameBtn').addEventListener('click', function () {
    history.back();
  });
})();
