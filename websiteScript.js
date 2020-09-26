// managing the scroll to top button
const scrollTopButton = document.getElementById('scrollToTop');
window.addEventListener('scroll', event=>{
    scrollTopButton.classList.toggle('down',scrollY > 10);
    console.log();
    
})