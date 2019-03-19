/*************************Loading menu data*******************************/
let MenuDatabase = firebase.database();
const menuStorageService = firebase.storage().ref();
let menuData;
let getMenu = () => {
  let fragment = document.createDocumentFragment();
  MenuDatabase.ref('Menu').once('value').then(function(snapshot) {
   menuData = snapshot.val();
  console.log(snapshot.val());
  for (let key in menuData){
    let foodItem = document.createElement("div");
    foodItem.classList.add("menuDiv");
    foodItem.id=key;
    foodItem.innerHTML = '<div class="foodImg"><img alt="'+ menuData[key].ImageName + '" src="' + menuData[key].ImageUrl+'"></div><div class="foodDetails"><span>' + menuData[key].Name + '</span><button class="edit">Edit</button><button class="delete" >Delete</button></div>'  ;
    fragment.appendChild(foodItem);
  }
  document.querySelector('.foodItems').appendChild(fragment);
});

}
window.addEventListener('load',getMenu);
/*************************Loading menu  End*******************************/


/*************************Sorting By DAys OF week*******************************/
let sortByDays = ()=>{
  if(document.getElementById('sortDay').value!='Day of Week')
  {
  let fragment = document.createDocumentFragment();
  for (let key in menuData){
    if(menuData[key].Day===document.getElementById('sortDay').value){
    let sortedDay = document.createElement("div");
    sortedDay.classList.add("menuDiv");
    sortedDay.id=key;
    sortedDay.innerHTML = '<div class="foodImg"><img alt="'+ menuData[key].ImageName + '" src="' + menuData[key].ImageUrl+'"></div><div class="foodDetails"><span>' + menuData[key].Name + '</span><button class="edit">Edit</button><button class="delete" >Delete</button></div>'  ;
    fragment.appendChild(sortedDay);
  }
}
  while (document.querySelector('.foodItems').firstChild)  document.querySelector('.foodItems').removeChild(document.querySelector('.foodItems').firstChild);
  document.querySelector('.foodItems').appendChild(fragment);
  console.log(document.getElementById('sortDay').value);
  }
  else{
    let fragment = document.createDocumentFragment();
    for (let key in menuData){
      let sortedDay = document.createElement("div");
      sortedDay.classList.add("menuDiv");
      sortedDay.id=key;
      sortedDay.innerHTML = '<div class="foodImg"><img alt="'+ menuData[key].ImageName + '" src="' + menuData[key].ImageUrl+'"></div><div class="foodDetails"><span>' + menuData[key].Name + '</span><button class="edit">Edit</button><button class="delete" >Delete</button></div>'  ;
      fragment.appendChild(sortedDay);
  }
  while (document.querySelector('.foodItems').firstChild)  document.querySelector('.foodItems').removeChild(document.querySelector('.foodItems').firstChild);
  document.querySelector('.foodItems').appendChild(fragment);
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
  .catch(()=>{});
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
//Uploading new image
let newImageUploadMethod= (e) => {
  newFoodImage = e.target.files[0];
  document.getElementById('editImage').src = URL.createObjectURL(e.target.files[0]);
}
document.getElementById('newImageUpload').addEventListener('change', newImageUploadMethod);

let updatingEditedMenu = (e) => {
  e.preventDefault();
  if(newFoodImage){
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
}
else{
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
