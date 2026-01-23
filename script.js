 // navigation
        function navigateTo(pageId) {
            // hide all pages
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            const target = document.getElementById(pageId);
            if (target) {
                target.classList.add('active');
            } else {
                console.warn('navigateTo: missing element #' + pageId);
            }

            // highlight nav links
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.toggle('active', link.getAttribute('data-target') === pageId);
            });

            // close mobile menu if open
            document.getElementById('mobileMenu').classList.remove('open');
            window.scrollTo(0,0);
        }

        // mobile
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('open');
        }

        // leaves
        function createLeaves() {
    const container = document.getElementById('leaf-container');
    if (!container) return;

    const leafCount = 14; // jitni density chahiye utna number badha sakte ho

    for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'leaf';
        

        // 🔹 Base position: equally spaced
        const segmentWidth = 100 / leafCount;
        const basePos = (i + 0.5) * segmentWidth;

        // 🔹 Thoda sa random jitter (taaki bilkul straight line na lage)
        const jitter = (Math.random() - 0.5) * segmentWidth * 0.5; // 50% of segment
        let finalPos = basePos + jitter;

        // 🔹 Boundary clamp (0–100 ke andar hi rahe)
        finalPos = Math.max(2, Math.min(98, finalPos));

        leaf.style.left = finalPos + 'vw';

        // Animation timing same hi rakho / tweak kar sakte ho
        const dur = 8 + Math.random() * 12;
        leaf.style.animation = `falling-leaf ${dur}s linear infinite`;
        leaf.style.animationDelay = (Math.random() * 6) + 's';

        // Thoda horizontal drift
        leaf.style.transform = `translateX(${(Math.random() - 0.5) * 40}px)`;

        container.appendChild(leaf);
    }
}


        // countdown: safe for past dates (shows "EVENT STARTED" when passed)
        function updateCountdown() {
            // set your event date here (year, monthIndex, day) => monthIndex = 0..11
            const targetDate = new Date(2026, 1, 6, 0, 0, 0).getTime(); // Feb 6, 2026
            function calculate() {
                const now = Date.now();
                const diff = targetDate - now;
                const daysEl = document.getElementById('days');
                const hoursEl = document.getElementById('hours');
                const minsEl = document.getElementById('minutes');
                const secsEl = document.getElementById('seconds');

                if (diff <= 0) {
                    daysEl.textContent = '00';
                    hoursEl.textContent = '00';
                    minsEl.textContent = '00';
                    secsEl.textContent = '00';
                    return;
                }

                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                daysEl.textContent = String(days).padStart(2, '0');
                hoursEl.textContent = String(hours).padStart(2, '0');
                minsEl.textContent = String(minutes).padStart(2, '0');
                secsEl.textContent = String(seconds).padStart(2, '0');
            }
            calculate();
            setInterval(calculate, 1000);
        }

        // registration handler
        function handleRegister(event) {
            event.preventDefault();
            const form = document.getElementById('registrationForm');
            const btn = document.getElementById('registerBtn');
            if (btn) btn.textContent = 'INITIATING...';
            // simple simulated submit
            setTimeout(() => {
                alert("WELCOME TO THE JUNGLE!\n\nRegistration complete. See you at AADHAR '14!");
                form.reset();
                if (btn) btn.textContent = 'Submit Registration';
                // optionally jump to home
                navigateTo('home');
            }, 900);
        }

        // Explore popup helpers
        function openExplore(title, desc) {
            document.getElementById('popup-title').textContent = title;
            document.getElementById('popup-desc').textContent = desc;
            const popup = document.getElementById('popup-box');
            popup.classList.add('open');
            popup.setAttribute('aria-hidden', 'false');
        }
        function closePopup() {
            const popup = document.getElementById('popup-box');
            popup.classList.remove('open');
            popup.setAttribute('aria-hidden', 'true');
        }

        // show console helpful errors if any missing nav targets
        function validateSections() {
            const links = Array.from(document.querySelectorAll('.nav-links a'));
            links.forEach(link => {
                const target = link.getAttribute('data-target');
                if (target && !document.getElementById(target)) {
                    console.warn('Nav link target not found in DOM:', target);
                }
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            // initialize icons
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
            // create leaves and countdown
            createLeaves();
            updateCountdown();
            validateSections();

            console.log('AADHAR website initialised');
        });

        // optional: keyboard Escape to close popup
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closePopup();
        });
/* =====================================================
   GENERIC POPUP ENGINE (CORE FIX)
===================================================== */

function openPopup(popupId, templateId) {
    const popup = document.getElementById(popupId);
    const template = document.getElementById(templateId);

    if (!popup || !template) {
        console.error('Popup or Template missing:', popupId, templateId);
        return;
    }

    popup.innerHTML = ""; // clear previous popup

    const clone = template.content.cloneNode(true);

    const box = document.createElement("div");
    box.className = "jumanji-popup";
    box.appendChild(clone);

    popup.appendChild(box);
    popup.classList.add("active");

    document.body.classList.add("popup-open"); // lock background
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (!popup) return;

    popup.classList.remove("active");
    popup.innerHTML = "";
    document.body.classList.remove("popup-open"); // unlock background
}


/* =====================================================
   ESC KEY CLOSE (SAFE)
===================================================== */

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.jumanji-overlay.active')
            .forEach(popup => popup.classList.remove('active'));
        document.body.classList.remove('popup-open');
    }
});


