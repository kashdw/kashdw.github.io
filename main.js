window.addEventListener('scroll', function(){
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>0);
    
})

function toggleMenu(){
    let menuToggle = document.querySelector('.toggle');
    let menuMove = document.querySelector('.hamburger-menu');
    menuToggle.classList.toggle('active');
    menuMove.classList.toggle('active');
}

/* typewriter effect*/
var quoteArray = ["Hi, I'm Kashvi Dwarka"];
var textPosition = 0; 
var speed = 110;

function typewriter() {
    document.querySelector(".name-with-effect").innerHTML = quoteArray[0].substring(0, textPosition) + '<span>|</span>'; /* or \u25AE */
  
    if(textPosition++ != quoteArray[0].length)
      setTimeout(typewriter, speed);
  }
  
  window.addEventListener("load", typewriter);
 