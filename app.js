
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

// The inner loops completes a full cycle everytime the outer
// loop iterates by 1
// You would multiply X (outer loop iterations) times 
// Y (inner loop iterations) and that's how many
// total iterations you would have between the nested loops

const gamerBoard = [
  [ 4, 32, 8, 4 ],
  [ 64, 8, 32, 2 ],
  [ 8, 32, 16, 4 ],
  [ 2, 8, 4, 2 ]
];

// First loop is going to loop over this outer array
// Which would be the 4 nested arrays 

let totalScore = 0;
for(let i = 0; i < gamerBoard.length; i++) {
  let row = gamerBoard[i];
  // console.log(row);
  for (let j = 0; j < row.length; j++){
   // console.log(row[j]);
   totalScore += row[j];
   console.log(totalScore);
  }
};

// each loop for the outer loop we have a full 
// cycle for the inner loop before out loop moves
// on and increments to meet a condition

// WHILE loops - a while loop continues to run as long
/// as its test condition is true

let numms = 0;
while (numms < 10) {
  console.log(numms);
  numms++
};

// 0
// 1
// 2
// 3
// 4

// while(){
//
//}

// while this condition is true run this code 
// until it is false

let j = 0; 
while (j <= 5){
  console.log(j);
  j++; 
};

// 0 - true
// 1 - true
// 2 - true 
// 3 - true
// 4 - true
// 5 - true
//   - false

// prefer a for loop when talking about scope
// it's better practice not to create a variable 
// outside a loop when possible

// A while loop excels where you are writing a loop and don't
// know how long you need something to run
// continue to have game logic loop and game is over
// it could take 20 or 100 turns
// 
// while(stillAlive) { ... } OR while(!stillAlive) { ... }
// 

// need someway to make it false or break out 

const targetSelection = Math.floor(Math.random() * 10);
let guessAnswer = Math.floor(Math.random() * 10);
while(guessAnswer !== targetSelection){
  console.log(`Target: ${targetSelection} Guess: ${guessAnswer}`);
  guessAnswer = Math.floor(Math.random() * 10);
};
console.log(`Target: ${targetSelection} Guess: ${guessAnswer}`);
console.log(`Congrats you win!!`);

// while(some condition)
// in the loop, update or attempt to make the condition
// false
// 
// if we didn't change guess one time then this would 
// continue to run as an infinite loop forever

// whenever JavaScript encounters break that loop that
// it is enclosed in is done
// break;

for(let i = 0; i < 10; i++){
  console.log(i);
  if(i === 5){
    break;
  }
};

// if you have nested loops and you break; within 
// one of these nested loops it does not stop all loops
// just the current loop that the break; is located in
// using break we can restructure a while loop for 
// guessing a random number

const targetTwo = Math.floor(Math.random() * 10);
let guessTwo = Math.floor(Math.random() * 10);
while (true) {
  if(targetTwo === guessTwo) break;
  console.log(`Target ${targetTwo} Guess: ${guessTwo}`);
  guessTwo = Math.floor(Math.random() * 10);
};
console.log(`Target ${targetTwo} Guess: ${guessTwo}`);
console.log(`Congrats you win!!!`);

// not a fan of this approach - writing while loop that is
// while true is not very self-explanatory
// while(!gameOver) - you can change and use it 
// in a self-explanatory way
// break stops a loops execution cold in it's tracks

// NO Internet Explorer Support!!!
// FOR...OF
// A nice and easy way of iterating over arrays
// (or other iterable objects)

let subreddits = [ 'soccer', 'popheads', 'cringe', 'books' ];
for(let i = 0; i< subreddits.length; i++){
  console.log(subreddits[i]);
}

// let variable will respresent each element 
// using the FOR...OF --- sub is going to automatically
// have each element stored in it -- a lot easier to read
// -- it is a common scenario to loop over and store
// elements in an array, but this way it is much easier to read


for(let sub of subreddits){
  console.log(sub);
};

for (let char of "cockadoodledoo"){
  console.log(char.toUpperCase());
};

// the above a lot cleaner and easier to work with 
// FOR...OF
// for (variable of iterable) { statement }

const magicSquare = [
  [ 2, 7, 6 ],
  [ 9, 5, 1 ],
  [ 4, 3, 8 ]
];

// all columns and row sums to 15 

/*
for(let i = 0; i < magicSquare.length; i++){
  let row = magicSquare[i];
  let sum = 0;
  for(let j = 0; j < row.length; j++){
    console.log(row[j]);
    sum += row[j];
  }
  console.log(`${row} summed to ${sum}`);
}; */

// if we want to rewrite with a for...of loop

for(let row of magicSquare){
  let sum = 0;
  for(let num of row){
    sum += num;
  }
  console.log(`${row} summed to ${sum}`);
};


/*
const words1 = [ 'mail', 'milk', 'bath', 'black' ];
const words2 = [ 'box', 'shake', 'tub', 'berry' ];

for(let i = 0; i < words1.length; i++){
  console.log(`${words1[i]}${words2[i]`});
}; */

// for...of is great a lot of the time but if you need
// to care about the index it wouldn't be a good idea
// use a traditional for loop instead

const movieReviews = {
  Arrival: 9.5, 
  Alien: 9,
  Amelie: 8, 
  'In Bruges': 9,
  Amadeus: 10, 
  'Kill Bill': 8, 
  'Little Miss Sunshine': 8.5,
  Coraline: 7.5
};

// for..of loops don't work with objects
// if we want to loops through and print out 
// each value there wouldn't be a way to use indices 
// a for loop wouldn't work
// would a for...of loop work?
// a for...of loop only works with information that is iterable
// an object is not iterable
// we can loop over just they keys and values
// there is a method for Object.keys and Object.values
// to be able to accomplish this

/*
for (let x of movieReviews) {
  console.log(x);
}; */ 
// This doesn't work above

for (let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie]);
};

// this works, but if needing to access values
// we would add console.log(movie, movieReviews[movie])

const ratings = Object.values(movieReviews);
let totalz = 0;
for (let r of ratings){
  totalz += r;
}
let avg = totalz /= ratings.length; 
console.log(avg);

// there is not an easy way to use a for loop to iterate 
// over an object but a for...in can do exactly what we are doing
// here

// for (variable in object) {
// statement
// }

// loop over the keys or properties in an object

const jeopardyWinnings = {
  regularPlay: 2522700,
  watsonChallenge: 300000, 
  tournamentOfChampions: 50000, 
  battleOfTheDecades: 100000
};

for(let prop in jeopardyWinnings){
  console.log(prop);
  console.log(jeopardyWinnings[prop]);
}; // will loop over keys automatically for...of is not iterable
   // for...in wants an object

// could add variable outside called let total = 0
// within remove the console.log statements
// and then use total += jeaporadyWinnings[props];
// it would loop over the properties or key names 
// and grab the corresponding values for each of them
// console.log(`Ken Jennings Total Earnings: ${total}`);
// technically you can use a for...in for an array 
// but this gets a bit murky 

for (let k in [88,99,77,66]){
  console.log(k);
};

// no matter what values in the array 
// we are looping over the properties
// not the values within the array
// when doing an array it's the exact
// same thing as looping over an object
// but we are looping over the keys as indices
// which is not all that useful
// since we have a for...of loop that already gives us
// the values
// for...in on mdn docs its an arbitary order / can
// change from browser to browser unlike in an 
// array the item is always set it in stone

// Functions - the last "big topic"
// Functions are the one topic you must understand
// to be a great JavaScript developer

// GOALS - 
// - Write valid functions
// - Write functions with arguments
// - Compare function expressions & 
// function statements
// Write a bunch of functions!

// Functions reusable procedures 
// Reusable pocedures
// - Functions that allow us to write
//   reusable, modular code
// - We define a "chunk" of code
//   that we can then execute at
//   a later point 
//  We use them ALL THE TIME
// 
// 2 Step Process: 1. Define, 2. Run 
// You write it and then you run it
//
// 
"hello".toUpperCase(); // every time we call it
// it runs the built in instructions that are predefined
// Define a function: 
// Function Declaration or Function Statement
//
// function funcName() { 
// do something 
// }
// What every code we put in the body of the function will 
// run when we call the function 

function grumpus() {
  console.log('ugh...you again...');
  console.log('FOR THE LAST TIME...');
  console.log('LEAVE ME ALONE!!!');
};

// The above is the written or defined function 
// To run the function you have to declare the function

grumpus();
grumpus();
grumpus();

// have executed the function 3 times, we can run this
// in a loop as well

for(let i = 0; i < 50; i++){
  grumpus();
};

