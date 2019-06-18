/*************************Loading menu data*******************************/
let MenuDatabase = firebase.database();
const menuStorageService = firebase.storage().ref();
let menuData;
let getMenu = () => {
  let fragment = document.createDocumentFragment();
  let snackFragment = document.createDocumentFragment();
  let specialsFragment = document.createDocumentFragment();
  MenuDatabase.ref('Menu').once('value').then(function(snapshot) {
   menuData = snapshot.val();
  console.log(snapshot.val());
  for (let key in menuData){
    if(menuData[key].Category==='Main Course'){
    let foodItem = document.createElement("div");
    foodItem.classList.add("menuDiv");
    foodItem.id=key;
    foodItem.innerHTML = '<div class="foodImg"><img alt="'+ menuData[key].ImageName + '" src="' + menuData[key].ImageUrl+'"></div><div class="foodDetails"><span>' + menuData[key].Name + '</span><button class="edit">Edit</button><button class="delete" >Delete</button></div>'  ;
    fragment.appendChild(foodItem);
  }
  else if (menuData[key].Category==='Snack') {
    let foodItem = document.createElement("div");
    foodItem.classList.add("menuDiv");
    foodItem.id=key;
    foodItem.innerHTML = '<div class="foodImg"><img alt="'+ menuData[key].ImageName + '" src="' + menuData[key].ImageUrl+'"></div><div class="foodDetails"><span>' + menuData[key].Name + '</span><button class="edit">Edit</button><button class="delete" >Delete</button></div>'  ;
    snackFragment.appendChild(foodItem);
  }

  else if (menuData[key].Category==='Specials') {
    let foodItem = document.createElement("div");
    foodItem.classList.add("menuDiv");
    foodItem.id=key;
    foodItem.innerHTML = '<div class="foodImg"><img alt="'+ menuData[key].ImageName + '" src="' + menuData[key].ImageUrl+'"></div><div class="foodDetails"><span>' + menuData[key].Name + '</span><button class="edit">Edit</button><button class="delete" >Delete</button></div>'  ;
    specialsFragment.appendChild(foodItem);
  }
  }
  document.querySelector('.foodItems').appendChild(fragment);
  document.querySelector('.snacks').appendChild(snackFragment);
  document.querySelector('.specials').appendChild(specialsFragment);
});

}
window.addEventListener('load',getMenu);
/*************************Loading menu  End*******************************/


