if (1 === 1){
  console.log("It's True!");
}

let num = 37; 

if (num % 2 !== 0) {
  console.log('Odd Number');
}

// Performance Review
// 3 = Superstar
// 2 = Meets Expectations
// 1 - Needs Improvement

let rating = 3; 

if (rating === 3) {
  console.log('You are a superstar!');
} else if (rating === 2) {
  console.log('Meets Expectations!');
} else if (rating === 1) {
  console.log('Needs Improvement!');
} else {
  console.log('A valid number for rating was not entered.');
}

let highScore = 1430; 
let userScore = 1600; 

if(userScore >= highScore) {
    console.log(`You have the new high score! ${userScore}`);
    highScore = userScore; 
  } else {
    console.log(`Good Game. Your score of ${userScore} did not beat the 
    high score of ${highScore}`);
  }

/*
let password = 'kittyyyy'; 

if(password.length >= 6){
  if(password.indexOf(' ') === -1) {
    console.log("Valid Password!");
  }
  else {console.log('Password is long enough, but cannot contain spaces');
  }
} 
else {
  console.log('Password must be longer.');
}

let mystery = 5;

if (mystery) {
  console.log("Truthy");
}
else {
  console.log("Falsey")
}

let loggedInUser = null; 

if (loggedInUser) {
  console.log('You are logged in!');
}
else {
  console.log('You are not logged in!');
} */

let password ="chickenGal";

if (password.length >= 8 && password.indexOf(' ') === -1) {
  console.log("Valid Password")
} else {
  console.log('Invalid Password');
}

let number = 3; 

if(number >= 1 && number <= 10) {
console.log("Number is between 1 and 10");
} else {
console.log("Please guess a number between 1 and 10");
}

let age = 78; 

if(age < 6 || age >= 65) {
  console.log('You get in for free');
} else {
  console.log('You must pay!');
}

// We can chain multiple ORs together 

let color = 'violet';
if (color === 'purple' || color === 'lilac' || color === 'violet'){
  console.log('Great Choice!');
}

// let shoppingList = ['cereal', 'cheese', 'ice'];

let lotto = [45,12,2325,34];

let myCollection = [12, 'dog', true, null, NaN];
// some programming languages won't allow different types of data in

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

colors.length //4

colors[0] = 'red'
colors[1] //'orange'
colors[2] //'yellow'
colors[3] //'green'
colors[4] //'undefined'
colors[4] = 'blue';

/* Every item an array has an index indicated by number, and 
 an array has a length property */

 /* If you wanted to get an item stored an array you could also 
 use the length property such as the following: colors[colors.length-1]
 */

 // How do we we re-order our array (playlist), or add items to an array

// strings are immutable while arrays are mutable and can be changed

let shoppingList = ['Cheddar Cheese','2% Milk'];

shoppingList[1] = 'Whole Milk';
shoppingList[2] = 'Ice Cream';

shoppingList[shoppingList.length] = 'Tomatoes';
shoppingList[shoppingList.length] = 'Potatoes';

// When trying to change a value in an existing array, 
// You have to be particular about where you put something
// Not putting this at the beginning and shifting everything over

// Push, Pop, Shift, and Unshift 

let topSongs = [
  'First Time Ever I Saw Your Face', 
  'God Only Knows', 
  'A Day In The Life', 
  'Life On Mars'
 ];

 topSongs.push('Fortunate Son');

 // when using the push function you are mutating or actually changing
 // the value at the end

 topSongs.pop();

 // Applicable to a to-do list, a play-list we wouldn't want 
 // to remove the song
 // push -- pushing something into an array, and pop is popping off the end

let fruits = ['apple', 'banna'];
let veggies = ['asparagus', 'brussel sprouts']; 
let meats = ['steak', 'chicken breast'];

console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));

let allFood = fruits.concat(veggies, meats);
// multiple concatinations 

let ingredients = [
  'water', 
  'corn startch',
  'cheese',
  'flour',
  'brown sugar',
  'shrimp',
  'eel',
  'butter'
];

if(ingredients.includes('flour')) {
  console.log('I am gluten free, I cannot eat that!');
};

ingredients.indexOf('flour') !== -1;

let letters = [ 'T', 'C', 'E', 'P', 'S', 'E', 'R'];

