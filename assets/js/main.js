// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    if (isOpen) {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    } else {
      mobileMenu.classList.remove('hidden');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    }
  });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  });
});

// Header shadow on scroll
const header = document.querySelector('header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('shadow-sm');
    } else {
      header.classList.remove('shadow-sm');
    }
  });
}
