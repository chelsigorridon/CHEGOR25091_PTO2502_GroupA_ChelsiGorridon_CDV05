const toggle = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggle.checked = true;
} else {
  body.classList.add('light');
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
  } 
});