document.addEventListener('DOMContentLoaded', () => {
const sidebarIcon = document.querySelector('.sidebar-icon');
const sidebar = document.querySelector('.sidebar-right-hidden');
const topFixed = document.querySelector('.top-fixed');
const codeCreators = document.querySelector('.code-creators')
let counter = 1;
const closeIcon = document.querySelector('.close-icon');


sidebarIcon.addEventListener('click', () => {
  counter += 1;
  console.log(counter);
  if (counter >= 2) {
    sidebar.classList.remove('sidebar-right-hidden');
    sidebar.classList.add('sidebar-right-visible');
    codeCreators.style.marginRight = '800px';
    sidebar.style.width = '200px';
    document.body.paddingRight = '200px';
    counter = 0;
    console.log(counter);
  } else {
    sidebar.classList.remove('sidebar-right-visible');
    codeCreators.style.marginRight = '1000px';
    sidebar.classList.add('sidebar-right-hidden');
  }
});


closeIcon.addEventListener('click', () => {
  sidebar.classList.remove('sidebar-right-visible');
  codeCreators.style.marginRight = '1000px';
  sidebar.classList.add('sidebar-right-hidden');
  codeCreators.style.marginRight = '80px';
  counter = 1;
});

const container = document.querySelector('.container');

container.addEventListener('click', () => {
  if (sidebar.classList.contains('sidebar-right-visible')) {
    console.log('dziala')
  } else {
    console.log('nie dziala');
  }
});



const darkModeButton = document.querySelector('.dark-mode');
const lightModeButton = document.querySelector('.light-mode');
const firstButton = document.querySelector('.fixed-top-first-button');
const secondButton = document.querySelector('.fixed-top-second-button');
const thirdButton = document.querySelector('.fixed-top-third-button');
const loginButton = document.querySelector('.login-button');
const contentBox = document.querySelector('.content-box'); 
const darkModeIcon = document.querySelector('.dark-mode-icon');
const lightModeIcon = document.querySelector('.light-mode-icon');
const about = document.querySelector('.about');
const aboutIcon = document.querySelector('.about-icon');
const ourServices = document.querySelector('.our-services');
const ourServicesIcon = document.querySelector('.our-services-icon');
const login = document.querySelector('.login');
const loginIcon = document.querySelector('.login-icon');
const logout = document.querySelector('.logout');
const logoutIcon = document.querySelector('.logout-icon');

lightModeButton.addEventListener('click', () => {
  document.body.style.backgroundColor = '#ccc';
  firstButton.style.color = '#3D3D3D';
  secondButton.style.color = '#3D3D3D';
  thirdButton.style.color = '#3D3D3D';
  loginButton.style.color = '#3D3D3D';
  codeCreators.style.color = '#000';
  topFixed.style.backgroundColor = '#fff';
  contentBox.style.backgroundColor = '#fff';
  logoutIcon.style.color = '#000';
  logoutIcon.style.backgroundColor = '#fff';
  logout.style.backgroundColor = '#fff';
  loginIcon.style.color = '#000';
  loginIcon.style.backgroundColor = '#fff';
  login.style.backgroundColor = '#fff';
  contentBox.style.color = '#000';
  sidebar.style.backgroundColor = '#fff';
  lightModeIcon.style.color = '#000';
  ourServicesIcon.style.color = '#000';
  ourServicesIcon.style.backgroundColor = '#fff';
  darkModeButton.style.backgroundColor = '#fff';
  lightModeButton.style.backgroundColor = '#fff';
  darkModeIcon.style.color = '#000';
  about.style.backgroundColor = '#fff';
  aboutIcon.style.color = '#000';
  aboutIcon.style.backgroundColor = '#fff';
  ourServices.style.backgroundColor = '#fff';
  closeIcon.style.color = '#000';
  sidebarIcon.style.color = '#000';
});


darkModeButton.addEventListener('click', () => {
  document.body.style.backgroundColor = '#1a1a1a';
  firstButton.style.color = 'rgb(172, 172, 172)';
  secondButton.style.color = 'rgb(172, 172, 172)';
  closeIcon.style.color = '#fff';
  sidebarIcon.style.color = '#fff';
  thirdButton.style.color = 'rgb(172, 172, 172)';
  logoutIcon.style.color = '#fff';
  logout.style.backgroundColor = '#1a1a1a';
  logoutIcon.style.backgroundColor = '#1a1a1a';
  loginIcon.style.backgroundColor = '#1a1a1a';
  loginIcon.style.color = '#fff';
  loginButton.style.color = 'rgb(172, 172, 172)';
  ourServicesIcon.style.color = '#fff';
  login.style.backgroundColor = '#1a1a1a';
  ourServicesIcon.style.backgroundColor = '#1a1a1a';
  darkModeIcon.style.color = '#fff';
  lightModeIcon.style.color = '#fff';
  darkModeButton.style.backgroundColor = '#1a1a1a';
  ourServices.style.backgroundColor = '#1a1a1a';
  lightModeButton.style.backgroundColor = '#1a1a1a'
  contentBox.style.backgroundColor = '#2c2c2c';
  topFixed.style.backgroundColor = '#1a1a1a';
  sidebar.style.backgroundColor = '#1a1a1a';
  contentBox.style.color = '#fff';
  codeCreators.style.color = '#fff';
  about.style.backgroundColor = '#1a1a1a';
  aboutIcon.style.backgroundColor = '#1a1a1a';
  aboutIcon.style.color = '#fff';
});
})

