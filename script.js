const bgElements = ['❤️', '💖', '67', '💕', '67'];
function createBgElement() {
    const el = document.createElement('div'); el.classList.add('bg-element'); el.innerText = bgElements[Math.floor(Math.random() * bgElements.length)];
    el.style.left = Math.random() * 100 + "vw"; el.style.fontSize = Math.random() * 16 + 16 + "px"; el.style.animationDuration = Math.random() * 3 + 5 + "s";
    document.body.appendChild(el); setTimeout(() => el.remove(), 8000);
}
setInterval(createBgElement, 400);

const slides = document.querySelectorAll('.love-slide'); let currentSlide = 0;
function nextSlide() { if(slides.length === 0) return; slides[currentSlide].classList.remove('active'); currentSlide = (currentSlide + 1) % slides.length; slides[currentSlide].classList.add('active'); }
setInterval(nextSlide, 3000);

const startDate = new Date('2026-01-11T00:00:00');
function updateTimer() {
    const now = new Date(); const difference = now - startDate; if (difference < 0) return;
    document.getElementById('days').innerText = Math.floor(difference / (1000 * 60 * 60 * 24));
    document.getElementById('hours').innerText = Math.floor((difference / (1000 * 60 * 60)) % 24);
    document.getElementById('minutes').innerText = Math.floor((difference / 1000 / 60) % 60);
    document.getElementById('seconds').innerText = Math.floor((difference / 1000) % 60);
}
setInterval(updateTimer, 1000); updateTimer();

const noBtn = document.getElementById('noBtn'); const yesBtn = document.getElementById('yesBtn'); const question = document.getElementById('question'); const subtext = document.getElementById('subtext'); let yesScale = 1;
function moveButton() {
    const maxWidth = window.innerWidth - noBtn.offsetWidth; const maxHeight = window.innerHeight - noBtn.offsetHeight;
    const randomX = Math.max(15, Math.min(Math.random() * maxWidth, maxWidth - 15)); const randomY = Math.max(15, Math.min(Math.random() * maxHeight, maxHeight - 15));
    noBtn.style.position = 'fixed'; noBtn.style.left = `${randomX}px`; noBtn.style.top = `${randomY}px`; yesScale += 0.15; yesBtn.style.transform = `scale(${yesScale})`;
}
noBtn.addEventListener('mouseenter', moveButton); noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveButton(); });

let celebrateInterval;
yesBtn.addEventListener('click', () => {
    question.innerHTML = "Ура! Ты делаешь меня самым счастливым! 🥰"; subtext.innerHTML = "Обещаю ценить каждый момент, проведенный вместе с тобой.";
    noBtn.style.display = 'none'; yesBtn.style.display = 'none'; celebrateInterval = setInterval(createCelebrateHeart, 200); setTimeout(() => clearInterval(celebrateInterval), 8000);
});
function createCelebrateHeart() { const heart = document.createElement('div'); heart.classList.add('celebrate-heart'); heart.innerHTML = '❤️'; heart.style.left = Math.random() * 100 + "vw"; heart.style.animationDuration = Math.random() * 2 + 2 + "s"; document.body.appendChild(heart); setTimeout(() => heart.remove(), 4000); }

const reasons = ["за то, что ты есть.", "за то, как ты меня обнимаешь.", "за твою заботу.", "за твою доброту.", "за твое потрясающее<br>чувство юмора.", "за твою сногсшибательную улыбку.", "за твои прекрасные глазки<br>(я их просто обожаю).", "за то, что переживаешь за меня.", "за то, что делаешь меня сильнее.", "просто так."];
const grid = document.querySelector('.reasons-grid');
reasons.forEach((text, index) => {
    const card = document.createElement('div'); card.classList.add('card-3d');
    card.innerHTML = `<div class="card-inner"><div class="card-front">${index + 1}</div><div class="card-back">${text}</div></div>`;
    card.addEventListener('click', () => card.classList.toggle('flipped')); grid.appendChild(card);
});

const envelope = document.getElementById('secretEnvelope'); envelope.addEventListener('click', () => envelope.classList.toggle('open'));