// we can generate a single dice roll or die roll

  function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
  };
  
  rollDie();

  function throwDice(){
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
  };

  throwDice();

  // We can call functions from within other functions
  // we can call them in loops and or conditions 
  // pretty much anywhere we need to we can call them

  // Currently our example of functions don't except any 
  // Inputs and or Arguments

  // INPUTS --- 
  // Right now, out simple functions accept zero functions
  // They behave the same way every time

  // NO INPUTS -- 
  // grumpus() ----> 
  // grumpus() ---->
  // If this is the function we are just calling grumpus 
  // the same way every single time without a different
  // output 

  function greet() {
    console.log('Hi');
  };

  greet(); 

  // No inputs and same output 
  // We have no altered the behavior or impacting 
  // the function in any way but we can 
  // by passing in an argument

  // With ARGUMENTS we can pass in 'Tim', 'Anya' and 
  // receive a different output as a result 

  // Another example is 
  // avg(20,25); ---> 22.5
  // and or avg(3,2,5,6); ---> 4

  // You can have multiple arguments like avg 
  // that sums each of the numbers and then sums and
  // devides them by 4

  // No Inputs ---
  // "Hello".toUpperCase(); 
  // Arguments! "hello".indexOf('h'); 
  //            "hello".indexOf('o');
  // How do we make our functions expect arguments?
  // It is simple we can simply add a variable name
  // that accepts the argument or input 
  // 

  function greetings(person, nickname) {
    console.log(nickname);
    console.log(`Hi, ${person}`);
  };

  greetings('Ariel', 'Ben');

  // If we passed in a number or an empty array
  // it will not have any problem

  function throwAgain(numRolls) {
    for (let i = 0; i < numRolls; i++) {
    rollDie();
  }
};

throwAgain();

// More Functions -- This time with multiple arguments!

function square(num){
  console.log(num * num);
}

// Num is not an argument but the real term is called a
// a parameter (placeholder) 
//  which is a variable that is called when
// writing our function 
// when executing the function where there is body
// of block of code called it is called an argument

function sum(x, y){
  console.log(x + y);
};

// x and y or the order the parameters are situation 
// doesn't matter

function divide(a, b) {
  console.log(a / b);
};

divide();

// In this example we don't have any checks in place
// To make sure we are only working with numbers
// We won't focus on this for now
// The function is type agnostic 
// If you were to place 5 as the first function 
// parameter being based, and didn't include a number
// or did not define a number for b the result
// would be 5/undefined or NaN

/*
  Right now our functions aren't returning a value
  they are printing values out
  "hello".toUpperCase(); 
  "HELLO" is displayed only in the console
  toUpperCase(); does print a value but then 
  the result is lost forever

  const scream = 'hello'.toUpperCase(); 

  printing something to the console is entirely 
  different than returning a value and storing 
  it in memory to be used later 

  return values can be passed to another function, 
  and or stored in a variable - in the real world
  we don't print much to the console

  other than debugging we don't typically console.log
  something

*/

function add(x, y) {
  // console.log(x + y);
    return x + y;  // RETURN
};

add();

const summed = add(10,16); 
sum; //26

const answer = add(100,200);
answer; // 300

// We return something from the function 
// That we can use later

// There are important rules to understanding what
// you can return from a function: 
//
// 1. You can only return 1 thing from a function 
// or you can't have multiple return statements
// if you wanted to return both x and y you 
// could use an array instead of the total
//
// ex. return [x,y]
// or you can return a string where both 
// x and y are returned inside, but you can't
// return two separate values

// If you have a RETURN statement in the middle of 
// your function the code afterwards will NOT execute
// ex. function square(x) {
//    return x * x; 
//    console.log('ALL DONE!);
//  }
// try calling this function 
// i.e. square(4) 
// 16 will result but there will be nothing else
// printed to the screen 
// we could have a 100 lines after this it will never 
// run. Only if the return statement is executed 
// this example holds true. 

function isPurple(color){
  if(color.toLowerCase() === 'purple'){
    return true;
    console.log('Yay'); // this console.log will never run
  }
  else {
    return false;
  }
};

// there are other ways to improve this function 
// because of the way return statements work
// is that they end function execution 
// there is an easier way to show this
/*

function isPurple(color) {
    if(color.toLowerCase() === 'purple'){ 
      return true;
    }
    return false;
  }

  There is no use of 'else'
*/

/* 

function isPurple(color) {
  return color.toLowerCase() === 'purple';
}

Evaluates first and then returns...

*/

function containsPurple(arr){
  for(let color of arr) {
    if(color === 'purple' || color === 'magenta'){
      return true;
    }
  }
  
};

// containsPurple(['blue', 'pink', 'magenta']);
// This element might run once or one-hundred times
// with no instance of purple or magenta
// if none of the array returns true then it returns false

// Write a isValidPassword function 
// It accepts 2 arguments: password and username
// Password must: 
// - be at least 8 characters
// - cannot contain spaces
// - cannot contain the username
// If all requirements are met, return true, 
// Otherwise: false

// isValidPassword('89Fjjlnms', 'dogLuvr'); //true
// isValidPassword('dogLuvr123!', 'dogLuvr'); //false


/* 
function isValidPassword(password, username){
 if (password.length >= 8 && password !== username) {
   
   return true;
 } else {
   
   return false;
 }
};
*/

function isValidPassword(password, username) {
  const tooShort = password.length < 8; 
  const hasSpace = password.indexOf(' ') !== -1; 
  const tooSimilar = password.indexOf(username) !== -1; 
  if (tooShort || hasSpace || tooSimilar) return false;
  return true;
}

// we want this to be false so we return true 
// this is inverted 

// could be written 
// if (!tooShort && !hasSpace && !tooSimilar) return true;
// return false; 

// Write a function to find the average value in an 
// array of numbers
// avg(0,50)) //25
// avg([75, 76, 80, 95, 100]); //85.2

function avG(newestArr){
  let totalSum = 0; 
  
  for(let num of newestArr){
    totalSum += num;
  }

 let res = totalSum / newestArr.length;
 return res;
 // loop over each num
 // add them together
 // divide by the number of nums 
}

/* 
function anAverage(nArray){
  let totalSummation = 0; 
  for(let i = 0; i < nArray.length; i++){
    totalSummation += nArray[i]/nArray.length
  }
  console.log(`The average is: ${totalSummation}`);
}
*/ // my code

function anAverage(nArray) {
  let totalSummation = 0; 
  //loop over each num
  for (let numz of nArray) {
    // add them together
    totalSummation += numz;
  }
  // divide by number of nums
  let resTwo = totalSummation / nArray.length;
  return resTwo;
};

// many ways of doing this such as using a regular for loop

/* 
A pangram is a sentence that contains every letter of the alphabet, 
like: "The quick brown fox jumps over the lazy dog"

Write a function called isPangram, which checks to see if the given
setence contains every letter of the alphabet. Make sure you ignore
ignore string casing! 

isPangram('the five boxing wizards jump quickly'); true
isPangram('The five boxing wizards jump quick'); false

*/

// There is such thing as a perfect pangram: 
// A perfect pangram is a sentence that uses each letter
// of the alphabet only one time. 

function isPangram(sentence) {
 let lowerCased = sentence.toLowerCase(); 
 for (let char of 'abcdefghijklmnopqrstuvwxyz'){
   if (!lowerCased.indexOf(char)) {
     return false;
   }
 }
  return true;
};


// Write a getCard() function which returns a random playing
// card object, like: 
// {
//    value: 'K'
//    suit:: 'clubs'
// }
// Pick a random value from: 
// ----2,3,4,5,6,7,8,9,10,J,Q,K,A
// Pick a random suit from:
// ----clubs,spades, hearts, diamonds
// Return both in an object

function pick(aArray){
  // return random element from aArray
  const idx = Math.floor(Math.random() * aArray.length);
  return aArray[idx];
}

function getCard(){
  const values = 
  ['2','3','4','5','6','7','8','9',
  '10','J','Q','K','A'];
  //const value = pick(values); 
  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
  //const suit = pick(suits);
  //const valIdx = Math.floor(Math.random() * values.length);
  //const value = values[valIdx];

  //const suitIdx = Math.floor(Math.random() * suits.length);
  //const suit = suits[suitIdx];
  //console.log(value, suit);
  return { value: pick(values), suit: pick(suits) };
};

// Functions in Detail 
// Important things you should know about functions
//
// GOALS
// Understand Scope
// Write Higher Order Functions
// Pass functions as callbacks

// SCOPE 
// Variable "visibility"
// - The location where a variable is defined 
// dictates where we have access to that variable

function funny(){
  let person = "Ariel";
  const age = 33; 
  var color = 'teal';
  console.log(age);
};
// console.log(person); <-----
// will receive error because
// none of the variables exist outside of it's function

function changeColor(){
  let color = 'purple';
  const age = 19;
  console.log(age);
};
funny();
changeColor();

let bird = 'mandarin duck'; // one variable outside function
function birdWatch() {
  let bird = 'golden pheasant'; // one variable inside the function
  console.log(bird);// bird is scoped to function
};
birdWatch();
console.log(bird);


// More Scope 

//BLOCK Scope

/*
let radius = 8;
if(radius > 0){
    const PI = 3.14;
    let circ = 2 * PI * radius;
}; // PI & circ are scoped to the BLOCK

console.log(radius); //8
console.log(PI); // NOT DEFINED
console.log(circ); // NOT DEFINED
*/

/*
if(true){
  let animal = 'eel';
  // same thing with const animal = 'eel';
}
console.log(animal);
*/

// animal is scoped to the BLOCK (between curly braces)


// if adding or defining i as a variable outside of the 
// the for...loop it persists outside of the opening and 
// closing brackets
let animalArray = ['grizzly bear', 'panda bear', 'black bear'];
var i = 10; 
for(var i = 0; i < animalArray.length; i++){
  console.log(i, animalArray[i]);
};
console.log(i); 
// 'i' still exists outside of the for loop 
// we have access to it and could be problematic
// if we had another variable defined as 'i' elsewhere
// using 'var' to defined a variable isn't blocked scoped
// var can use the same identifier more than once 
// while let and const cannot

