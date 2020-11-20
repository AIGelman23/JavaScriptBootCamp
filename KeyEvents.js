const input = document.querySelector('#username');

input.addEventListener('keydown', function(e){
  console.log('KEY DOWN!');
});

input.addEventListener('keyup', function(e){
  console.log('KEY UP!');
});

input.addEventListener('keypress', function(e){
  console.log('KEY PRESS!');
});

// games you wouldn't want to use
// key press to complete this objective
// if you want to know when something
// is changing in the input you could
// use key press 

// when hitting RETURN it counts as a key press
// if typing that it s a key press
// delete is not a key press

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e){
 if(e.key === 'Enter'){
   if(!this.value) return;
   //add a new item
    const newItemText = this.value;
    const newItem = document.createElement('li');
    newItem.innerText = newItemText;
    itemsUL.appendChild(newItem);
    this.value = '';
 }
});

// listen to a key and do something 
// with a function 