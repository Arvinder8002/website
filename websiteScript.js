//all selectors
const defaultButton = document.getElementById('default');
const darkButton = document.getElementById('dark');
const header = document.getElementById('home');
const root = document.documentElement;
const typingContainer = document.querySelector('.typing');
const lines = document.querySelector('.lines');
const line = lines.querySelector('.line');
const background = document.querySelector('.background');
const ul = document.querySelector('header .nav ul');

//storing the previous theme settings
if(location.reload)
{

 
}

//setting the theme of the website
defaultButton.addEventListener('click',()=>{
    root.style.setProperty('--gradientColor1','rgba(201, 130, 0, 0.822)');
    root.style.setProperty('--gradientColor2','rgba(228, 186, 96, 0.678)');
    root.style.setProperty('--textColor','rgb(51, 31, 4)');
    root.style.setProperty('--footerBackground','rgba(158, 103, 0, 0.922)');

});

darkButton.addEventListener('click',()=>{
  root.style.setProperty('--gradientColor1','rgba(0, 0, 0, 0.945)');
  root.style.setProperty('--gradientColor2','rgba(29, 26, 26, 0.781)');
  root.style.setProperty('--textColor','wheat');
  root.style.setProperty('--footerBackground','rgba(22, 21, 21, 0.945)');
  localStorage.setItem('--gradientColor1','rgba(0, 0, 0, 0.945)');
  
});

// managing the scroll to top button
const scrollTopButton = document.getElementById('scrollToTop');
window.addEventListener('scroll', event=>{
    scrollTopButton.classList.toggle('down',scrollY > 10);    
});

//typing effect in the header section
const texts = ['developer','designer','programmer','photographer'];
let index = 0;
let count = 0;
let currentText = '';
let currentLetter = '';

const type = ()=>{
  if(count === texts.length) count = 0;
  
  currentText = texts[count];
  currentLetter = currentText.slice(0,index++);
  typingContainer.innerText = currentLetter;

  if(currentText.length === currentLetter.length)
  {
    index = 0;
    count++;
  }  
}
setInterval(type,400);

//setting the responsive navigation
function expand(){
 background.classList.toggle('expand');
 ul.classList.toggle('show');
 this.classList.toggle('fixed');
 line.classList.toggle('rotate');
 if(background.classList.contains('expand')) document.documentElement.style.overflow = 'hidden';
 else document.documentElement.style.overflow = 'auto';
}

lines.addEventListener('click',expand);
