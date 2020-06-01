// Functin for menu dropdown on mobile
function dropdown(){
    document.getElementById("mobile-nav-links").classList.toggle("fade");
    document.getElementById("mobile-nav-links").classList.toggle("hide");
    document.getElementById("menu-span").classList.toggle("focus");
    document.getElementById("nav-overlay").classList.toggle("nav-overlay");
}

//Logic for automatic slideshow
showSlide(0);
let autoslide =0;
setInterval(function(){
    showSlide(autoslide);
    autoslide++;
    autoslide= autoslide>2? 0 : autoslide;
    
},4000);

//Function for manual slideshow
function currentSlide(n){
    showSlide(n);
}

//Funtion for changing slides
function showSlide(n){
    let slides = document.getElementsByClassName('slide');
    let dots = document.getElementsByClassName('dot');
    n= n>slides.length-1? 0 : n<0? slides.length-1 : n; 
    for(let i=0; i<slides.length; i++){slides[i].style.display = "none";}
    for(let i=0; i<dots.length;i++){dots[i].classList.remove('active');}
    slides[n].style.display='flex';
    dots[n].classList.add('active');

}

//Function for displaying menu details
function displayDetails(dish){
let allDishes = document.getElementsByClassName('meal-item-details');
let hidden = dish.getElementsByClassName('meal-item-details')[0].classList.contains('hide');
for(let i=0; i<allDishes.length;i++){allDishes[i].classList.add('hide');}
hidden? dish.getElementsByClassName('meal-item-details')[0].classList.remove('hide') : dish.getElementsByClassName('meal-item-details')[0].classList.add('hide');
}