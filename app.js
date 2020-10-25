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




