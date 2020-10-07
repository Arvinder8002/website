//all selectors
const defaultButton = document.getElementById('default');
const darkButton = document.getElementById('dark');
const root = document.documentElement;
const typingContainer = document.querySelector('.typing');
const lines = document.querySelector('.lines');
const line = lines.querySelector('.line');
const background = document.querySelector('.background');
const ul = document.querySelector('header nav ul');
const lis = ul.querySelectorAll('li');
const emailbox = document.querySelector('footer .content form .email input');

//storing the previos theme settings
if(location.reload)
{
  root.style.setProperty('--gradientColor1',localStorage.getItem('--gradientColor1'));
  root.style.setProperty('--gradientColor2',localStorage.getItem('--gradientColor2'));
  root.style.setProperty('--textColor',localStorage.getItem('--textColor'));
  root.style.setProperty('--footerBackground',localStorage.getItem('--footerBackground'));
  document.querySelector('form').reset();
 
 document.documentElement.scrollTop = 0;
}

//setting the theme of the website
defaultButton.addEventListener('click',()=>{
    root.style.setProperty('--gradientColor1','rgba(201, 130, 0, 1)');
    root.style.setProperty('--gradientColor2','rgba(228, 186, 96, 0.678)');
    root.style.setProperty('--textColor','rgb(51, 31, 4)');
    root.style.setProperty('--footerBackground','rgb(158, 103, 0)');

    localStorage.setItem('--gradientColor1','rgba(201, 130, 0, 1)');
    localStorage.setItem('--gradientColor2','rgba(228, 186, 96, 0.678)');
    localStorage.setItem('--textColor','rgb(51, 31, 4)');
    localStorage.setItem('--footerBackground','rgb(158, 103, 0)');
    

});

