/*****************************Modal JS Start****************************************/
let MenuDatabase = firebase.database();
const menuStorageService = firebase.storage().ref();
let menuData;
//Get food foodItems
let getMenu = () => {
  let fragment = document.createDocumentFragment();
  let snacksfragment = document.createDocumentFragment();
  let specialsfragment = document.createDocumentFragment();
  MenuDatabase.ref('Menu').once('value').then(function(snapshot) {
   menuData = snapshot.val();
  console.log(snapshot.val());
  for (let key in menuData){
    if(menuData[key].Day===Days[d.getDay()]){
      if(menuData[key].Category==='Main Course'){
    let foodItem = document.createElement("div");
    foodItem.classList.add("meal-container");
    foodItem.id=key;
    foodItem.innerHTML =  `<div class='meal-img'><img src=${menuData[key].ImageUrl} alt=${menuData[key].ImageName}></div><div class=meal-description><span>${menuData[key].Name}</span><button><span class='order'>Order Now</span></button></div>` ;
    fragment.appendChild(foodItem);
  }
  if(menuData[key].Category==='Snack'){
let foodItem = document.createElement("div");
foodItem.classList.add("meal-container");
foodItem.id=key;
foodItem.innerHTML =  `<div class='meal-img'><img src=${menuData[key].ImageUrl} alt=${menuData[key].ImageName}></div><div class=meal-description><span>${menuData[key].Name}</span><button><span class='order'>Order Now</span></button></div>` ;
snacksfragment.appendChild(foodItem);
}
if(menuData[key].Category==='Specials'){
let foodItem = document.createElement("div");
foodItem.classList.add("meal-container");
foodItem.id=key;
foodItem.innerHTML =  `<div class='meal-img'><img src=${menuData[key].ImageUrl} alt=${menuData[key].ImageName}></div><div class=meal-description><span>${menuData[key].Name}</span><button><span class='order'>Order Now</span></button></div>` ;
specialsfragment.appendChild(foodItem);
}
  }
  }
  document.getElementById('meal-parent-container').appendChild(fragment);
  document.getElementById('snacks').appendChild(snacksfragment);
  document.getElementById('specialOffers').appendChild(specialsfragment);
});
}


window.addEventListener('load',getMenu);
// Get the modal
let modal = document.getElementById('myModal');
//Get the parent meal container
let mealParentContainer = document.getElementById('meal-parent-container');
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
//Get the form in the Modal
let form = document.getElementById('order-form');

//The function that shows the modal
/*
let showModal = (event) => {
event.target.nodeName ==='BUTTON' || event.target.className ==='order'?  modal.style.display = "block": modal.style.display = "none";
console.dir(event.target.parentElement.firstElementChild.innerText);
}
*/
let showModal = (event) => {
event.target.nodeName ==='BUTTON'?(modal.style.display = "block",form.querySelector('p').innerText=event.target.parentElement.firstElementChild.innerText,form.querySelector('span').innerText='hi') : event.target.className ==='order'?  (modal.style.display = "block",form.querySelector('p').innerText=event.target.parentElement.parentElement.firstElementChild.innerText,form.querySelector('span').innerText=event.target): modal.style.display = "none";
//console.dir(event.target.parentElement.firstElementChild.innerText);
}


//An event listener attached to parent meal container
mealParentContainer.addEventListener('click',showModal);
snacks.addEventListener('click',showModal);
specialOffers.addEventListener('click',showModal);


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/************************Modal JS End************************************************/

/***************************************Side bar Nav*******************************/
//Getting the menu bar
let menuBar = document.getElementById('menu-bar');
//Getting sidebar
let sideBar = document.getElementById('mySidenav');
//Get sidebar close character
let sideClose = document.getElementById('sideclosebtn')
//Function for showing side bar
let showSideBar =() => sideBar.style.width = "250px";
//Function to close side bar
let closeSideBar =() => sideBar.style.width = "0%";
//Event listener for side bars
menuBar.addEventListener('click',showSideBar);
sideClose.addEventListener('click',closeSideBar);

/*******************************Side bar Nav End*************************************/
/******************************Getting Time ********************************/
let d=new Date();
let Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById('getTime').innerText= Days[d.getDay()]+', '+d.getDate()+' '+Months[d.getMonth()]+' '+d.getFullYear();