/*************************Sorting By DAys OF week*******************************/
let sortByDays = ()=>{
  let fragment = document.createDocumentFragment();
  let snackFragment = document.createDocumentFragment();
  let specialsFragment = document.createDocumentFragment();
  let removeChildren = (id)=>{
   while (document.querySelector(id).childNodes.length > 1)  document.querySelector(id).removeChild(document.querySelector(id).lastChild);
 }
if(document.getElementById('sortDay').value != 'Day of Week'){

  for (let key in menuData){
    if(menuData[key].Category==='Main Course' && menuData[key].Day===document.getElementById('sortDay').value){
    let foodItem = document.createElement("div");
    foodItem.classList.add("menuDiv");
    foodItem.id=key;
    foodItem.innerHTML = '<div class="foodImg"><img alt="'+ menuData[key].ImageName + '" src="' + menuData[key].ImageUrl+'"></div><div class="foodDetails"><span>' + menuData[key].Name + '</span><button class="edit">Edit</button><button class="delete" >Delete</button></div>'  ;
    fragment.appendChild(foodItem);
  }
  else if (menuData[key].Category==='Snack' && menuData[key].Day===document.getElementById('sortDay').value) {
    let foodItem = document.createElement("div");
    foodItem.classList.add("menuDiv");
    foodItem.id=key;
    foodItem.innerHTML = '<div class="foodImg"><img alt="'+ menuData[key].ImageName + '" src="' + menuData[key].ImageUrl+'"></div><div class="foodDetails"><span>' + menuData[key].Name + '</span><button class="edit">Edit</button><button class="delete" >Delete</button></div>'  ;
    snackFragment.appendChild(foodItem);
  }

  else if (menuData[key].Category==='Specials' && menuData[key].Day===document.getElementById('sortDay').value) {
    let foodItem = document.createElement("div");
    foodItem.classList.add("menuDiv");
    foodItem.id=key;
    foodItem.innerHTML = '<div class="foodImg"><img alt="'+ menuData[key].ImageName + '" src="' + menuData[key].ImageUrl+'"></div><div class="foodDetails"><span>' + menuData[key].Name + '</span><button class="edit">Edit</button><button class="delete" >Delete</button></div>'  ;
    specialsFragment.appendChild(foodItem);
  }
  }
  removeChildren('.foodItems');
  removeChildren('.snacks');
  removeChildren('.specials');
  document.querySelector('.foodItems').appendChild(fragment);
  document.querySelector('.snacks').appendChild(snackFragment);
  document.querySelector('.specials').appendChild(specialsFragment);

}

else {

  let fragment = document.createDocumentFragment();
  let snackFragment = document.createDocumentFragment();
  let specialsFragment = document.createDocumentFragment();
  for (let key in menuData){
    if(menuData[key].Category==='Main Course'){
    let foodItem = document.createElement("div");
    foodItem.classList.add("menuDiv");
    foodItem.id=key;
    foodItem.innerHTML = '<div class="foodImg"><img alt="'+ menuData[key].ImageName + '" src="' + menuData[key].ImageUrl+'"></div><div class="foodDetails"><span>' + menuData[key].Name + '</span><button class="edit">Edit</button><button class="delete" >Delete</button></div>'  ;
    fragment.appendChild(foodItem);
  }
  else if (menuData[key].Category==='Snack') {
    let foodItem = document.createElement("div");
    foodItem.classList.add("menuDiv");
    foodItem.id=key;
    foodItem.innerHTML = '<div class="foodImg"><img alt="'+ menuData[key].ImageName + '" src="' + menuData[key].ImageUrl+'"></div><div class="foodDetails"><span>' + menuData[key].Name + '</span><button class="edit">Edit</button><button class="delete" >Delete</button></div>'  ;
    snackFragment.appendChild(foodItem);
  }

  else if (menuData[key].Category==='Specials') {
    let foodItem = document.createElement("div");
    foodItem.classList.add("menuDiv");
    foodItem.id=key;
    foodItem.innerHTML = '<div class="foodImg"><img alt="'+ menuData[key].ImageName + '" src="' + menuData[key].ImageUrl+'"></div><div class="foodDetails"><span>' + menuData[key].Name + '</span><button class="edit">Edit</button><button class="delete" >Delete</button></div>'  ;
    specialsFragment.appendChild(foodItem);
  }
  }
  removeChildren('.foodItems');
  removeChildren('.snacks');
  removeChildren('.specials');
  document.querySelector('.foodItems').appendChild(fragment);
  document.querySelector('.snacks').appendChild(snackFragment);
  document.querySelector('.specials').appendChild(specialsFragment);
}

}

/*************************Sorting By DAys OF week End*******************************/