// [1,3,5]
// [2,6,10]

function doubleArr(arr){
  const result = [];
  for(let num of arr){
    let double = num *2;
    result.push(double);
  }
  return result;
};

// const result is scoped to the entire function 
// because it is not inside the entire block
// and we have 'let double' which is scoped to 
// this block for the for...of loop
// so at the bottom we can still return results
// if declaring 'let double' within the function
// you can do this as we are taking double and assigning
// num * 2; to it within the for...loop

// LEXICAL Scope
// learning things like react we will have nested functions
// all the time

function outer() {
  let movie ="Amadeus";

  function inner(){
    let movie = "Scoobie Doo";
    console.log(movie.toUpperCase());
  } // don't have inner outside of outer unless 
  // we return the function
  inner();
  console.log(x);
}

// if we define a variable with inner we don't have
// access to it outside of that function scope
// if we run outer we can get the variable that 
// is nested within
// if we declare movie within outer and within inner
// the thought process is that it is looking within 
// the inner function and if not it will use the movie
// higher up in the nest
// we go from inner to outer in order of hierarchy 

// if we use things like react later on we might have
// a component that has different variables
// ex.
 function ToDoList(){
  let todos = [];
  let username ='';
  function addTodo(){

  }
  function removeTodo(){

  }
  function updateTodo(){

  }
}

// We group it up into a Component Function 
// But we have todos and username that are used
// within the other functions declared within 
// the Component Function that react needs
// to re-render or update


/* function addSomething() {
  return
} */  // example of a function that returns something

/* Function Expressions - There's another syntax
   we can use to define functions:

  const square = function (num) {
    return num * num;
  }
  square(7);  <---- 49

  This is another way of defining a function - if 
  we look at this function it is stored within a variable
  or is a functional expression - it works because in 
  JavaScript that are stored as objects, we can store functions
  in an array, and we can even pass
   
  See more examples below: 
*/

function addMore(x, y) {
  return x + y;
};

const sumThis = function (x, y) {
  return x + y;
}; // works exactly the same way but declared in two
  // different formats as this is a Function Expression
  // and there are two different syntaxes
  // to define a function (are objects that can be stored
  // in a variable)

  console.dir(sumThis); // will print out the object form
  // The name of the function and key value pairs will be
  // seen by using console.dir(); this proves sumThis is an 
  // object.

/* function (x, y) {
  return x + y;
} // This is an anonymous function, we usually pass them 
 // into another function 
 */

 const product = function multiply(x, y){
   return x*y;
 }; // we can leave off the name multiply if we want
    // the Function Expression is still called the same
    // way but through the variable it is assigned to

 // you can use product(3,5) to see 15 as answer
 // after multiplying, but if you use multiply(3,5)
 // you will receive an Uncaught ReferenceError for 
 // multiply not being defined 

 // We are about to see how we are about to see
 // we pass around functions to other functions
 // and how we can use them as values and there
 // is a lot that we can do because functions 
 // are objects

// Functions Are Objects!!! 
// We saw store functions in a variable 
// but we can define functions in an array

function add(x,y) {
  return x + y;
};

const subtract = function(x,y){
  return x-y;
};

function multiply(x,y){
  return x * y; 
}

const divideMe = function (x,y) {
  return x / y;
};

const operations = [add, subtract, multiply, divideMe];

// if you use operations[1] you will just return th
// function (object) from value in the order of the array
// in which the variable sits
// however if you use operations[1](100,4);
// You will be able to utilize that function 
// same goes for ex.
// operations[1](100,4);
// operations[2](100,4);
// operations[3](100,4);
// operations[0](100,4);

// We can loop over this array without having to call 
// a function for instance: 
// for (let func of operations){
//  let result = func(30, 5);
//  console.log(result);
// };
// maybe not something you can do but you can 
// you can loop over functions in an array and 
// even store functions in an object

const thisThing = {
  doSomething: multiply // storing the function multiply 
  // as a value being point to by (doSomething) 
  // or the key in this object
};
// if you type 'thing' into the console window
// you will have an object within an object that
// you want to call 
// ex. 
//thisThing.doSomething(50,2);
//this is just like saying 
// "asdas.toUpperCase()" or some value and setting it toUpperCase
// OR [1,2,3,4].indexOf(2)
// 1 would be at index of 1

// We can also pass a function as an argument to 
// another function or even returning a function

// Functions as ARGUMENTS
// Higher Order Functions
// Functions that operate on/with other functions --
// They can: 
// - Accept other functions as arguments
// - Return a function

/*
function callTwice(func) {
  func();
  func();
}; */

/*
functin laugh() {
  console.log("HAHAHAHAHAHAHAHAHAAHAHA");
} */
/*
callTwice(laugh); // pass a function as an arg!
//"HAHAHAHAHAHAHAHAHAHA"
//"HAHAHAHAHAHAHAHAHAHA"
*/

function callThreeTimes(f){
    f();
    f();
    f();
};

function cry() {
  console.log("BOO HOO I'M SO SAD!");
};

// BOO HOO I'M SO SAD!
// BOO HOO I'M SO SAD!
// BOO HOO I'M SO SAD!

function rage() {
  console.log("I HATE EVERYTHING!");
};

// I HATE EVERYTHING!
// I HATE EVERYTHING!
// I HATE EVERYTHING!

function repeatNTimes(action, numR){
  for(let i = 0; i < numR; i++){
    action();
  }
};

// repeatNTimes(rage, 13);

function pickOne(f1,f2){
  let rand = Math.random();
  console.log(rand);
  if(rand < 0.5){
    f1();
  } else {
    f2();
  }
};

// Higher Order Functions
// Functions that operate on/with other
// functions. They can: 
// - Accept other functions as arguments
// - Return a Function

// Returning Functions
// Function Factories - the function on the outside
// are making new versions of a function or tweaking it
// so that you can use it

function multiplyBy(numX){  // 3
  return function(x){ // 3
    return x * numX;  // 3 * 3 = 9
  }
}; // This function is a factory for making additional 
// functions and or modifying them

const triple = multiplyBy(3);   
const double = multiplyBy(2);
const halve = multiplyBy(0.5);

/*
const triple = function (x) {
  return x * 3;
};

triple(6); */


function makeBetweenFunc(x, y){
  return function(numY){
    return numY >= x && numY <= y;
    }
  }

const isChild = makeBetweenFunc(0,18);

const isInNineties = makeBetweenFunc(1990, 2000); 
// has same template of a function, but the x and y 

const isNiceWeather = makeBetweenFunc(60,79);

// three different functions that act differently
// factory that returns a pattern but all 
// tweaked to be different


isNiceWeather(45);

// CALLBACK FUNCTIONS
//
// A callback function is a function passed
// into another function as an argument, which
// is invoked inside the outer function

/*
  function callTwice(func) {
    func(); 
    func();
  };

  function laugh() {
    console.log("HAHAHAHAHHAHAHAHA"; )
  }
  callTwice(laugh); // pass a function as an arg!
  // Laugh is the callback function - they are extremely 
  // common in JavaScript
  //"HAHAHAHAHAHAHAHAHA!"
  //"HAHAHAHAHAHAHAHAHA!"
*/

// If you want to make request to load data from 
// facebook's api - that request takes time
// we pass in a call back function when the request
// is finished or when the data is sent back

// Often we use anonymous functions when we call them
// other than a stand-alone or existing function

//function grumpus(){
//alert("GAHHHH GO AWAY!");
//};

// setTimeout(func, 5000); // will run a certain block of code after
// a certain number of milliseconds and how long to wait
// before it runs
// if we want it to go away after 5 milliseconds we 
// can simply pass in grumpus as the function argument

// setTimeout(grumpus, 5000);

setTimeout(function(){
  alert("WELCOME!");
}, 5000);

// inline anonymous expression

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
  alert("Why did you click me?");
});

// if you only need to use a function one time
// just pass it in as an anyonmous function 
// this is such a common thing that there is 
// even a short syntax for this

/*
  HOISTING - something I need to cover that you shouldn't
  stress about if it confuses you.

  Not crucial if having trouble understand -- what
  do you think happens if we have a variable and 
  set it equal to a string value and console.log
  that variable, but what if we switch that order 
  up and try to print that animal first - we get undefined
  console.log(animal); for instance is undefined or doesn't
  exist.

  var x; and don't give a value it is considered undefined

  When JavaScript is HOISTING it runs var animal and then 
  console.log(animal); and then finally animal is set to 'Tapir'
*/

var animal;
console.log(animal);
var animal = 'Tapir';
console.log(animal);

// always declare and initialize variables before using them
/*
console.log(shrimp);
let shrimp = "Harlequin Shrimp";
*/

// Uncaught ReferecnceError: Cannot access 'shrimp' before
// initialization  
// when declaring variable with let we can't access ot 
// before this variable exists and we wouldn't want this
// to happen unlike when using var and declaring a variable
// JavaScript knows it exists already
// Let and Const are not HOISTED

// If we write a function declaration like: 

howl();

function howl() {
  console.log("AWOOOOOOOOO");
};

// function declarations are HOISTED and are not actually
// happening but are processing these lines first
// if we instead run an function using a function expression
// this will not work (the variable hoot does exist however)
// but it is not considered a function or it is undefined
// or doesn't know the value
// you can't call undefined, the variable is hoisted
// the function is not (with a function expression)
// you can't access hoot() before it exists

