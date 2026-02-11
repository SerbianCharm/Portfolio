const langToggle = document.getElementById('langToggle');
const html = document.documentElement;

const currentLang = localStorage.getItem('lang') || 'de';
html.setAttribute('lang', currentLang);

if (langToggle) {
    langToggle.addEventListener('click', () => {
        const newLang = html.getAttribute('lang') === 'de' ? 'en' : 'de';
        html.setAttribute('lang', newLang);
        localStorage.setItem('lang', newLang);
    });
}

const canvas = document.getElementById('star-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let stars = [];

const STAR_COUNT = 150;
const LAYERS = 3;

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initStars();
}

class Star {
    constructor() {
        this.reset(true);
    }

    reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -10;
        this.layer = Math.floor(Math.random() * LAYERS) + 1;

        this.size = Math.random() * 1.5 + (this.layer * 0.5);
        this.speed = (Math.random() * 0.2 + 0.1) * (this.layer * 0.8);

        this.alphaBase = Math.random() * 0.5 + 0.2;
        this.alpha = this.alphaBase;
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
        this.twinkleDir = Math.random() > 0.5 ? 1 : -1;
    }

    update() {
        this.alpha += this.twinkleSpeed * this.twinkleDir;
        if (this.alpha > this.alphaBase + 0.2 || this.alpha < this.alphaBase - 0.1) {
            this.twinkleDir *= -1;
        }
    }

    draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
        ctx.fill();

        if (this.layer === 3) {
            ctx.shadowBlur = 4;
            ctx.shadowColor = "white";
        } else {
            ctx.shadowBlur = 0;
        }
    }
}

function initStars() {
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
        stars.push(new Star());
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    stars.forEach(star => {
        star.update();
        star.draw();
    });
    requestAnimationFrame(animate);
}

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resize, 100);
});
resize();
animate();
