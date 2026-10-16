document.addEventListener('DOMContentLoaded', function () {
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const body = document.body;
  const themeToggleBtn = document.getElementById('themeToggle');

  function updateToggleIcon(theme) {
    if (themeToggleBtn) {
      themeToggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  let savedTheme = 'dark';
  try {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
      savedTheme = storedTheme;
    }
  } catch (error) {
    savedTheme = 'dark';
  }

  body.setAttribute('data-theme', savedTheme);
  updateToggleIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      body.setAttribute('data-theme', newTheme);
      try {
        localStorage.setItem('theme', newTheme);
      } catch (error) {
        // Ignore storage errors in restricted environments.
      }
      updateToggleIcon(newTheme);
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
