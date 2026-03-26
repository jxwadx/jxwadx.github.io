// ─── YEAR ───
document.getElementById('year').textContent = new Date().getFullYear();

// ─── NAVBAR SCROLL ───
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ─── HAMBURGER MENU ───
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.textContent = isOpen ? '✕' : '☰';
});
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.textContent = '☰';
  });
});

// ─── PARTICLES ───
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 10; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  const size = Math.random() * 6 + 3;
  p.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    left: ${Math.random() * 100}%;
    top: ${Math.random() * 100}%;
    animation-delay: ${Math.random() * 4}s;
    animation-duration: ${4 + Math.random() * 4}s;
  `;
  particlesContainer.appendChild(p);
}

// ─── TYPING EFFECT ───
const typedEl = document.getElementById('typedText');
const fullText = 'CS Junior & Developer';
let i = 0;
function type() {
  if (i < fullText.length) {
    typedEl.textContent = fullText.slice(0, i + 1);
    i++;
    setTimeout(type, 60);
  }
}
setTimeout(type, 500);

// ─── SCROLL REVEAL ───
const revealSections = document.querySelectorAll('.reveal-section');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
revealSections.forEach(s => revealObserver.observe(s));

// ─── SKILL BARS ───
const skillBars = document.querySelectorAll('.skill-bar-fill');
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const width = bar.getAttribute('data-width') + '%';
      bar.style.setProperty('--w', width);
      bar.style.width = width;
      barObserver.unobserve(bar);
    }
  });
}, { threshold: 0.3 });
skillBars.forEach(bar => barObserver.observe(bar));

// ─── CONTACT FORM ───
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.style.display = 'none';
  successMsg.style.display = 'block';
  setTimeout(() => {
    successMsg.style.display = 'none';
    form.style.display = 'block';
    form.reset();
  }, 3000);
});