/********Deleting And Editing Food Item***********************************************/
let editedMenuKey;
let manageFood = (event) =>{
  let deleteFood =()=>{
  if(confirm('Do you want to delete this food?')){
    let image =event.target.parentElement.previousSibling.firstChild.alt;
    let dataKey = event.target.parentElement.parentElement.id;
    menuStorageService.child('images/'+image).delete()
  .then(()=>{
    MenuDatabase.ref('Menu/'+dataKey).remove();
    console.log('deleted');
    location.reload();
  })
  .catch(()=>{
    //if there's a network error this block caters for it
    MenuDatabase.ref('Menu/'+dataKey).remove();
    console.log('deleted');
    location.reload()
  });
  }
  }

  let editFood=()=>{

    document.getElementById('editFood').classList.toggle('hide');
    window.scrollBy(0, document.body.scrollHeight);
    let dataKey = event.target.parentElement.parentElement.id;
    editedMenuKey = dataKey;
    let editFoodDetails=menuData[dataKey];
    document.getElementById('Editname').value=editFoodDetails.Name;
    document.getElementById('Editcategory').value=editFoodDetails.Category;
    document.getElementById('Editday').value=editFoodDetails.Day;
    document.getElementById('Editprice').value=editFoodDetails.Cost;
    document.getElementById('editImage').src=editFoodDetails.ImageUrl;
    console.log(editFoodDetails);
  }
console.dir(event.target);
event.target.nodeName==='BUTTON' && event.target.innerText==='Delete'? deleteFood() : event.target.nodeName==='BUTTON' && event.target.innerText==='Edit'? editFood(): alert('no');
///console.log(event.target.parentElement.previousSibling.firstChild.alt);
//console.log(event.target.parentElement.parentElement.id);

}
let newFoodImage;

document.querySelector('.foodItems').addEventListener('click',manageFood);
document.querySelector('.snacks').addEventListener('click',manageFood);
document.querySelector('.specials').addEventListener('click',manageFood);
//Uploading new image
let newImageUploadMethod= (e) => {
//  newFoodImage = e.target.files[0];
  document.getElementById('editImage').src = URL.createObjectURL(e.target.files[0]);
  document.getElementById('editImage').onload=()=>{
    if(document.getElementById('editImage').naturalHeight >=document.getElementById('editImage').naturalWidth ){
       alert('Image too large. \nPlease select a different image');
       document.getElementById('editImage').src='';
     }
    else newFoodImage = e.target.files[0];
  }

}
document.getElementById('newImageUpload').addEventListener('change', newImageUploadMethod);

let updatingEditedMenu = (e) => {
  e.preventDefault();
  if(document.getElementById('Editname').value===''){
    alert('Please input the name of the food');
     return false;
  }
  else if (document.getElementById('Editday').value==='Day Available') {
    alert('Please select a day');
    return false;
  }
  else if (document.getElementById('Editprice').value<=0) {
    alert('Please input the price of the food');
    return false;
  }
  else if (document.getElementById('editImage').src==='') {
    alert('Please upload an image');
      return false;
  }
  else if(document.getElementById('editImage').src!='' && newFoodImage){
  const uploadTask = storageRef.child(`images/${newFoodImage.name}`).put(newFoodImage); //create a child directory called images, and place the file inside this directory
  storageRef.child('images/'+menuData[editedMenuKey].ImageName).delete();
  uploadTask.on('state_changed', (snapshot) => {
  // Observe state change events such as progress, pause, and resume
  }, (error) => {
    // Handle unsuccessful uploads
    alert('Image Could Not Be Uploaded.\nPlease try again');
    console.log(error);
  }, () => {
     storageRef.child(`images/${newFoodImage.name}`).getDownloadURL().then((url) => {
       database.ref('Menu/'+editedMenuKey).update({
         Name: document.getElementById('Editname').value,
         Day: document.getElementById('Editday').value,
         Cost:document.getElementById('Editprice').value,
         ImageUrl:url,
         ImageName:newFoodImage.name,
         Category:document.getElementById('Editcategory').value
       }).then(()=>{
        location.reload();
      });
     });
  });

  return true;
}
else if (document.getElementById('editImage').src!='' && !newFoodImage){
  database.ref('Menu/'+editedMenuKey).update({
    Name: document.getElementById('Editname').value,
    Day: document.getElementById('Editday').value,
    Cost:document.getElementById('Editprice').value,
  //  ImageUrl:url,
  //  ImageName:newFoodImage.name,
    Category:document.getElementById('Editcategory').value
  }).then(()=>location.reload());
}
}
document.getElementById('EditsaveButton').addEventListener('click',updatingEditedMenu );
