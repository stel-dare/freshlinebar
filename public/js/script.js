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
// function displayDetails(dish){
// let allDishes = document.getElementsByClassName('meal-item-details');
// let hidden = dish.getElementsByClassName('meal-item-details')[0].classList.contains('hide');
// for(let i=0; i<allDishes.length;i++){allDishes[i].classList.add('hide');}
// hidden? dish.getElementsByClassName('meal-item-details')[0].classList.remove('hide') : dish.getElementsByClassName('meal-item-details')[0].classList.add('hide');
// }

//Function for displaying menu details through opacity and stoping animation
// function displayDetails(dish){
//     let allDishes = document.getElementsByClassName('meal-item-details');
//     let dishOpacity = dish.getElementsByClassName('meal-item-details')[0].classList.contains('opacity');
//     for(let i=0; i<allDishes.length;i++){allDishes[i].classList.remove('fadeX');}
//     for(let i=0; i<allDishes.length;i++){allDishes[i].classList.add('opacity');}
//     // console.log(dishOpacity); 
//     dishOpacity? dish.getElementsByClassName('meal-item-details')[0].classList.remove('opacity') : dish.getElementsByClassName('meal-item-details')[0].classList.add('opacity');
//     }


//Google maps marker function
function initMap() {
    var uluru = {lat: 4.900686,lng: -1.756553};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});
  }


//   MENU PAGE
// DISPLAY TAGGED MENU FUNCTION
function displayTagMenu(tag){
    let allTags = document.getElementById('menu-tags').getElementsByTagName('span');
    let allTagMenu = document.getElementsByClassName('tag-menu');
    for(let i=0; i<allTags.length;i++){allTags[i].classList.remove('selected-tag');}
    tag.classList.add('selected-tag');
    for(let i=0; i<allTagMenu.length;i++){allTagMenu[i].classList.add('hide');}
    document.getElementsByClassName(tag.id)[0].classList.remove('hide');
    
}

// CART PAGE
// DISPLAY CART LIST / ORDER LIST OF USER FUNCTION

function displayShoppingList(list){
    let allListTabs = document.getElementsByClassName('list-tab');
    let allList = document.getElementsByClassName('list');
    for(let i=0; i<allListTabs.length;i++){allListTabs[i].classList.remove('selected-tab');}
    for(let i=0; i<allList.length;i++){allList[i].classList.add('hide');}
    list.classList.add('selected-tab');
    document.getElementsByClassName(list.id)[0].classList.remove('hide');
}

function displayOrderDetails(order){
    let orderParent  = order.parentElement.parentElement.parentElement;
    orderParent.getElementsByClassName('more-details-button')[0].classList.toggle('hide');
    orderParent.getElementsByClassName('more-details')[0].classList.toggle('hide');

    // console.dir()
}






