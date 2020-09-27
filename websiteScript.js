//all selectors
const defaultButton = document.getElementById('default');
const darkButton = document.getElementById('dark');
const header = document.getElementById('home');

//setting the theme of the website
defaultButton.addEventListener('click',()=>{
    document.documentElement.style.setProperty('--gradientColor1','rgba(201, 130, 0, 0.822)');
    document.documentElement.style.setProperty('--gradientColor2','rgba(228, 186, 96, 0.678)');
    document.documentElement.style.setProperty('--textColor','rgb(51, 31, 4)');
    document.documentElement.style.setProperty('--footerBackground','rgba(158, 103, 0, 0.922)');

});

darkButton.addEventListener('click',()=>{
  document.documentElement.style.setProperty('--gradientColor1','rgba(0, 0, 0, 0.945)');
  document.documentElement.style.setProperty('--gradientColor2','rgba(29, 26, 26, 0.781)');
  document.documentElement.style.setProperty('--textColor','wheat');
  document.documentElement.style.setProperty('--footerBackground','rgba(22, 21, 21, 0.945)');
  localStorage.setItem('--gradientColor1','black');
  
});

// managing the scroll to top button
const scrollTopButton = document.getElementById('scrollToTop');
window.addEventListener('scroll', event=>{
    scrollTopButton.classList.toggle('down',scrollY > 10);    
});