/*
hoot();
var hoot = function () {
  console.log("HOOOO HOOOOO");
};
*/

// let and const are best practice to use over var
// good to be aware of this HOISTING 

// ARRAY CALLBACK METHODS
// CALLBACKS are central to JavaScript

//Array Callback Methods
// - Arrays come with many built-in methods that
// accept callback functions
// - Now that we've covered callbacks, we can learn
// these methods!
// - Super Useful!

// The general idea is that we will run a function 
// per every element in an array
// maybe we want to check if every element in an array
// meets a certain condition?

/* GOALS - use the new arrow functions syntax
  - Understand and use these methods: 
. forEach
. map
.filter
.find
.reduce
.some
.every
*/

// FOREACH - accepts a callback function, Calls the function
// once per every element in the array
// ex. 

/*
const nums = [9,8,7,6,5,4,3,2,1];

nums.forEach(function (n) {
  console.log(n * n); 
  // prints: 81, 64, 49, 36, 25, 16, 9, 4, 1
});

nums.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el)
    // prints: 8, 6, 4, 2
  }
});
*/


// using one time anonymous functions 
// the goal of foreach is that it passes 
// each value into that function 

numbers.forEach(function(num, idx){
  console.log(idx, num);
}); // we can use a second parameter to use the index

const numz = [20, 21, 22, 23, 24, 25, 26, 27];

numz.forEach(function (num) {
  console.log(num * 2);
});

function printTriple(n) {
  console.log(n * 3);
};

numz.forEach(printTriple);

const books = [ {
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'], 
  rating: 4.5
}, 
{
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
  rating: 4.42
}, 
{
  title: 'A Gentleman in Moscow', 
  authors: ['Amor Towles'],
  rating: 4.36
  }
];

// Want to print each title using foreach

books.forEach(function(book) {
  console.log(book.title.toUpperCase());
});

// We can do the exact same thing using a for...of loop

for (let book of books) {
  console.log(book.title.toUpperCase())
};

// one is a function and the other is a code block
// with a for...loop

for (let i = 0; i < books.length; i++) {
  console.log(books[i].title.toUpperCase())
};

// MAP - creates a new array with the results
// of calling a callback on every element in
// in the array 

const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function (t) {
  return t.toUpperCase();
});
texts; // ['rofl', 'lol', 'omg', 'ttyl'];
caps; // newly mapped array 
      // ['ROFL', 'LOL', 'OMG', 'TTYL'];

// Doesn't alter texts but maps to new array

//const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
//const words = ['asap', 'byob', 'rsvp', 'diy'];

//const doubles = numbers.map(function(num) {
 // return num * 2;
// });

// If we don't return something, it is an array 
// of undefines --- when a function returns nothing
// it creates 8 undefines as in this example

/*
const numDetail = numbers.map(function(n){
  return {
    value: n, 
    isEven: n % 2 === 0
  }
});

const doubles2 = [];
for(let num of numbers) {
  doubles2.push(num*2);
}; */

/// Map pushes numbers into array automatically
// Map is useful when combining to other methods
// Using a for...loop is usually not easier

const words = ['asap', 'byob', 'rsvp', 'diy'];

const abbrevs = words.map(function(word){
  return word.toUpperCase().split('').join('.');
});

// We could have a slightly more complex data structure with 
// a books array and we wanted to isolate the author 

/*
const titles = books.map(function(b){
  return b.title;
}); */

// create a new array based off of prev. array and creating
// a new version of an array 

// Arrow Functions - "syntactically compact alternative"
// to a regular function expression 

// ex. 
// 
// const square = (x) => {
//  return x * x;
// };
//
// const sum = (x, y) => {
//  return x + y;
// };

// Internet Explorer doesn't support Arrow Functions
// If doesn't work will be transformed into code that
// does work in IE

// Arrow Functions don't require function keyword

/*
const square = function(x){
  return x * x; 
}; */

// const square = (x) => {
//   return x * x;
// };

// Arrow Functions weren't exclusively added for simplicity
// but were meant to be used with the this keywod

const isEven = (num) => {
  return num % 2 === 0;
};

//const multiply = (x,y) => {
//  return x * y; 
//};

// If we only have one parameter we can leave the parenthesis 
// off, but only when we have one parameter
// With more than one parameter we must have those parenthesis 

//const greet = () => {
//  console.log('Hi!');
//};  // we must leave parenthesis without a parameter when using arrow
    // function 

/* 
Implicit Return 
All these functions do the same thing: 

const isEven = function (num) { // regular function expression
  return num % 2 === 0;
}
const isEven = (num) => { // arrow function with parens around param
  return num % 2 === 0; 
}
const isEven = num => {
  return num % 2 === 0;arrow function no  parens around param
}
const isEven = num => {
  num % 2 === 0;  //implicit return 
}
const isEven = num => num % 2 === 0; //one-liner implicit return 
*/

/*
const square = n => {
  return n * n; // returning an expression 
};

const square = n => (
  n * n
); // parens are making sure that the define logic between  is the expression

const square = n => n * n; 

const nums = [1,2,3,4,5,6,7,8];

const doubles1 = num.map(function (n) {
  return n * 2; 
});

const doubles2 = nums.map(n => {
  return n * 2;
});

const doubles3 = nums.map(n => n * 2); */

/*
const parityList = nums.map(function(n){
  if(n % 2 === 0) return 'even';
  return 'odd';
});

const parityList = nums.map((n) => {
  if (n % 2 === 0) return 'even';
  return 'odd';
});

const parityList = nums.map((n) => (
  n % 2 === 0 ? 'even': 'odd'
)); */

const parityList = nums.map((n) => n % 2 === 0 ? 'even' : 'odd');
// one line

// arrow functions are a replacement that is more compact
// don't have to right function, optional parenthesis, and
// then arow and return something or implicit return 
// and have a single expression in the body of the function
// still must be single expression no matter what
// for this to work

/*
FIND - returns the value of the first element in the 
array that satisfies the provided testing function
*/

let movies = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds"
];

let movie = movies.find(movie => {
  return movie.includes('Mrs.');
});

let movie2 = movies.find(m => m.indexOf('Mrs.') === 0);

// if we want to find the first movie that has mrs. in it

// the first time a given element is found to be true 
// or matches the string within includes within the array
// it returns that result and then the function is done

const goodBook = books.find(b => b.rating >= 4.3)
const neilBook = books.find(b => (
  b.authors.includes('Neil Gaiman')
  ))

// a list of posts individual wants to delete - it will
// call a function with that post's id 
// deletePost(2) 
// posts.find( p => p.id === 2)
// only gives us the first match when using find

// FILTER - Creates a new array with all elements that
// pass the test implemented by the provided function

/*

const nums = [9,8,7,6,5,4,3,2,1];
const odds = nums.filter(n => {
  return n % 2 === 1; // our callback returns true or false 
  // if it returns true, n is added to the filtered array
})
// [9,7,5,3,1]
// const smallNums = nums.filter(n => n < 5);
// [4,3,2,1]

const nums = [34, 35, 67, 54, 109, 102, 32, 9];

const odds = nums.filter(n => n % 2 === 1);
const evens = nums.filter(n => n % 2 === 0);

const bigNums = num.filter(n => n > 50);

// if the number is true it gets added
// into the result we get otherwise it's ignored

// sometimes we want to help the user narrow 
// down results and with filter() we can do that
// rating, genre as an ex.

const goodBooks = book.filter(b => b.rating > 4.3);

// we would grab highest rated books

// if we wanted to filter where genre is only fantasy books

const fantasyBooks = books.filter(book => (
  book.genres.includes('fantasy');
));

const shortForm = books.filter(book => (
  book.genres.includes('short stories') ||
  books.genres.includes('essays')
))

// ecommerce sites you can filter by rating, 

const query = 'The'; 
const results = books.filter(book => {
  const title = books.title.toLowerCase()
  return .includes(query.toLowerCase());
});

// filter is used in many applications to narrow
// down a selection

// EVERY - Tests whether all elements in the array
// pass the provided function. It returns a Boolean
// value. 
// If returned as true than the whole method or function
// is true - a way of verifying whether each element
// in the array have 3 letters and or does each 
// element end with the letter g

const words = ["dog", "dig", "log", "bag", "wag"];

const all3Lets = words.every(word => word.length === 3);

// has to return true for every single element 
// for the whole function or every to return true

const allEnding = words.every(word => word.length === 3);
words.every(word => {
  const last = word.length-1;
  return word[last] === 'g'
});

// SOME - similar to every, but returns true if ANY
// of the array elements pass the test function

/*
  const words = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];

  // Are there any words longer than 4 characters
  words.some(word => {
    return word.length > 4;
  }); //true

  //Do any words start with 'Z'?
  words.some(word => word[0] === 'Z'); //false

  //Do any words contain 'cake'
  words.some(w => w.includes('cake')); //true

  const allGoodBooks = books.every(book => book.rating > 3.5);

  const any2Authors = books.some(book => book.authors.length === 2);




*/

// SORT 
const prices = [400.5, 3000, 99.99, 35.99, 12.00, 9500];

// The default of SORT function 
// is to convert all the numbers in the prices
// array to strings

// prices.sort();

// we can customize the behavior of sort

// SORT PRT .2 
// arr.sort(compareFunc(a,b))
/* 
  - If compareFunc(a,b) returns less than 0 
    Sort a before b
  - If compareFunc(a,b) returns 0 
    Leave a and b unchanged with respect to each other
  - If compareFunc(a,b) returns greater than 0 
    Sort b before a
*/

