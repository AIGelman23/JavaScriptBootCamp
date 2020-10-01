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

letters.reverse() 

// flips the array around

letters.reverse().join('.');

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

let swimmers = animals.slice(0,3);

let mammals = animals.slice(2,4); 

// let reptiles = animals.slice(4, 6);
let reptiles = animals.slice(4);

// we can slice using negative number

let quadruped = animals.slice(-3);

// animals.slice() is a quick way of making a copy of an array
// and doesn't impact the original -- you would have two versions
// why would we make a copy? and why is this different?



// splice(startIdx, deleteCount, itemsToInsert);

// usually you would use .splice() to edit the middle of an array
// you don't have to insert and or delete anything with .splice()


/*
animals.splice(1,0,'octopus')
[]
animals
(7) ["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]

*/

/*
animals.splice(3, 2)
(2) ["whale", "bear"]
animals
(5) ["shark", "octopus", "salmon", "lizard", "tortoise"]
*/

/*
animals.splice(3,0,'snake', 'frog')
animals
(7) ["shark", "octopus", "salmon", "snake", "frog", "lizard", "tortoise"]
*/

// You can use .splice() to remove items in the middle and or delete items
// you can also use it to replace elements in the array
// Push, Pop, Shift, and Unshift is used more commonly but
// splice() is good for replacing many items at a time

let people = [ 'Mrs. Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne'];

// updates array in place and changes the array in place alphabetically

let nums = [34, 10, 100000, 67, 99];

// converts to string and compares character codes
// not a numeric sort -- if you don't pass in a function
// the default sort is based on character codes
// we can still make sort work the way we want it

// strings, numbers, variables, booleans, undefined work
// differently than objects

let fruit = "orange";
let fruitColor = fruit; 
fruit = "watermelon";

// arrays can contain tons of information
// javascript stores a reference to that array and 
// we are not able to see it
// when we work with arrays and hold them an array 
// the variable holds a pointer to where the value is stored

let numbers = [5,6,7,8]; // numbers is a reference in memory
let otherNumbers = numbers; // otherNumbers will point to the same array in memory or reference

// when you work with arrays they are stored as reference types in memory 
// rather than the actual value stored in memory 

// Important Distinction: 
// primitive types are actually stored as the value in a variable 
// arrays are stored as a reference or pointer in memory

const city = "Lisbon";

// cannot reassign or give a new value to a const variable
// this is about to change because arrays are reference points
// not the actual values

// myEggs --> pointing to an array with all the values in it 
// the only thing stored in myEggs is the reference
// even though const we can push values, empty out the array, 
// but you can't assign to a new array in memory
// you can't change the reference, but you can change anything inside
// the existing array as long as you don't severe that tie or that arrow
// pointing to that reference 
// You just need a variable used constantly with an array 
// We can't point to a new array or a string or to a boolean

const someColors = [
  ['red', 'crimson'],
  ['orange', 'dark orange'],
  ['yellow', 'golden rod'],
  ['green', 'olive'],
  ['blue', 'navy blue'],
  ['purple', 'orchid']
]

const animalPairs = [
  ['doe', 'buck'],
  ['ewe', 'ram'],
  ['peahen', 'peacock']
]

// an array is usually the best way for explicity saving 
// information 

const board = [
  ['O', null, 'X'],
  [null, 'X', 'O'],
  ['X', 'O', null]
]

// We have the first row which is in itself
// an array '0, null, X' 
// this is a multi-dimensional array
// you can have a 3-Dimensional array for cube

/*
const fitbitData = [
  308727, 
  1814, 
  211
] */

// This would not be clear what exactly each piece of 
// data is for in the array 

/*
const lucyFitbitData = [
  12344, 
  1814, 
  211
] */


// let lucyTotalSteps = 123123; 

// could have many variables with the name lucy as a part
// of the variable but this would be a very confusing way
// to do things

// An Object! 

// We can define these pairs of information associate with 
// an object (otherwise known as properties)

// Objects are collections of properties
// Properties are a key value pair
// Rather than accessing data using an index, 
// we use custom keys

// ex. age: 20, zip: 91003, city: 'Tulsa', isAdmine: true
// a blob of data that holds key value pairs, it's 
// about holding key pairs of data and we don't use 
// a number to access our data from the object
// instead if this is an object you say give me city, zip, etc

// Key-Value Pairs
// Keys              Values
// username: -----> 'crazyCatLady'
// upVotes: -----> 7
// text ------> 'great post!'

// In Python objects are called dictionaries 
// You have some words you are trying to look up 
// you don't have the definition in mind, you 
// need the key first to find the definition
// the key helps find the corresponding value

// Object is a container that contains information 
// in the form of pairs - when you put in a value
// you pair it witih a key

// If order is paramount and we for instance are
// storing 'race results' as an example from a 
// a marathon we definitely want to store the 
// results an array so that the data is tied in 
// to a specific order

// When signifying or defining an object literal we use 
// curly braces (not brackets which arrays would otherwise use)

// totalSteps -> 308727,
// totalMiles -> 211.7, 
// avgCalorieBurn -> 5755, 
// workoutsThisWeek -> '5 of 7'
// avgGoodSleep -> '2:13's

// When you store an object in a variable it is a reference
// to that object -- we can use const   

const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7, 
  avgCalorieBurn: 5755, 
  workoutsThisWeek: '5 of 7',
  avgGoodSleep: '2:13', 
  45: 'forty five'
};

// Order is not the point of an object - this would be more
// for an array 

// fitBitData.totalSteps to pull out the data
// When we create a JavaScript object the keys 
// are automatically converted to strings

// All Keys * are converted to strings
// There is not always the need to use a fitBitData. or dot 
// something to derive data from an associated key pair

let data = { 
  a: 1, 
  b: 2, 
  c: 3 
};

// JavaScript knows that if a comma is put after the 1 
// the Object is done
// Every other comma separating properties is not optional




