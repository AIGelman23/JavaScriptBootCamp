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

// Valid Keys - All keys are converted to strings * 
// Except for Symbols, which we haven't covered yet

const numbersExample = {
    100: 'one hundred', 
    16: 'sixteen',
    '76 trombones': 'great songs'
}

// Accessing Data - we use array brackets and then we put the 
// key inside those brackets
// Sometimes you have property names that aren't valid 
// JavaScript identifiers such as the name of a variable
// let my cat = '' - not a valid identifier you will get a syntax error
// let76trombones = '' - can't have variable name start as a number

const palette = {
  red: '#eb4d4b', 
  yellow: '#f9ca24',
  blue: '#30336b',
};

let mysteryColor = 'yellow';

// will look for the value of mysteryColor which is yellow
// and then plug in the value of yellow
// this would not work for palette.mysteryColor because
// this is not key property of the javascript object
// just like an array if we try to access a property 
// that is not defined such as an index of 99 in [1,2,3][99]
// we get undefined because it again doesn't exist
// palette['asd'] is undefined 
// palette.asd is undefined
// not that you should be you could use palette["bl"+"ue"];
// try to use dot (.) notation first like palette. first and
// if not use square brackets, if there is a dynamic value key
// use square brackets

// Updating and Adding Properties

const userReviews = {};

userReviews['queenBee49'] = 4.0;
userReviews.mrSmith78 = 3.5;
userReviews['queenBee49'] += 2;
userReviews.mrSmith78++;

// whether we are accessing a property that is already 
// there are updating an existing property we either
// use square brackets or dot notation

// Just like arrays we can also nest objects
// We can fill objects with keys that are arrays 
// or other objects

const student = {
  firstName: 'David', 
  lastName: 'Jones',
  strengths: ['Music', 'Art'],
  exams : {
    midterm: 92,
    final: 88
  }
};

// to find the total score of exams by accessing the nested
// exams object within the student object we would do the 
// following: 
// const avg = (student.exams.midterm + student.exams.final) 
//              / 2;
// student.strengths[1]
// we could keep indexing on and on and on

const shoppingCart = [ {
  product: 'Jenga Classic',
  price: 6.88, 
  quantity: 1
}, 
{
  product: 'Echo Dot', 
  price: 29.99, 
  quantity: 3
},
{ 
  product: 'Fire Stick',
  price: 39.99,
  quantity: 2
}
];

// simple shopping cart with an array of objects 
// seen above



// if we wat to represent one tick tack toe board in an 
// object where we had an object to track player 1 and
// player 2 

const game = {
  player1: {
    username: 'Blue',
    playingAs: 'X'
  },
  player2: {
    username: 'Jazzy',
    playingAs: 'O'
  },
  board: [
    [['O', null, 'X']],
    [['X', 'O', 'X']],
    [[null, 'O', 'X']]
    ]
};

// objects like a const variable of palette or const palette
// are a reference to an object not an actual variable 
// it is more of a pointer just as with an array

const palette2 = palette;

palette2.green = '#ebf876';

// none of them store the actual object but point to the object
// objects are reference types just like arrays
// therefore they use const to always be pointing 
// to the same object, and we can change the contents
// of the object as long as we don't assign the object
// to something entirely different - in that case 
// we would need to use let
// for arrays and objects we use const more often that 
// using primitives, let, and other types

let numNext = [1,2,3];
let mystery = [1,2,3];
let moreNums = numNext;

// not storing the numbers in the variable - storing the
// reference points such as nums -> 2233434234234
// we are comparing 34234234324234 === 553344334334
// or two reference points

// if you are trying to see if an array is equal to another
// array - you have to check if they look the same 

const user = {
  username: 'CherryGarcia8', 
  email: 'garcia@gmail.com',
  notifications: [ 'message' ]
};

/*
if(user.notifications === []) {
  console.log('No new notifications!');
}; // this won't work!
*/

/* if (user.notifications.length === 0) {
  console.log('No new notifications!');
};  // this will work!
*/  

if (!user.notifications.length) {
  console.log('No new notifications!');
};  

// check if an array looks like another array, 
// but isn't empty can be tricky until we talk about
// loops, we would need to manually compare every 
// value in an array

// == and === will only check arrays for equality 
// of reference not equality of contents and 
// the same thing hold trues for objects
// unless they are referring to the same place in 
// memory such as: 
// let data2 = {a:1}
// let data2 = data1
// data1 === data2
// true