const ascSort  = prices.sort((a,b) => a - b);
const descSort = prices.sort((a,b) => b - a);

// a      b 
// 1000 4000
// 4000 - 1000 = a positive number 
// would sort the elements in decending order
// versus 1000 - 4000 = a negative number
// would sort the elements in an ascending order
//
// if we look at the original array prices[]
// everything will have been mutated
// sorting does mutate the original array
//
// if we wanted to make a comparison between
// prices from one array and another 
// we could use slice
// ex. 
//
// prices.slice().sort((a,b) => a - b);
// prices.slice().sort((a,b) => b - a);
//
// introducing badSort = prices.slice().sort();
// each variable now isn't connected to original prices
// ex. ascSort, descSort, and badSort - have different
// data, but not the same references in memory
// 
// rather than sorting a single array of numbers
// we might use an array of objects such as books
// 
// books.sort((a,b) => a-b); 
// We can't run one object minus another object
//
// What we can do is 
// ex.
// 
// books.sort((a,b) => a.rating - b.rating);
// or 
// books.sort((a,b) => b.rating - a.rating);
// 
// can also write a sort based on ratings and genres
// or a more complicated sort
// 
// comparing a string is fine, but to compare or sort 
// numbers you must use the compareFunc(a,b) as an 
// example and return a number 
// if it is a negative number one thing happens
// if it is a positive number another thing happens
//
//
// REDUCE - is useful and can be used in many ways
// most practice to get good with it
// 
// REDUCE - executes a reducer function on each element
// of the array resulting in a single value
//
// applications for REDUCE including summing an array
// [3,5,7,9,11].reduce((accumulator, currentValue) => {
//    return accumulator + currentValue; 
// });
//
// It's not not always about multiplying, summing, or 
// accumulating into a single value or number
// it could be finding the maximum value in an array
// it could be tallying votes in an array or object
// we will start with basics with summing every element
// in an array
//
// the accumulator variable is going to start as the current
// value in the array and add it to the next value
// or element and that returns a value and that
// is used as accumulator in the next function call 
// and add that to the next number and return that
// sum or value and continue this process until
// all values are summed in the array 

// const nums = [3,4,5,6,7];
// const product = nums.reduce((total, currentVal) => {
// return total * currentVal;
// });

// total          currentVal
// 3              4
// return 12 (reduce remembers the prev return value)
// uses 12 as total the next time through
// 12             5
// 60             6
// 360            7
// 2520 
//
// We are reducing down to total or persists
// think about it has having a memory through 
// this whole cycle 
// we saw how we can sum and now we will see some more
// advanced use cases
//
// REDUCE PRT 2.
//
// Finding Max Val in an array where the accumulator
// is just tracking the max or simply referring to the
// current max value
//
// const grades = [87, 64, 96, 92, 8, 99, 73, 70, 64];
//
// const maxGrade = grades.reduces((max, currVal) => {
//  if(currVal > max) return currVal;
//  return max;    
// });

// Max starts at 87 and currentVal 
// 
// max      currVal      return
// 87       64           87 (because this is false)
// 87       96           96 (because true or greater)
// 96       92           96 (because this is false)
// 
// we eventually go through the entire array 
// and return 99 as the highest value
//
// we could technically replace the original code
// and say 
// ex. 
// 
// const maxGrade = grades.reduce((max, currVal) => {
//    return Math.max(max, currVal);
// });
//
// can also do this for the lowest grade
//
// const minGrade = grades.reduce((min, currVal) => {
//    return Max.min(min, currVal);
// });
// 
// We could even use an implicit return 
// since we have a single number being returned
//
// const minGrade = grades.reduce(min, currVal) => (
//     Math.min(min, currVal);
//));
//
// accumulator makes things of growing or summing
// but that's not what is happening here
// it's just keeping tack of the max in this example
//
// When using reduce you can even pass in an initial 
// starting value 

// arr.reduce(callback, initialValue)
// callback ends up usually being an inline anyonmous function
//
// [10,20,30,40,50].reduce((sum, currVal) => {
//    return sum + currVal; // 150
// })
//
// when we don't specify an initial value it will
// just use the initial value
// but we can start with a custom value
// for ex. by passing in 0 or 1000, then will add the values
//
// [10,20,30,40,50].reduce((sum, currVal) => {
//    return sum + currVal;
// }, 0)
//
// there are other use cases to specify an initial value
// like an object to accumulate data into an object
// you can use reduce not just to multiply or sum things
// but we can grab the longest, string, the highest number
// in an array
// 
// the first argument ---> 
// .reduce((sum, currVal) => {
//   return sum + SVGPathSegCurvetoQuadraticRel;
// }, 1000);
// 
// the second argument ---> 
// is the 1000
// 
// TALLYING 
//
// 
const votes = 
['y', 'y', 'n', 'y', 'n', 'y', 'n'];
const tally = votes.reduce((tally, vote) => {
  tally[vote] = (tally[vote] || 0) + 1;
  return tally;
}, {}); // INITIAL VALUE: {}

tally; // {y: 7, n: 6}
//
// we are going to use reduce to produce an object
// and count the number of yes and no answers
// for votes and add them as a key and value
// 
// we initially use an empty object 
// if we encounter y we will check if there is one
// and if so set it + 1 or to 1 and keep that tally
// 
// const results = votes.reduce((tally, val) => {
// if (tally[val]) {
//  tally[val]++
// } else {
//  tally[val] = 1;
// }
// return tally;
//}, {})
//
//
// {}
// {y: 1}
// {y: 2}
//
//
//
// const results = votes.reduce((tally, val) => {
// tally[val] = (tally[val] || 0) + 1;
// return tally;  
// }, {})
//
// tally of val or tally[val] is undefined
// doesn't exist and or if there is a value
// normally starting at 0 (add 1) or increment
// by 1 to add a tally mark and keep track
// 
// {y:1}
//
//

const groupedByRatings = books.reduce((groupedBooks, book) => {
  const key = Math.floor(book.rating);
  if(!groupedBooks[key]) groupedBooks[key] = [];
  groupedBooks[key].push(book)
  return groupedBooks;
}, {});

// get the rating of the book and chop the decimal off
// now set the key to 4 (rating) and then check 
// is there a key of 4 in the array of books
// and if not set the empty object to 
// to have a key of 4 with an empty array {4: []}
// and then take the groupBooks[4] with a rating of 4
// and push that book into the array with a key or
// rating of 4
// {4: [book1, book2]}
//
// It boils down to taking multiple elements of an array
// and turning them into one result
// tally, grouping, max or min, sum, by string etc

// NEW-ISH FEATURES
// -- Rest & Spread
// -- Destructuring
// -- Default Function Params
// Object Enhancements
// Classes
// Async Functions

// DEFAULT PARAMS - The Old Way 

// function multiply(x,y) {
//  return x * y;
// }
//
// if not specifying when in console 
// multiply (4) you get NaN 
// 
// function multiply(x,y) {
// if (typeof y === 'undefined') {
//  y = 1;
//    }
// }
//
//
// function multiply(x, y) {
//  y = typeof y === 'undefined' ? 1 : y
//  return x * y;
// }
// 
// 
// DEFAULT PARAMS - NEW WAY
//
// function multiply(a, b = 1) {
//    return a * b;  
// }
//
// multiply(4);  // 4
// multiply(4, 5); // 20

// b will default to 1 if a value is not passed
// in to the parameter for b 
//
//
// function multiply(x, y = 1) {
//  return x * y;
// };

const greetz = (person, greeting = 'hi') => {
  console.log(`${greeting}, ${person}!`);
};

// another example with a string as a default
// value

const blah = (x,y=[1,2,3]) => {
  console.log(x, y);
};

// another example with an array 
//
// javascript knows which values
// are the default values based
// on the order you pass them in
// to the function call
// default parameters should 
// come at the end
// the newer way 
// is better than checking for 
// a specific type with typeof

// SPREAD - 
// not supported in IE, but 
// shouldn't stop from using
// 
// Spread - Spread syntax allows
// an iterable such as an array to be
// EXPANDED in places where zero or
// more arguments (for function calls)
// or elements (for array literals) are 
// expected, or an object expression 
// to be expanded in places where zero
// or more key-value pairs 
// (for object literals) are expected
// 
// above the MDN definition
//
// 
//
// Spread for Function Calls
// 
// Expands an iterable
// (array, string, etc)
// into a list of arguments
//
// const nums = [9, 3, 2, 8];
// Math.max(nums); //NaN
// Use Spread; 
// Math.max(...nums); //67
// Same as calling; 
// Math.max(9,3,2,8);
//
//
// const nums = [45,23,34,7,5]
// undefined and Math.max(nums) NaN
// spread operator 
// Math.max(...nums)
// spreading iterable into individual
// arguments
// Math.max(45,34,34,7,5)
// 45
function giveMeFour(a, b, c, d) {
  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
  console.log('d', d);
};

const colorz = ['red', 'orange', 'yellow', 'green'];

