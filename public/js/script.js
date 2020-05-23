function dropdown(){
    document.getElementById("mobile-nav-links").classList.toggle("hide");
    document.getElementById("menu-span").classList.toggle("focus");
    document.getElementById("nav-overlay").classList.toggle("nav-overlay");
}

showSlide(0);
let autoslide =0;
// setInterval(function(){
//     showSlide(autoslide);
//     autoslide++;
//     autoslide= autoslide>2? 0 : autoslide;
    
// },3500);

function currentSlide(n){
    showSlide(n);
}

function showSlide(n){
    let slides = document.getElementsByClassName('slide');
    let dots = document.getElementsByClassName('dot');
    n= n>slides.length-1? 0 : n<0? slides.length-1 : n; 
    for(let i=0; i<slides.length; i++){slides[i].style.display = "none";}
    for(let i=0; i<dots.length;i++){dots[i].classList.remove('active');}
    slides[n].style.display='flex';
    dots[n].classList.add('active');

}