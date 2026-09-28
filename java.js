```javascript
/* =====================================================
                    LOGIN DETAILS
===================================================== */

const correctName = "Bhanu";
const correctPassword = "birthday123";


/* =====================================================
                    UNLOCK
===================================================== */

function unlock() {

    let name = document.getElementById("username").value.trim();

    let password = document.getElementById("password").value.trim();

    let error = document.getElementById("error");

    if (name === correctName && password === correctPassword) {

        document.getElementById("loginScreen").style.animation =
            "loginAppear .7s reverse forwards";

        setTimeout(function() {

            document.getElementById("loginScreen").style.display = "none";

            document.getElementById("mainPage").classList.remove("hidden");

            document.getElementById("personName").textContent = name;

            document.getElementById("footerName").textContent = name;

            createConfetti(120);

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 700);

    } else {

        error.textContent =
            "❌ Wrong name or password. Try again!";

        document.querySelector(".login-box").animate(
            [
                {
                    transform: "translateX(0)"
                },
                {
                    transform: "translateX(-10px)"
                },
                {
                    transform: "translateX(10px)"
                },
                {
                    transform: "translateX(0)"
                }
            ],
            {
                duration: 400
            }
        );
    }
}


/* =====================================================
                    OPEN GIFT
===================================================== */

function openGift() {

    const message =
        document.getElementById("giftMessage");

    message.classList.remove("hidden");

    createConfetti(150);

    for (let i = 0; i < 25; i++) {

        setTimeout(() => {
            createHeart();
        }, i * 100);

    }

    message.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


/* =====================================================
                    SECRET MESSAGE
===================================================== */

function showSecret() {

    const secret =
        document.getElementById("secretMessage");

    secret.classList.toggle("hidden");

    if (!secret.classList.contains("hidden")) {

        createConfetti(100);

        secret.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}


/* =====================================================
                    CONFETTI
===================================================== */

function createConfetti(amount) {

    const container =
        document.getElementById("confettiContainer");

    const emojis = [
        "🎉",
        "✨",
        "💖",
        "🎈",
        "🌟",
        "🎊",
        "💕",
        "⭐",
        "🌸",
        "🥳"
    ];

    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("div");

        piece.className = "confetti";

        piece.textContent =
            emojis[
                Math.floor(
                    Math.random() * emojis.length
                )
            ];

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.fontSize =
            (
                15 +
                Math.random() * 25
            ) + "px";

        piece.style.animationDuration =
            (
                2 +
                Math.random() * 3
            ) + "s";

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        container.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 6000);
    }
}


/* =====================================================
                    FLOATING HEARTS
===================================================== */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.textContent = "💖";

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom = "0";

    heart.style.fontSize = "25px";

    heart.style.zIndex = "10000";

    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    heart.animate(
        [
            {
                transform:
                    "translateY(0) scale(.5)",
                opacity: 1
            },
            {
                transform:
                    "translateY(-100vh) scale(1.5)",
                opacity: 0
            }
        ],
        {
            duration: 2500,
            easing: "ease-out"
        }
    );

    setTimeout(() => {
        heart.remove();
    }, 2500);
}


/* =====================================================
                    MUSIC
===================================================== */

function toggleMusic() {

    const music =
        document.getElementById("birthdayMusic");

    const button =
        document.getElementById("musicButton");

    if (music.paused) {

        music.play();

        button.textContent =
            "⏸️ Pause Birthday Music";

    } else {

        music.pause();

        button.textContent =
            "▶️ Play Birthday Music";
    }
}


/* =====================================================
                    ENTER KEY
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            const login =
                document.getElementById("loginScreen");

            if (login.style.display !== "none") {

                unlock();

            }
        }
    }
);


/* =====================================================
                    RANDOM HEARTS
===================================================== */

setInterval(
    function() {

        const mainPage =
            document.getElementById("mainPage");

        if (
            !mainPage.classList.contains("hidden")
        ) {

            if (Math.random() > 0.7) {

                createHeart();

            }
        }

    },
    1500
);
```
