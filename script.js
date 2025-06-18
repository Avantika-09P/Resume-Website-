// Update current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const toggleBtn = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
