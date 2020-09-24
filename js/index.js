function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);
    
console.log("Your index.js file is loaded correctly!");

$(".toggle").click(function(){
 $(this).find(".toggleContainer").toggleClass("active");
 $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
  });
// Used to toggle the menu on small screens when clicking on the menu button
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');



burger.addEventListener('click', () => {  
//Toggle Nav
    nav.classList.toggle('nav-active');

//Animate Links
navLinks.forEach((link, index) => {
    if (link.style,animation) {
        link.style,animation = '';
    } else {
     link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
});
   //Burger Animation
   burger.classList.toggle('toggle');

});


}
navSlide();