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
    const link = document.querySelector(`.menu a[href*=${id}]`);

    if (link) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
});

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
