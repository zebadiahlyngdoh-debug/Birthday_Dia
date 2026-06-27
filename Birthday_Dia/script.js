// ===============================
// Dreamy Birthday Website
// Created for Jared ❤️ XYZ
// ===============================

// ------------------------------
// Typing Animation
// ------------------------------

const message = `Happy Birthday, my love ❤️

You are the most beautiful thing that has ever happened to me.

Thank you for always making me smile, believing in me, and standing beside me.

Every moment with you becomes a memory I treasure forever.

I hope today brings you as much happiness as you've brought into my life.

No matter where life takes us, I promise I'll always choose you.

I love you more than words can express.

Forever Yours,

Jared ❤️`;

let index = 0;
const typingElement = document.getElementById("typing");

function typeMessage() {

    if (!typingElement) return;

    if (index < message.length) {

        typingElement.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeMessage, 35);

    }

}

window.onload = () => {

    typeMessage();

};

// ------------------------------
// Gift Box Surprise
// ------------------------------

const gift = document.getElementById("gift");
const hiddenMessage = document.getElementById("hiddenMessage");

if (gift) {

    gift.addEventListener("click", () => {

        gift.innerHTML = "💖";

        gift.style.transform = "scale(1.3)";

        hiddenMessage.style.display = "block";

        createConfetti();

    });

}

// ------------------------------
// Floating Hearts
// ------------------------------

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.bottom = "-20px";

    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    heart.style.opacity = "0.8";

    heart.style.pointerEvents = "none";

    heart.style.animation = "floatUp 6s linear";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 6000);

}

setInterval(createHeart, 900);

// ------------------------------
// Floating Heart Animation
// ------------------------------

const style = document.createElement("style");

style.innerHTML = `

@keyframes floatUp{

0%{

transform:translateY(0);

opacity:0;

}

20%{

opacity:1;

}

100%{

transform:translateY(-120vh);

opacity:0;

}

}

`;

document.head.appendChild(style);

// ------------------------------
// Reveal Sections on Scroll
// ------------------------------

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(50px)";

    section.style.transition = "1s";

    observer.observe(section);

});

// ------------------------------
// Confetti Effect
// ------------------------------

function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";

        confetti.style.left = Math.random() * window.innerWidth + "px";

        confetti.style.top = "-20px";

        confetti.style.width = "10px";

        confetti.style.height = "10px";

        confetti.style.background = randomColor();

        confetti.style.borderRadius = "50%";

        confetti.style.pointerEvents = "none";

        confetti.style.animation = `confetti ${3 + Math.random() * 2}s linear`;

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}

// ------------------------------
// Random Colors
// ------------------------------

function randomColor() {

    const colors = [

        "#FF5FA2",

        "#FFD166",

        "#FFFFFF",

        "#A29BFE",

        "#FDCB6E",

        "#81ECEC"

    ];

    return colors[Math.floor(Math.random() * colors.length)];

}

// ------------------------------
// Confetti Animation
// ------------------------------

const confettiStyle = document.createElement("style");

confettiStyle.innerHTML = `

@keyframes confetti{

0%{

transform:translateY(0) rotate(0deg);

}

100%{

transform:translateY(120vh) rotate(720deg);

}

}

`;

document.head.appendChild(confettiStyle);

// ------------------------------
// Console Message
// ------------------------------

console.log("%cHappy Birthday XYZ ❤️", "color:pink;font-size:28px;font-weight:bold;");