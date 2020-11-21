const form = document.querySelector('#signup-form');

const creditCardInput = document.querySelector('#cc');
const termsCheckBox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');


form.addEventListener('submit', function(e){
  e.preventDefault(); 
  alert("SUBMITTED THE FORM!");
  console.log('cc', creditCardInput.value); 
  console.log('terms', termsCheckBox.checked);  
  console.log('veggieSelect', veggieSelect.value); 
  //send form data to db
  //append something to page using form data
  
  // prevent from going to a secondary page 
  // or default submission behavior
  // with preventDefault(); we can have just one event 
  // listener and extract our data from here
  // instead of using multipe event listener
  // to extract data we need to be able to select
  // individual elements
});

const formData = {};
for(let input of [creditCardInput, termsCheckBox, veggieSelect]) {
  input.addEventListener('input', ({target}) => {
    const { name, type, value, checked } = target;
    formData[name] = type === 'checkbox' ? checked : value;
    console.log(formData);
  });
} // didn't have to reference manually 
  // there is no value to check box either it is off 
  // or on but we can check if the type input 
  // is a checkbox

  // input.addEventListener('input', ....) 
  // will always listen for a change
  // for any new characters
  // and input.addEventListener('change', ...)
  // is a bit different and works blur on input 
  // and if mouse is not focused on the text field
  // for instance

//creditCardInput.addEventListener('input', (e) => {
//  console.log('CC CHANGED!', e);
//  formData['cc'] = e.target.value;
// }); // input shows change right away 

//veggieSelect.addEventListener('input', (e) => {
// console.log('VEGGIE!', e);
// formData['veggie'] = e.target.value;
//}); // input shows change right away 

//termsCheckBox.addEventListener('input', (e) => {
// console.log('CHECKBOX', e);
// formData['agreeToTerms'] = e.target.checked;
// });

// we can create a datastructure that holds the data
// or keep in sync what is happening in each input

/* {
  cc: '234235245345'
  terms: true, 
  veggie: 'carrot'
} */

// as soon as one of these changes it will change
// immediately without a submission