// This script handles additional interactive frontend features,
// including the dark mode toggle implementation.

const darkModeToggle = document.getElementById('dark-mode-toggle');

function toggleDarkMode() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

if (darkModeToggle) {
  darkModeToggle.addEventListener('click', toggleDarkMode);
}