darkButton.addEventListener('click',()=>{
  root.style.setProperty('--gradientColor1','rgba(0, 0, 0, 1)');
  root.style.setProperty('--gradientColor2','rgba(29, 26, 26, 0.781)');
  root.style.setProperty('--textColor','wheat');
  root.style.setProperty('--footerBackground','rgb(22, 21, 21)');
  root.style.background = '#000';
  
  localStorage.setItem('--gradientColor1','rgba(0, 0, 0, 1)');
  localStorage.setItem('--gradientColor2','rgba(29, 26, 26, 0.781)');
  localStorage.setItem('--textColor','wheat');
  localStorage.setItem('--footerBackground','rgb(22, 21, 21)');  
  
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
  setTimeout(()=>{ setInterval(type,350) },2300);

//setting the responsive navigation
function expand(){
 background.classList.toggle('expand');
 ul.classList.toggle('show');
 this.classList.toggle('fixed');
 line.classList.toggle('rotate');
 
//  if(background.classList.contains('expand')) document.documentElement.style.overflow = 'hidden';
//  else document.documentElement.style.overflow = 'auto';
}

function shrink(){
  background.classList.remove('expand');
  ul.classList.remove('show');
  lines.classList.remove('fixed');
  line.classList.remove('rotate');
}
lines.addEventListener('click',expand);

for(let i = 0; i < (lis.length-1); i++) {
  lis[i].addEventListener('click',shrink);
}

//handling email text box 
emailbox.addEventListener('input',()=>{
  if(emailbox.value !== ''){
    emailbox.classList.add('filled');
  }
  else{
    emailbox.classList.remove('filled');
  }
})
//fixing theme 
const theme = document.querySelector('#theme');
theme.addEventListener('click',()=>{
  theme.classList.toggle('show-dropdown');
})

//decreasing text size on scroll variables
const headingH3 = document.querySelectorAll('.heading h3');
const maxSize = 65;
const minSize = 40;
const paraMin = 22;
const paraMax = 32.5;
let workHeadingText = maxSize;
let aboutHeadingText = maxSize;
let servicesHeadingText = maxSize;
let contactHeadingText = maxSize;
let testimonialHeadingText = maxSize;
let servicesParaText = paraMax;
let contactParaText = paraMin;
let prevScrollY;

//scroll animations on all elements
function appear(){
   const screenHeight = window.innerHeight / 1.33;
    
   const workImages = document.querySelectorAll('.works__img');
   workImages.forEach(workImg=>{
    if(workImg.getBoundingClientRect().top < screenHeight )
    {
    workImg.classList.add('scroll-appear');
    }
  })
   
  const workTexts = document.querySelectorAll('.works__text');
  workTexts.forEach(workText=>{
    workText.style.opacity = 0;
    if(workText.getBoundingClientRect().top < screenHeight )
    {
    workText.classList.add('scroll-appear');
    }
  })

  const aboutImg = document.querySelector('#about .imgbox');
  aboutImg.style.opacity = 0;
  const aboutText = document.querySelector('#about .txtbox');
  aboutText.style.opacity = 0;

  if( aboutImg.getBoundingClientRect().top < screenHeight)
  {
    aboutImg.classList.add('scroll-appear');
  }

  if( aboutText.getBoundingClientRect().top < screenHeight)
  {
    aboutText.classList.add('scroll-appear');
  }
  
  const serviceCards = document.querySelectorAll('#services .card');
  serviceCards.forEach(serviceCard=>{
    serviceCard.style.opacity = 0;
    if(serviceCard.getBoundingClientRect().top < screenHeight )
    {
      serviceCard.classList.add('scroll-appear');
    }
  })
  
  const testimonialCards = document.querySelectorAll('#testimonial .testimonial-card');
  testimonialCards.forEach(testimonialCard=>{
    testimonialCard.style.opacity = 0;
    if(testimonialCard.getBoundingClientRect().top < screenHeight )
    {
      testimonialCard.classList.add('scroll-appear');
    }
  })

  const form = document.querySelector('#contact .content .form');
  form.style.opacity = 0;
  const others = document.querySelector('#contact .others');
  others.style.opacity = 0;
  if(form.getBoundingClientRect().top < screenHeight)
  {
    form.classList.add('slide-right');
  }
  if(others.getBoundingClientRect().top < screenHeight)
  {
    others.classList.add('slide-left');
  }

  //decreasing text size on scroll
  const workHeading = document.getElementById('work-heading');
  if(workHeading.getBoundingClientRect().top < screenHeight/2){
    workHeading.style.fontSize = workHeadingText+'px';
    if(workHeadingText > minSize)  workHeadingText -= (window.scrollY - prevScrollY)/9;
  }
  else{
    if(workHeadingText < maxSize)  workHeadingText -=  (window.scrollY - prevScrollY)/9;
    workHeading.style.fontSize = workHeadingText+'px';
  }

  const aboutHeading = document.getElementById('about-heading');
  if(aboutHeading.getBoundingClientRect().top < screenHeight/2){
   aboutHeading.style.fontSize = aboutHeadingText+'px';
    if(aboutHeadingText > minSize) aboutHeadingText -=  (window.scrollY - prevScrollY)/9;
  }
  else{
    if(aboutHeadingText < maxSize)  aboutHeadingText -=  (window.scrollY - prevScrollY)/9;
    aboutHeading.style.fontSize = aboutHeadingText+'px';
  }

  const servicesHeading = document.getElementById('services-heading');
  if(servicesHeading.getBoundingClientRect().top < screenHeight/2){
    servicesHeading.style.fontSize = servicesHeadingText+'px';
    if(servicesHeadingText > minSize) servicesHeadingText -=  (window.scrollY - prevScrollY)/9;
  }
  else{
    if(servicesHeadingText < maxSize)  servicesHeadingText -=  (window.scrollY - prevScrollY)/9;
    servicesHeading.style.fontSize = servicesHeadingText+'px';
  }
    
  const testimonialHeading = document.getElementById('testimonial-heading');
  if(testimonialHeading.getBoundingClientRect().top < screenHeight/2){
    testimonialHeading.style.fontSize = testimonialHeadingText+'px';
    if(testimonialHeadingText > minSize) testimonialHeadingText -=  (window.scrollY - prevScrollY)/9;
  }
  else{
    if(testimonialHeadingText < maxSize)  testimonialHeadingText -=  (window.scrollY - prevScrollY)/9;
    testimonialHeading.style.fontSize = testimonialHeadingText+'px';
  }

  const contactHeading = document.getElementById('contact-heading');
  if(contactHeading.getBoundingClientRect().top < screenHeight/2){
    contactHeading.style.fontSize = contactHeadingText+'px';
    if(contactHeadingText > minSize) contactHeadingText -=  (window.scrollY - prevScrollY)/9;
  }
  else{
    if(contactHeadingText < maxSize)  contactHeadingText -=  (window.scrollY - prevScrollY)/9;
    contactHeading.style.fontSize = contactHeadingText+'px';
  }

  const servicesPara  = document.querySelector('#services-para');
  if(servicesPara.getBoundingClientRect().top < screenHeight/1.5){
    servicesPara.style.fontSize = servicesParaText+'px';
    if(servicesParaText > paraMin) servicesParaText -=  (window.scrollY - prevScrollY)/9;
  }
  else{
    if(servicesParaText < paraMax) servicesParaText -=  (window.scrollY - prevScrollY)/9;
    servicesPara.style.fontSize = servicesParaText+'px';
  }

  const contactPara  = document.querySelector('#contact-para');
  if(contactPara.getBoundingClientRect().top < screenHeight/1.5){
    contactPara.style.fontSize = contactParaText+'px';
    if(contactParaText > paraMin) contactParaText -= (window.scrollY - prevScrollY)/9;
  }
  else{
    if(contactParaText < paraMax) contactParaText += 0.6;
    contactPara.style.fontSize = contactParaText+'px';
  }

  prevScrollY = window.scrollY;
}
window.addEventListener('scroll',appear);