/* =====================================================
   EVENT-SPECIFIC WRAPPERS (YOUR ORIGINAL STRUCTURE)
===================================================== */

// Robo War
function openRoboWar() {
    openPopup("roboWarPopup", "roboWarTemplate");
}
function closeRoboWar() {
    closePopup("roboWarPopup");
}

// Robo Soccer
function openRoboSoccer() {
    openPopup("roboSoccerPopup", "roboSoccerTemplate");
}
function closeRoboSoccer() {
    closePopup("roboSoccerPopup");
}

// RC Car
function openRCCar() {
    openPopup("rcCarPopup", "rcCarTemplate");
}
function closeRCCar() {
    closePopup("rcCarPopup");
}

// Cozmo Clench
function openCozmoClench() {
    openPopup("cozmoClenchPopup", "cozmoClenchTemplate");
}
function closeCozmoClench() {
    closePopup("cozmoClenchPopup");
}

// Line Follower
function openLineFollower() {
    openPopup("lineFollowerPopup", "lineFollowerTemplate");
}
function closeLineFollower() {
    closePopup("lineFollowerPopup");
}

// Open Innovation
function openOpenInnovation() {
    openPopup("openInnovationPopup", "openInnovationTemplate");
}
function closeOpenInnovation() {
    closePopup("openInnovationPopup");
}

// Tech Quiz
function openTechQuiz() {
    openPopup("techQuizPopup", "techQuizTemplate");
}
function closeTechQuiz() {
    closePopup("techQuizPopup");
}

// Flash Design
function openFlashDesign() {
    openPopup("flashDesignPopup", "flashDesignTemplate");
}
function closeFlashDesign() {
    closePopup("flashDesignPopup");
}

// Hovercraft
function openHovercraft() {
    openPopup("hovercraftPopup", "hovercraftTemplate");
}
function closeHovercraft() {
    closePopup("hovercraftPopup");
}

// Go Karts
function openGoKarts() {
    openPopup("goKartsPopup", "goKartsTemplate");
}
function closeGoKarts() {
    closePopup("goKartsPopup");
}
// bgmi
function openBGMI() {
    openPopup("BGMIPopup", "BGMITemplate");
}
function closeBGMI() {
    closePopup("BGMIPopup");
}
// FREE FIRE
function openFreeFire() {
    openPopup("FreeFirePopup", "FreeFireTemplate");
}
function closeFreeFire() {
    closePopup("FreeFirePopup");
}

// valorant
function openValorant() {
    openPopup("ValorantPopup", "ValorantTemplate");
}
function closeValorant() {
    closePopup("ValorantPopup");
    
}

/* JUMANJI BOARD */
function openJumanjiBoard() {
    openPopup("jumanjiBoardPopup", "jumanjiBoardTemplate");
}
function closeJumanjiBoard() {
    closePopup("jumanjiBoardPopup");
}

/* TREASURE HUNT */
function openTreasureHunt() {
    openPopup("treasureHuntPopup", "treasureHuntTemplate");
}
function closeTreasureHunt() {
    closePopup("treasureHuntPopup");
}

/* HUMAN BINGO */
function openHumanBingo() {
    openPopup("humanBingoPopup", "humanBingoTemplate");
}
function closeHumanBingo() {
    closePopup("humanBingoPopup");
}

/* SPUD GUN */
function openSpudGun() {
    openPopup("spudGunPopup", "spudGunTemplate");
}
function closeSpudGun() {
    closePopup("spudGunPopup");
}

function openCanvaWorkshop() {
    openPopup("canvaWorkshopPopup", "canvaWorkshopTemplate");
}

function closeCanvaWorkshop() {
    closePopup("canvaWorkshopPopup");
}

/* =====================================================
   OPTIONAL: CLICK OUTSIDE TO CLOSE
===================================================== */

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('jumanji-overlay')) {
        e.target.classList.remove('active');
        document.body.classList.remove('popup-open');
    }
});




/* ===== GENERIC POPUP HANDLER (SAME STYLE AS ROBO WAR) ===== */
function openPopupById(templateId, popupId) {
    const template = document.getElementById(templateId);
    const popup = document.getElementById(popupId);

    if (!template || !popup) {
        console.error("Popup template or container missing:", templateId, popupId);
        return;
    }

    popup.innerHTML = "";
    popup.appendChild(template.content.cloneNode(true));
    popup.classList.add("active");
    document.body.classList.add("popup-open");
}

function closePopupById(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.remove("active");
    popup.innerHTML = "";
    document.body.classList.remove("popup-open");
}

window.addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  music.volume = 0.25;   // soft jungle vibe
  music.play();
}, { once: true });


const music = document.getElementById("bg-music");
const btn = document.getElementById("soundToggle");

// Try autoplay on load
window.addEventListener("load", () => {
  music.volume = 0.25;
  music.play().then(() => {
    btn.innerText = "🔊 Sound On";
  }).catch(() => {
    // If browser blocks autoplay → wait for first click
    btn.innerText = "▶ Tap to enable sound";
  });
});

// Toggle button
function toggleSound(){
  if(music.paused){
    music.play();
    btn.innerText = "🔊 Sound On";
  } else {
    music.pause();
    btn.innerText = "🔇 Sound Off";
  }
}

// If autoplay was blocked → first user click starts sound
document.addEventListener("click", () => {
  if(music.paused){
    music.play();
    btn.innerText = "🔊 Sound On";
  }
}, { once:true });