/*

giveMeFour(colorz)
a (4) ["red", "orange", "yellow", "green"]
b undefined
c undefined
d undefined
undefined
giveMeFour(...colorz)
a red
b orange
c yellow
d green

if we had 10 colors 
we would still be passing them
or spreading them they just
wouldn't be used in the 
function

soon we will see how to write
a function that accepts any number
of arguments - right now 
we have to hard code the number
of arguments we want

spread isn't only applicable to arrays
but if we have a string

const str = 'GOAT'; 

because a string is an iterable
it would pass each character over
as an argument
a G
b O
c A
d T

not common to spreadh characters
as much as arrays

each element is spread as a separate 
standalone argument with the spread
operator

*/

/*
Spread syntax allows an itermable
such as an array to be expanded in
places where zero or more arguments 
(for function calls) or elements 
(for array literals) are expected, 
or an object expression to be expanded
places where zero or more key-value pairs
(for object literals) are expected.
*/

/*
  Spread in Array Literals 
  Create a new array using an existing
  array. Spreads the elements from one array
  into a new array.

  We can use to combine or create new arrays
*/

const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];

const mollusca = [...cephalopods, ...gastropods];

const inverts = [...cnidaria, ...gastropods, ...cephalopods];
// will combine all eight elements 
// can add an individual element 

cephalopods.concat(gastropods);
// data from cephalopods and combining with gastropods
// using spread operator is easier to see and use

const cephCopy = [...cephalopods];
cephCopy === cephalopods; // false

// when using spread operator it will make a new array 
// in memory with a unique reference from the original

const copy = cephalopods; 
copy === cephalopods; // true

"abcdefg".split('');
[...'abcdefg'];
// iterate over this iterable and add it to the array
// can spread strings, not common to spread many of 
// them into one array
// same idea of spreading into a function call

// Spread in Object Literals - Copies properties
// from one object into another object literal

const feline = {
    legs: 4, 
    family: 'Felidae'
};

const canine = {
  family: 'Caninae', 
  furry: true
};

const dog = {
  ...canine, 
  isPet: true, 
  adorable: true
};

const houseCat = {
  ...feline, 
  isGrumpy: true, 
  personality: 'unpredictable'
};

// some times can have conflicting properties
// like legs 4 for each 
// would only have one legs property because
// when we have two equal value pairs they overwrite each 
// other

const catDog = {
  ...canine,
  ...feline
}; 

const tripod = {
  legs: 3, 
  ...canine  // if we want legs to remain 3 
            // we want to include legs: 3 after ...canine
};

const catDogClone = {
  ...catDog
}; // catDogClone == catDog is equal to false because
   // we made a copy

// in the context of an array we can't spread objects
// but in the context of an object we can spread 
// Math.max(...dog) would not work either - only works with 
// an array or object literal
// we can spread a string into an object again

const randomz = [...'hello', {...catDog}]; // combining 
// or nest structured matters 
// context matters, ...'hello' is an array, ...catDog is 
// in an object

// REST - it looks like spread but it's not
// the opposite of spread - instead of spreading into 
// arguments and or into a new object or an array
// it collects things down into a single array
// used in a function that excepts many different arguments

/*
function (x, y){

}; // if we had pass into 100 arguments you would have
  // to manually type each argument or parameter in

  */

  // There is a way to do this without REST by passing 
  // many arguments in and this is called 
  // 'THE ARGUMENTS OBJECT'
  // - Available inside every function
  // - It's an array-like object 
  //  * Has a length property
  //  * Does not have array methods like push/pop
  // - Contains all the arguments passed to the function
  // - Not available inside of arrow functions!

/* function SumAll() {
  let total = 0;
  for(let i = 0; i arguments.length; i++) 
{
    total += arguments[i];
    }
}
sumAll(8, 4, 3, 2,); // 17
sumAll(2, 3) //5    
   
}  
*/


//function sum() {
//  const argsArr = [...arguments];
// return argsArr.reduce((total, currVal) => {
//    return total + currVal
//  })
//};
// arguments is not an actual array but is an 
// array like object
// we can use a spread like [...arguments] to iterate over

/*
function fullName(first, last){

}; // every one needs a first and a last parameter 
   // but there isn't actually a way of doing that
   // if console.log(arguments); it just calls everything
   // for ex. fullName('tom, 'jones', 'III', 'order pf the phoenix')
   // can console.log(first); but arguments includes everything
   // with REST that isn't a problem
  */

// REST PARAMS - collects all remaining arguments into
// an actual array 
// not an array like object or an array like immitation

// function sum(...nums){
// console.log(nums);
// return nums.reduce((total, currVal) => {
//  return total + currVal  
// })
// };
//
// We can use REST to collect remaining arguments
// that have not been matched with a parameter
//
function fullName(first, last, ...titles){
  console.log('first', first);
  console.log('last', last);
  console.log('titles', titles);
};
// we have a way of separating first and last out
// and then including everything else
// combine everything that has not been put into 
// a parameter and include it in the rest parameter
// rest parameter will be the last parameter
// and this is the only option (we can use this)
// in an arrow function as well

const multiply = (...nums) => (
  nums.reduce((total,currVal) + total * currVal)
);
  
// We can use it as an actual array and have more flexibility
// to determine what leftovers are collected
// syntax is the same with ...spread and ...rest
//

// DESTRUCTURING - a short, clean syntax to 'unpack' 
// - Values from arrays
// - Properties from objects
// Into distinct variables

const raceResults = [
  'Eliud Kipchoge', 
  'Feyisa Lelisa', 
  'Galen Rupp',
  'Ghirmay Ghebreslassie', 
  'Alphonce Simbu', 
  'Jared Ward'
];

// An array of marathon results from 2016 Olympics
// If we want to create an array for gold 
//
const gold = raceResults[0];
const silver = raceResults[1];
const bronze = raceRsults[2];
// See above for pre array destructuring
// equivalent ex.
const [gold, silver, bronze] = raceResults;
// will go into raceResults and use each result
// according to their order in the array
// and we will have three new variables
// the first three assigned to these three new variables
// destructuring according to index 0,1,2,3 etc

// If we want to skip an index and want the first and fourth
// results in the marathon

const [first, , , fourth] = raceResults;
// can use commas to ignore indexs that you don not want 
// to destructure into the new array
const [winner, ...others] = raceResults; 
// winner would be set to 'Eliud Kipchoge' and ...others
// would be the other winners in the marathon according
// to their index
// const [winner, , ...others] = raceResults; with a comma
// separation will ignore 'Feyisa Lelisa' from the array
// and store all others in the spread operator ...others

// OBJECT DESTRUCTURING 
// an array according to index, in an object variable
// is based off the name of the property

const runner = {
  first: "Eliud", 
  last: "Kipchoge",
  country: "Kenya", 
  title: "Elder of the Order of the Golder Heart of Kenya"
};

// to creat variable for first, last
// use
// ex. 

const {first, last} = runner;

// if it finds this property for first, last
// it will store it in a variable first, last of 
// the same name

// const {first, last, time} = runner;
// time would be undefined, must be existing key names
// to be defined

const {
  country: nation,
  title: honorific 
} = runner;

// using the key and creating a variable name 
// we can store the value of that property in 
// for instance nation, or honorific as 
// in the example above

const {first, last, ...others} = runner;

// we will still have first, and last properties, 
// but still have others unpacked into ...others

// NESTED DESTRUCTURING 

const results = [{
    first: "Eluid", 
    last: "Kipchoge", 
    country: "Kenya"
  }, 
  {
    first: "Feyisa",
    last: "Lilesa", 
    country: "Ethiopia"
  }, 
  {
    first: "Galen", 
    last: "Rupp", 
    country: "United States"
  }
];

const [,{country}] = results;
// The above skips the first object
// list inside of the array of objects
// and destructures out the second list
// object's country called "Ethiopia"

// If we wanted the first name
// ex. 

const  [{first: goldWinner}, {country}] = results;
// We can combine the syntax 
// Doesn't recommend using nested destructuring 

const [,silverMetal] = results; 
const {country} = silverMedal;

// PARAM DESTRUCTURING 

// FIRST Example 
// function print(person){
//   const {first, last, title} = person; 
//   console.log(`${first} ${last}, ${title}`);
// };

// SECOND Example - exact same output
// function print({first, last, title}){
//   console.log(`${first} ${last}, ${title}`);
// };

const response = [
  'HTTP/1.1', 
  '200 OK', 
  'application/json',
];

function parseResponse([protocol, statusCode, contentType]){
  console.log(`Status: ${statusCode}`);
};
// unpacking all three elements from an array
// based off of the position in the array or index

// OBJECT METHODS and the 'This' Keyword
// GOALS - 
// - Add methods to objects
// - Use new object shorthand syntax
// - Use computed properties
// - Understand prototypes
// - Explain how this works together

// SHORTHAND PROPERTIES
// Not supported in IE 

const getStats = (arr) => {
  const max = Math.max(...reviews);
  const min = Math.min(...reviews);
  const sum = reviews.reduce((sum, r) => sum + r);
  const avg = sum / reviews.length;
 // return {
 //   max: max, 
  //  min: min, 
 //   sum: sum, 
  //  avg: avg
 // }
  return {
    max, 
    min, 
    sum, 
    avg
  } // don't have to duplicate the key and the value
}

