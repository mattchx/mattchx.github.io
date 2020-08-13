// NAV BAR
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

// DARK MODE 
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});

// Nav Add Issue button is added on scroll
// 
//   // scrollTop - distance from top; clientHeight - height of the window; scrollHeight - total scrollable height
//   // let scrollBottom = scrollHeight - scrollTop - clientHeight;
//   let { scrollTop } = document.documentElement;
  
//   const element = document.getElementById('about');
//   const yOffset = -400;
//   const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//   console.log(scrollTop, '>', y );

//   if (scrollTop > y) {
//     console.log("we're here!");
//     const el = document.querySelector('.about-me__img');
//     el.classList.add('is-visible');
//   }
// });

window.addEventListener('scroll', () => {
let w = window.innerWidth;
console.log(w);
});