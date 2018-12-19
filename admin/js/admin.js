
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
