const repeat = (str, times) => {
  let result = '';
  for (let i = 0; i < times; i++) {
    result += str;
  }
  return result;
};

const scream = (str) => {
  return str.toUpperCase() + '!!!';
};

const getRantText = (phrase) => {
  let text = scream(phrase);
  let rant = repeat(text, 8);
  return rant;
};

const makeRant = (phrase, el) => {
  const h1 = document.createElement('h1');
  h1.innerText = getRantText(phrase);
  el.appendChild(h1);
};

makeRant('I hate mayonnaise', document.body);
// /makeRant('if you have to cough, please cover your mouth', document.body);

// Call stacks are needed in order
// to help explain and help you understand
// how synchronous code works in JavaScript 

// JS IS SINGLE THREATED 
// 
// -- What does that mean?
// At any given point in time, that
// single JS thread is running at 
// most one line of JS code.
// --- meaning it is not multi-tasking
// it does one thing
// humans are multi-threated in many ways
// they are capable of doing multiple tasks
// at one time
// with JavaScript one thing is being run at a time
// and this has a whole bunch of implications
// 
// console.log("I Happen First!");
// alert('Hi there!');
// console.log("I Happen Second!");
//
//
//  Can you please send me all movies that match
//  the query "Bat"?
// 
// We make a request from the browser by writing
// some JavaScript code asking for - let's say 
// data from a movie API that -- this takes time
// and it goes by sending a request to a server
// that server may or may not be online
// -- we may have a valid endpoint or we may not
// but even if everything goes great it still takes
// time for the server to respond to your request
// 
// If we're looking for movies that match the query
// bat be 80 it will search through its database find
// the revelant information and then send a response
// back 
//
// IS OUR APP GOING TO GRIND TO A HALT?
// 
// Does it just stop and nothing else happens
// like what we had over here where this alert
// potentially takes a long time for a user to 
// finish -- the user may not notice it
// or even if it's a split second your code is 
// just doing nothing right now.
// Is this what happens when we make a request
// when we are fetching data from an API we're trying
// to make a request to?  Any time we are involved 
// with fetching from an API or communicating with an
// API we are communicating with a database or server
// that takes time - that takes time - is our app
// just going to sit there and do nothing?
// And is a user just kind of sit there waiting
// for something to happen?
// The answer is No
//
// JavaScript has a couple tricks up it's sleeve
// to get around this single threaded ness of 
// JavaScript
//
// JavaScript is at most doing one thing at a time
// it's not multi-tasking or doing three things 
// at once
// It's important to understand this to understand the 
// workaround 
// 
// 
// WHAT HAPPENS WHEN SOMETHING TAKES 
// A LONG TIME?
// 
// const newTodo = input.value; get user input
// saveToDatabse(newTodo); this could take a while
// input.value = ''; reset form
// 
// it could take a long time or a short time
// depending how long the request takes
// to fetch data from the database
// 
// Does the input field not print out anything?
// or not indicate any value to the end user?
//
// Fortunately.... we have a workaround
//
// console.log('I print first');
// setTimeout(() => {
//    console.log('I print after 3 seconds');
// }, 3000); 
// console.log('I print second');
// 
// the set call back will happen 
// after the set time of 3000
// 
// How does JavaScript know or set
// a timer for three seconds?
// If it can only do one thing at a time?
// 
// With an alert between to console log 
// statements JavaScript is fully focused
// on the alert 
//
// Why if we replace this alert with 
// a setTimeout(function(){
//  console.log("I happen third");
// }, 3000)
//
// nothing different is happening except
// having the function called later
//
// We could have all the other functions
// run first before executing the setTimeout
// to delay a specific function from occurring
//
// The trick is the browser itself is doing
// the work, and not the JavaScript
// and is not the same thing as the browser
// the browser like Chrome, Safari, IE
// all these browsers are written in C++
// and the browser is good at doing things
// at the same time or multi-tasking 
// and when it's done it reminds JavaScript
// it's your turn again
// 
// OK BUT HOW?
//
// - Browsers come with Web APIs that
// are able to handle certain tasks in 
// the background (like making requests
// or setTimeout)
// 
// - The JS call stack recognizes these
// Web API functions and passes them off
// to the browser to take care of
// 
// - Once the browser finishes those
// tasks, they return and are pushed
// onto the stack as a callback
//
// JavaScript doesn't get held up
// because it passes off the setTimeout
// task to the Web API of the browser
// 
// Why if we replace this alert with 
//  console.log("I happen first"); <--- JavaScript Task
// a setTimeout(function(){ <---- Hey Browser, can you set a timer for 3 seconds?
//  console.log("I happen third");  <----- Okeedokee says the browser
// }, 3000);  <-----|
//  console.log("I happen second"); <--- JavaScript continues on
// Now the browser says time's up!! to Javascript, make
// sure you run that callback now. Places that function 
// back in the call stack, the browser and it's web APIs handle
// all of that 
// 
// I print first!
// I print second!
// I print after 3 seconds!
//
// setting a timeout, or adding an event listener
// to let's say a 'div' or 'li' javascript isn't going
// to just listen nonstop to see if something has been
// clicked that's handed off to the browser that
// decides when to add the call back or function to the 
// call stack
//
// A good website to run this code on is 
// latentflip.com/loupe/
//
// call backs are essentially added to the callback queue
// 



