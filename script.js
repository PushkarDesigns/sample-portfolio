// ===== Toggle Menu =====
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu a');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  toggle.classList.toggle('active');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    toggle.classList.remove('active');
  });
});

// ===== Scroll Active Link =====
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollY = window.pageYOffset;

  sections.forEach(sec => {
    const sectionHeight = sec.offsetHeight;
    const sectionTop = sec.offsetTop - 100;
    const id = sec.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.menu a[href*=${id}]`).classList.add('active');
    } else {
      document.querySelector(`.menu a[href*=${id}]`).classList.remove('active');
    }
  });
});

// ===== Typewriter Effect =====
const typeWriter = () => {
  const texts = ['Web Developer', 'Frontend Designer', 'Tech Enthusiast'];
  let index = 0;
  let charIndex = 0;
  const speed = 120;
  const target = document.getElementById('typing');

  function type() {
    if (charIndex < texts[index].length) {
      target.textContent += texts[index].charAt(charIndex);
      charIndex++;
      setTimeout(type, speed);
    } else {
      setTimeout(erase, 1500);
    }
  }

  function erase() {
    if (charIndex > 0) {
      target.textContent = texts[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 60);
    } else {
      index = (index + 1) % texts.length;
      setTimeout(type, 200);
    }
  }

  type();
};

document.addEventListener('DOMContentLoaded', typeWriter);

// ===== Scroll Animation =====
const revealElements = document.querySelectorAll('section, .project-card, .skill');

function revealOnScroll() {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    } else {
      el.style.opacity = 0;
      el.style.transform = 'translateY(40px)';
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== Footer Year Auto Update =====
document.getElementById('year').textContent = new Date().getFullYear();
