//FIrebase Databae Reference
let database = firebase.database();
const storageService = firebase.storage();
const storageRef = storageService.ref();
/***************************************Side bar Nav*******************************/
//Getting the menu bar
let menuBar = document.getElementById('menu-bar');
//Getting sidebar
let sideBar = document.getElementById('mySidenav');
//Get sidebar close character
let sideClose = document.getElementById('sideclosebtn');
//Function for showing side bar
let showSideBar =() => sideBar.style.width = "250px";
//Function to close side bar
let closeSideBar =() => sideBar.style.width = "0%";
//Event listener for side bars
menuBar.addEventListener('click',showSideBar);
sideClose.addEventListener('click',closeSideBar);

/*******************************Side bar Nav End*************************************/

/*******Menu Page Script**************/
/****************************REFRESH********************************/
let refresh = () => location.reload();
/****************************REFRESH END********************************/

/************Main Add, Cancel Done ***************************/
let toggleForm = (e) => {
e.preventDefault();
document.getElementById('addControl').classList.toggle('hide');
window.scrollBy(0, document.body.scrollHeight);
}
//Toggle and Refresh
let toggleAndRefresh = (e) => {
e.preventDefault();
document.getElementById('addControl').classList.toggle('hide');
location.reload();
}
//Toggle edit form
let toggleEditForm = (e) => {
e.preventDefault();
document.getElementById('editFood').classList.toggle('hide');
window.scrollBy(0, document.body.scrollHeight);
}
document.getElementById('toggleForm').addEventListener('click', toggleForm);
document.getElementById('cancelButton').addEventListener('click', toggleForm);
//EditcancelButton toggles edit form
document.getElementById('EditcancelButton').addEventListener('click', toggleEditForm);
document.getElementById('doneButton').addEventListener('click', toggleAndRefresh);
/************Main Add, Cancel Done End ***************************/

/*************************Upload of Image and food details **********************************/
let foodImage;

let handleFileUploadChange = (e) => {
  //foodImage = e.target.files[0];
  document.getElementById('Image-of-selected-food').src = URL.createObjectURL(e.target.files[0]);
  document.getElementById('Image-of-selected-food').onload=()=>{
    if(document.getElementById('Image-of-selected-food').naturalHeight >=document.getElementById('Image-of-selected-food').naturalWidth ){
       alert('Image too large. \nPlease select a different image');
       document.getElementById('Image-of-selected-food').src='';
     }
    else foodImage = e.target.files[0];
  }
  console.log(foodImage);
}
/*
let validateForm = (e) => {
  e.preventDefault();
  if(!foodImage) alert('Please upload an image');
  else if (document.getElementById('name').value ==='') alert('Please input the name of the food');
  else if (document.getElementById('day').value ==='Day Available') alert('Please select a day');
  else if (document.getElementById('price').value<=0) alert('Please input the price of the food');
}
*/

let handleFileUploadSubmit = (e) => {
  e.preventDefault();
  if(!foodImage)
  { alert('Please upload an image');
    return false;
}
  else if (document.getElementById('name').value ==='')
   {alert('Please input the name of the food');
    return false;
  }
  else if (document.getElementById('day').value ==='Day Available'){
    alert('Please select a day');
    return false;
  }
  else if (document.getElementById('price').value<=0) {
    alert('Please input the price of the food');
    return false;}
    else{
  const uploadTask = storageRef.child(`images/${foodImage.name}`).put(foodImage); //create a child directory called images, and place the file inside this directory

  uploadTask.on('state_changed', (snapshot) => {
  // Observe state change events such as progress, pause, and resume
  }, (error) => {
    // Handle unsuccessful uploads
    alert('Image Could Not Be Uploaded.\nPlease try again');
    console.log(error);
  }, () => {
     storageRef.child(`images/${foodImage.name}`).getDownloadURL().then((url) => {
       database.ref('Menu').push({
         Name: document.getElementById('name').value,
         Day: document.getElementById('day').value,
         Cost:document.getElementById('price').value,
         ImageUrl:url,
         ImageName:foodImage.name,
         Category:document.getElementById('category').value
       });
       document.getElementById('addControl').reset();
       document.getElementById('Image-of-selected-food').src=''
     });
      alert('Food was successfulyy added to menu.');
     console.log('success');
  });

}
}


document.getElementById('uploadImage').addEventListener('change', handleFileUploadChange);
//document.getElementById('addButton').addEventListener('click', handleFileUploadSubmit);
document.getElementById('addButton').addEventListener('click', handleFileUploadSubmit);
/*************************Upload of Image and food details  End**********************************/