const reviews [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const stats = getStats(reviews);

// COMPUTER PROPERTIES

const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

//const team = {
//  role: person
// };

const team = {};
team[role] = person;
team[role2] = person2;

// const user = 'Jools';
//
// const userRoles = {
//  [user]: 'Admin' 
// }
// userRoles;
//
// We can use a variable as a key name in an object
// literal property!
// Here the user will be evaluated first as user and 
// then set to Admin

const team = {
  [role]: person, 
  [role2]: person2
  [1 + 6 + 9]: "sixteen"
};

// Don't have to make an empty object and then
// add each value to it - instead can do this altogether

function addProp(obj, k, v){
  const copy = {...obj}; // had to make an object 
  copy[k] = v;  // add in the dynamic key and set the value
  return copy;  // then return the copy
};

// versus

function addProp = (obj, k, v) => {
  return {
    ...obj,
    [k]: v
  }
};


const res = addProp(team, 'happy, ':)');

// When creating a function that return objects
// or computer properties - these are good examples
// we can also write the function implicitly with
// out the return statement
// when we have an object we are implicitly returning
// we must have the parenthesis around the curly brackets

// METHODS - 
// we can add function as properties on objects
// we call them methods

const math = {
  multiply: function(x,y) {
    return x * y;
  }, 
  divide: function(x,y) {
    return x / y;
  }, 
  square: function(x) {
    return x * x;
  }
};

// We can use Methods to group functions together
// and it is a nice organizational structure

"hello".toUpperCase(); 

// this is a method above

const add = function(x,y) {
  return x + y;
};

// above is function but when adding the
// .add() notation this is a method

/* 
  const add = function (x, y) {
    retrun x * y; 
  }

  const math = {
    add
  }

  can use math.add(2,3)
  we are referencing the same function in memory
  but accessing it it in a different way

  normally you'd do the following:

  const math = {
    add: function (x,y){
      return x + y;
    }
  }

  Would access and add by 

  math.add(1, 2);
  math.add just references the object method or function

  When adding a function as a property inside in object
  to a key value it is known as a method!

*/

// You can use an arrow function with methods
// and now there is a nice SHORTHAND option 
// to perform the same tasks for methods

/*
  const math = {
    blah: "Hi!", 
    add(x, y) {
      return x + y;
    }, 
    multiply(x, y){
      return x * y;
    }
  }
  math.add(50, 60) //110
*/

/*
const auth = {
  username: 'TommyBot'
  login() {
    console.log("LOGGED YOU IN!");
  }, 
  logout() {
    console.log("GOODBYE");
  }
}; */

// Uses the above auth object and 
// the name login as the key 
// logout would be the key for the console log
// property of 'GOODBYE!'

// Don't have to clutter our code by using the
// above example for SHORTHAND

// THIS - the keyword this can be a major point of confusion 
// and misery and hardship and general suffering in the 
// life of a new JS developer
// 
// this is used for click events, keyboard events
// for functional events with DOM related objects

// What is tricky about the 'keyword' this seems
// unpredictable, but there is a set of concrete
// rules that explain the keyword 'this'

// think about 'this' in terms of the current 
// execution scope, it is going to give you 
// an object back so depending upon the rules
// this object changes - could be a reference
// to the global scope

function sayHi(){
  console.log("HI");
  console.log(this);
};

// When we define a function it appears as if it is 
// floating on it's own, but if looking at the window
// object in the console there we can see that
// the console.log("HI"); is added as a property
// on the Windows object, the window is the global 
// scope of our browser, there is a different global 
// object in node
// 
// not everytime you refer to 'this' keyword
// in a function does it refer to the 'window' of the
// browser, but the way we execute it does refer to
// the window - things like
// alert("LOL"); is a property on the window for 
// browser so we could also say
// window.alert("LOL"); and get the same result
// another very important thing about the window
// when we declare a variable like 
// ex. 
// var color = teal; 
// that color or variable color is added to the window
// property list or global scope
// window.color can be used for example to access the 
// color too
// 
// let and const are not added to the global scope
// or to the window object in the browser
// as a property
// for ex. 
// let num = 400; 
// 
// window.num
// undefined
// 
// var on the other hand is added to the window scope
//
// we could also use a function expression
//
// const greet = function() {
// console.log(this);
// };
//
// greet() 
// this will still refer to window object and that
// object represents the current execution scope
// 'this' is extremely useful when using methods
// within an object
// will start to make sense as pieces come together

/*
const person = {
  first: 'Cherilyn', 
  last: 'Sarkisian', 
  nickName: 'Cher', 
  fullName() {
    console.log(this);
  }
};
*/

// This time it is not console.logging the window
// this refers to the person object itself 
// or the object that the fullName(){} object is set to
// Why do we care about the current object we are inside
// of? Because it allows us to reference properties and
// or other methods. We can have a method that is aware
// of it's other contents in it's object
// 
// So for fullName if we want firstName and lastName together
// 

/*
const person = {
  first: 'Cherilyn', 
  last: 'Sarkisian', 
  nickName: 'Cher', 
  fullName() {
    console.log(this.first); // prints out Cherilyn 
    // or points to the property for the key first: which
    // is 'Cherylin'
    // we could therefore replace console.log(this.first);
    // with console.log(`${this.first} ${this.last} AKA ${this.nickName}`)
    // furthermore we can destructure 
    // using const {first, last, nickName} = this; and 
    // we would still get the same result
    // if changing console.log to ${first} ${last} AKA ${nickName}
    // you can reassign the nickName 
    // person.nickName = "CHERRRR
    // now we can right a method which is aware of the method
    // that it lives in and or it's properties
    // we can interact with these values, properties, and or methods
    // it is now a self-contained world
  }
};
*/

// we could add another method to the object
//
// }, printBio() {
//  this.fullName() // we must use this to reference the object
// consoel.log(`${fullName} is a person`);
// we called a method within this object and accessed it's properties
// and the value of this in both methods refers to the object
// that they live in
// }';
//

// THIS IN METHODS - use the keyword this to reference 
// properties in objects

// The value of 'this' depends on the invocation context 
// of the function it is used in

// this used inside an object is used to access the 
// parent method, but this isn't always the case
// it will depend on the function method is 
// called or executed
// 
// 'this' is what is setting the value of 'this' 
// the way I am setting or invoking 
//
// we can change the value of 'this' 
//
// const printBio = person.printBio; 
// 
// made a variable pointing to printBio
// 
// if there is something to left and then 
// a dot or '.' and executing a function 
// such as person.printBio; it will 
// show this to be only the scope of that
// method rather than the window
//
// const printBio = person.printBio;
//
// there are three special methods call, apply, and 
// bind that can change the context on how you use 'this'
// also prototypes will apply 'this' differently

// when we write an arrow function and a regular function
// it doesn't get it's own version of this
// the value of 'this' isn't going to be changed

// laugh: () => {
//  console.log(this);
//  console.log(`${this.nickName}` says HAHAHAHAHAHA`);
// }

// the value of this is set to window in the example above
// versus printBio which is set to the object or parent object
// it is contained in rather than the window
// arrow functions aren't generally used
// within objects that have methods because of this
// we just want access to the specific properties
// contained within that object

// Execution or way of invoking 'this' really matters

/*

Document Object Model

-The DOM is a JavaScript
 representation of a webpage
- It's your JS "window" into the 
  contents of a webpage
- It's just a bunch of objects 
  that you can interact with via 
  JS

  Can write JavaScript to figure
  out how many inputs are on a form, 
  change images, listen for clicks, 
  listen for drags, drag and drop
  if valid, if piece there already
  than replace that piece

  The key is understanding the OBJECT

  The browser will turn everything into
  OBJECTS that would be on the page

  <body>
    <h1>body</h1>
    <ul>
      <li>Hello!</li>
      <li>Get some sleep</li>
    </ul>
  </body>

  The browser takes all of this 
  information and turns it into 
  objects and there is a tree 
  of objects as a virtual representation

  Document -> Body -> [H1, UL --> LI, LI]

  Each node is an OBJECT and each have a property.
  They key is what context inside the object.

  There are methods to delete Objects, 
  could replace H1 with an H2 -- all is done
  through JavaScript

  Google Code Snippet 

  const myImg = document.createElement('img');
myImg.src="https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"

myImg.style.width= '200px';
document.body.append(myImg);
myImg.style.transition = 'all 2s';

const allEls = document.body.children;


setInterval(() => {
    for (let el of allEls) {
           const rotation = Math.floor(Math.random() * 360);
           const x =  Math.floor(document.body.clientWidth * Math.random());
           const y =  Math.floor(document.body.clientHeight * Math.random());
    el.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
    }
   
}, 2000);

DOCUMENT - 

The Document Object is our entry
point in to the world of DOM. 

It contains the world of DOM. 

It contains the representation
of all the content on a page, 
plus tons of useful methods and 
properties.

There is a hierarchy that exists
- relationships between parents
  and children 
- the root of the tree is the DOCUMENT
  when working with the DOM
- in every single browser window
  you can type DOCUMENT (contains a tree)

*/

// The Document inteface represents
// any web page loaded in the browser
// and serves as an entry point into the 
// web page's content, which is the DOM tree.
// The DOM tree includes elements such as 
// <body> and <table>, among many others. 
// It provides functionality globally to the
// document, like how to obtain the page's 
// URL and create new elements in the document

// The Document interface describes the common
// properties and methods for any kind of document. 
// Depending on the document's type (e.g. HTML, XML, SVG,
// ...) a larger API is available: HTML documents, served
// with the "text/html" content type, also implement the 
// HTMLDocument interface, whereas XML and SVG documents
// implement the XMLDocument interface

// console.dir(document)
// 
// shows the document object model
// this is where we start with everything

// Everything being done was being 
// done by typing Document.getElementById
// there are all of these methods and properties
// to manipulate and view content within the DOM

// document.images
// in the developer console
// we would see everything on 
// the page

// if trying navigate manually 
// or trying to understand it all
// it is completely overwhelming
// whether a file or website 
// stored in one object called the 
// the document

// We will take a look at the first
// batch of methods
// 1. Select
// 2. Manipulate 
//
// We could select a form and add two 
// new buttons to it
// Selecting a button and add highlight
// or text
//
// SELECTING 
//
// - getElementById
// 
// document.getElementById('BEEAR');
// null
// --- there isn't an element with that ID
// 

// SELECTING 
// 
// - getElementById
// - getElementsByTagName
// - getElementsByClassName

// document.getElementByTagName('input');
// we won't get a single element back
//
// document.getElementByTagName('Input');
// HTMLCollection(3) [input, input, input]
// above looks like an array
// but it is not an array
// there is an HTML input element
//
// the same thing would be if we said
// document.getElementByTagName('p');
// HTMLCollection(2) [p, p#main, main: p#main]
// > 0: p
// > 1: p#main
// > length: 2
// > mmain: p#maain
// > __proto__: HTMLCollection
//
// if we try with 3 li elements 
// we get three li objects
// 
// document.getElementByTagName('li');
// > HTMLCollection(3) [li.special, li, li.special]
// > document.getElementsByTagName('');
// HTMLCollection []
// we get an empty collection back
// if try it with one element 
// we get a collection with 1 element in it
// we never get one element back on it's own 
// we get a collection back

// What is this HTMLCollection?
// It is an array like object but it is 
// not an array - collection of objects in the DOM
// but we can do some array-ish things
// 
// const inputs = document.getElementsByTagName('input');
//
// inputs[0]
// <input type="text" placeholder="Bear Name">
// 
// inputs[1]
// <input type="password" placeholder="password">
//
// inputs[2]
// <input type="submit">
//
// inputs[3]
// undefined
//
// undefined
// inputs.pop()
// Uncaught TypeError: inputs.pop is not a 
// function 
// 
// inputs.)
//
// for(let input of inputs) {console.log(input)}
// <input type="text" placeholde="Bear Name">
// <input type="password" placeholder="password">
// <input type="submit">
// undefined

// document.getElementsByClassName() - we will
// get an element(s) back in a collection

// document.getElementsByClassName('header');
// HTMLCollection [h1.header]
//    > 0: h1.header
//      length: 1
//    > ___proto___: HTMLCollection
// 
// document.getElementsByClassName('special');
// HTMLCollection(2) [li.special, li.special]
// again this is an object
// 
// document.getElementsByClassName('chickenssss');
// HTMLCollection [] 
// won't work as there is no such class name that exists
//
// document.getElementsByClassName('main'); 
// HTMLCollection []
//
// getElementsByClassName uses different criteria
// compared to getElementsByTagName
//
// if I wanted to select one element and further
// search within that element - lets say 
// I had the class of special on one part of the page
// document.getElementsByClassName('special');
// > HTMLCollectoin(3) [p.special, li.special, li.special]
// document.getElementsByTagName('ul')[0]
// undefined
// ul
// ul.getElementsByClassName('special');
// HTMLCollection(2) [li.special, li.special]
// narrowed it down to the UL with special
// 
// ul.getElementsByTagName('li');
// > HTMLCollection(3) [li.special, li, li.special]
// now we get three elements because there
// are three li's within the UL

// querySelector
// - A newer, all-in-one method to select a single element
// Pass in a CSS Selector

// Finds first h1 element:
document.querySelector('h1');

// Finds first element with ID of red: 
document.querySelelctor("#red");

// Finds fist element with class of 
document.querySelector('.big');

// query selector works within Internet Explorer

// querySelector gives us the first match
// versus getElementsByTagName which gives
// us an array like object

// when we use querySelector we have to be more
// specific and pass in the CSS specific style
// selector

// can save to a variable with querySelector
// which does have an object

//  could say the first class with li
// document.querySelector('li.special');


// COMMUNICATING WITH EVENTS

/*
Comment Events --- 

- Clicks
- Drags
- Drops
- Hovers
- scrolls
- Form Submission 
- Key Presses
- Focus / Blur
- Mouse Wheel 
- Double Click
- Copying
- Pasting
- Audio Start
- Screen Resize
- Printing
*/

// All of these events follow a similar pattern
// even though the triggers are different

// We are listening for event on a given thing or
// with a given thing and then we have the event itself
// called the event type 
// then we have the code that we want JavaScript to run
// we might listen or weight for a click on an item
//
// When a user clicks return or types return then 
// we have some code that we want the user to run 
// 
// ex. 
//
// the thing  event type  the code to run
//  button    click       change the color
//  input     hits return   get search
// image      mouseover     display the image caption
//
// we have to find an element, event type, and code
// we want to run when we want to make this happen
//
// two events you should probably not use
// often used in bad tutorials
//
// The first syntax involves putting our code in the element
// this is not a good idea, could be super cluttered HTML
// we don't want to do this 
// Normally if you were to use inline events you 
// would write a function and call the function 
// but it is not worth doing!

// If we have another button without the onlick nothing happens
// we are simply registering an event listener
// if we added an onclick to to a second button
// we would get to events that are completely different
//
// if we want to use these events inline we us them with
// with the start of 'on' like 'onclick'
// we don't want to put all this JavaScript in our elements
// 

//

// How do we attach event listeners to multiple elements?
// 
// How do we make every up vote on Reddit and make it 
// do something, we don't hardcode it, we create a loop
//
// Each time clicking getting an event that is firing
// This isn't being done manually where they are
// calling addEventListener on ever element
//
// Calendar with every single day on a calendar 
// and there is functionality 


// ASYNC JS, PROMISES, & REQUESTS

// Our main goal is to make each 
// HTTP requests from javascript 
// from the client or from the 
// browser to load data from an 
// an API 

// If you make single page apps
// and in the projects that we 
// build late on there's at least
// a couple examples where we're
// working with HTTP requests in 
// the browser 
// 
// But before we do that we'll 
// talk about promises and how to
// use promises to manage 
// asynchronous code and make
// our life easier
// --- but before we do that
// we're going to talk about
// asynchronous code or asynct
// javascript and what it actually
// means and in order to do that
// we need to understand how 
// javascript works behind the
// At least we don't have to go
// crazy into detail
//
// But we need to understand the basics
// so that's where we're going to start
// we will talk about something called 
// 'the Call Stack' 
//
// 'CALL STACK' 
// The mechanism the JS interpreter uses to keep
// track of its place in a script that calls 
// multiple functions
//
// How JS "knows" what function is currently being
// run and what functions are called from within that
// function, etc.
//
// If your functions make up an entire book
// the 'Call Stack' makes up the book mark
// to figure out where you are or keep 
// track of your current place
//
// Call are what calls are being made and
// what are waiting to be called back
// the stack has to do with the data structure
// in the computer science called a stack 
// Stack is a very simple data structure 
// All you need to know is that just like a 
// a stack of books on your desk or a stack of 
// plates on your sink the last thing that you 
// put in is going to be on top 
// and that would be the first thing that you 
// remove --- so the last thing that was added
// the most recently placed item in our case this 
// apple on top will be the first thing out you don't 
// grab from the bottom from a stack of papers
// -- you don't grab backwards or from the bottom
// of the stack of papers first!
//
//
// HOW IT WORKS 
// 
// - When a script calls a function, the interpreter
// adds it to the call stack and then starts carrying
// out the function. 
// - Any functions that are called by that function
// are added to the call stack further up, and run 
// where their calls are reached.
// - When the current function is finished, the 
// interpreter takes it off the stack and resumes
// execution where it left off in the last code listing
//
// 
//
// const multiple = (x, y) => x * y;
// const square = (x) => multiply(x, x);
//
// const isRightTriangle = (a, b, c) => {
//    return square(a) + square(b) === square(c);   
// };
//
// isRightTriangle(3, 4, 5); 
//
//
// The Call Stack Below
//
//    multiply(3,3) ---> doesn't call 
//                       any other functions
//                       and returns 3 * 3 or 9
//           9           first thing in is the last
//                       out --> popped off first
//    square(3)
//              
//           9     ----> returns 9 so this popped off
//                       the stack         
//       multiply(3,3)
//
// isRightTriangle(3, 4, 5)
// << square(3) >> + square(4) === square(5)
//
// 
// isRightTriangle(3,4,5)
// 9 + square(4) === square(5)
//
// then is there another function call? yes
// 
// square(4)
//    multiply(4,4) <---- added to the top of the call
//                        stack
//                        (more like a data structure)
//    multiply(4,4) = 16 <---- added to the top of the
//                             stack
//    16 is returned and so multiply(4,4) is
//    removed from the top of the stack
//    square(4) = 16 < ---- this is returned and
//                          removed from top of stack
//     isRightTriangle(3,4,5)
//     9+16 === square(5)
//     
//      square(5) <------ added to top of call stack
//         multiply(5,5)
//      multiply(5,5) <---- added to top of call stack
//          25      returns 25
//                  and is multiply(5,5)
//                  popped off the top
//       
//      isRightTriangle(3,4,5)
//      9 + 16 === 25  true
//      popped off stack and call stack is empty
//      
//      how we can see with chrome dev tools
//      













