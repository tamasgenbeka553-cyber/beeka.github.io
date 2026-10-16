document.addEventListener('DOMContentLoaded', function () {
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');

  const applyTheme = function (mode) {
    body.setAttribute('data-theme', mode);
    if (themeToggle) {
      themeToggle.textContent = mode === 'dark' ? '☀️' : '🌙';
    }
    localStorage.setItem('portfolio-theme', mode);
  };

  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const nextMode = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(nextMode);
    });
  }

  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const nameInput = form.querySelector('input[name="name"]');
      const name = nameInput && nameInput.value ? nameInput.value : 'there';
      if (formStatus) {
        formStatus.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
      }
      form.reset();
    });
  }
});