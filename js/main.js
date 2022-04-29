console.log('Hello World');

// Open and Close Navigation for smaller screen

let openNav = document.getElementById('navBarOpen'),
closeNav = document.getElementById('navBarClose'),
navContainer = document.querySelector('.header-nav-container');

openNav.addEventListener('click', () => {
  navContainer.style.left = '0';
  navContainer.style.transition = 'left 0.2s ease';
  closeNav.style.left = '250px';
  closeNav.style.opacity = '1';
  closeNav.style.transition = 'all 0.2s ease';
  openNav.style.opacity = "0";
  openNav.style.transition = 'all 0.2s ease';
})

closeNav.addEventListener('click', () => {
  navContainer.style.left = '-250px';
  navContainer.style.transition = 'left 0.2s ease';
  closeNav.style.left = '-40px';
  closeNav.style.opacity = '0';
  closeNav.style.transition = 'all 0.2s ease';
  openNav.style.opacity = "1";
  openNav.style.transition = 'all 0.2s ease';
})

