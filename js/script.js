/*****************************Modal JS Start****************************************/
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
event.target.nodeName ==='BUTTON'?(modal.style.display = "block",form.querySelector('p').innerText=event.target.parentElement.firstElementChild.innerText) : event.target.className ==='order'?  (modal.style.display = "block",form.querySelector('p').innerText=event.target.parentElement.parentElement.firstElementChild.innerText): modal.style.display = "none";
//console.dir(event.target.parentElement.firstElementChild.innerText);
}


//An event listener attached to parent meal container
mealParentContainer.addEventListener('click',showModal);

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
