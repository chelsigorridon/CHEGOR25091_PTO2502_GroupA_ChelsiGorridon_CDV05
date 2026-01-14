

  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.navigation ul');
  const navItems = document.querySelectorAll('.navigation ul li a');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

