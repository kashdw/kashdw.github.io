window.addEventListener('scroll', function(){
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>0);
    
})

function toggleMenu(){
    let menuToggle = document.querySelector('.toggle');
    menuToggle.classList.toggle('active');
    
}