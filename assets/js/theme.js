if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  changeTheme('dark');
} else {
  changeTheme('light');
}

function changeTheme(theme) {
  if (theme == 'dark') {
    localStorage.theme = 'dark';
    document.documentElement.classList.add('dark');
  } else {
    localStorage.theme = 'light';
    document.documentElement.classList.remove('dark');
  }
}

function toggleTheme() {
  changeTheme(localStorage.theme == 'dark' ? 'light' : 'dark');
}