// LOOPS - Repeating Code
// Not just repeating console.logs 
// Need logic to run multiple times
// Goals: 
// Write FOR loops
// Write WHILE loops
// Avoid INFINITE loops!
// Iterate over arrays and objects

// If we want to sum every number in an array
// and loop through and add them to a variable
// we are changing what is happening each time
// through the loop 

// The underlying data structure has an array of posts
// with each post being an object 
// each post has a title, link, username, upvotes, confirmation, 
// date posted, 
// There is a loop that is looping through an array of 
// all this data and putting some content in for it
// putting images, etc
// none of this is hard-coded - if there were a thousand
// posts it would run a thousand times
// game loops, if there are still playable moves let the 
// user keep playing - listen for an event for a key press
// there could be a couple hundred arrow presses on a keyboard
// we aren't looping a set number of type every single time
// it's dynamic - until a condition is met

// Loops do things repeatedly 
// - Loops allow us to repeat code
// -- "Print 'hello' 10 times
// -- Sum all numbers in an array
// There are multple types: 
// -- for loop
// -- while loop
// for...of loop
// for...in loop

// FOR Loops 
//
/*

  for (
    [initialExpression];
    [condition];
    [incrementExpression]
  )

    10 total times

    50 initial value
    60 when to run the loop
    +1 how to change value each time
    
*/


for(let i = 1; i <= 10; i++) {
  console.log("Hello", i);
}; 

// it is common to use i++ for incrememnting by 1 
// you could also use i+=3 to increment by 3 each time
// the variable or letter i is shown the amount incremented
// by each time the for loop runs until the final condition
// is met and is true

for (let number =1; number <= 20; number++) {
  console.log(`${number}x${number} = ${number * number}`);
};

// looping from low number to higher number, but
// can go in the opposite direction

for (let i = 50; i >= 0; i -= 10){
  console.log(i);
};

// start i at 50
// subtract 10 each iteration
// keep going as low as i >= 0

for(let i = 200; i >= 0; i-=25){
  console.log(i);
};

// Wrote in a such a way that it is never true
// Nothing happens
// Loops until condition is false

// INFINITE loops ---- BAD!!!

// for (let i = 1; i !==20; i+2{
// console.log(i);
// };

// Will keep going and chrome will ask to kill process
// causes everything to crash and the CPU is doing all
// these computations and never an end in site

// for(let = 100; i <= 0; i--) {
// console.log(i);
// }
//
// Never use equality and or non-equality
// Make sure you are going in the right direction

/*

For Loops + Arrays
To loop over an array, start at 0 and 
continue to the last index (length-1)
*/

const animalz = ['lions', 'tigers', 'bears'];

for (let i = 0; i < animalz.length; i++) {
  console.log(i, animalz[i]);
};

// 0 'lions'
// 1 'tigers'
// 2 'bears'

// As long as the i variable is less than the 
// length of the array or the array of animals

const examScores = [98, 77, 84, 91, 57, 66];

for (let i = 0; i < examScores.length; i++) {
  console.log(i, examScores[i]);
};

const myStudents = [
  {
    firstName: 'Zeus',
    grade: 86
  }, 
  {
    firstName: 'Artemis',
    grade: 97
  }, 
  {
    firstName: 'Hera',
    grade: 72
  }, 
  {
    firstName: 'Appolo',
    grade: 90
  }
];

for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  console.log(`${student.firstName} scored ${student.grade}`);
};

const word = 'stressed';
let reversedWord = '';
for (let i = word.length -1; i >= 0; i-- ) {
  reversedWord += word[i];
  console.log(reversedWord);
};


let total = 0;

for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  total += student.grade;
  console.log(total/myStudents.length);
};

// looping over an array, a string you generate 
// indices

 
// NESTED LOOPS


let str = 'LOL';
for (let i = 0; i <= 4; i++){
  console.log('Outer:', i);
  for (let j= 0; j < str.length; j++){
    console.log(' Inner:', str[j]);
  }
};

for(let i = 1; i <= 10; i++){
  console.log('Outer Loop:', i);
  for (let j = 10; j >= 0; j -= 2) {
    console.log('   Inner Loop:', j);
  }
};

// Don't use same variable within a nested loop 
// For an index - it is standard to move up from i to j
// Then k --- avoid nesting or just use two loops

