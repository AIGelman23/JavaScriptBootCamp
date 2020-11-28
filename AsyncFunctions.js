// At their core
// async functions are just syntactical sugar
// for Promises with a much cleaner syntax

/*
function getData(){
  const data = axios.get('https://swapi.dev/api/planets/')
  .then((data) => {
    console.log(data);
  });
  console.log(data);
} 
*/

// In a regular function if we want to 
// console.log something like data and 
// use getData() within the dev console 

// we don't have access to that resolved
// data, it would be nice if javascript was
// synchronous meaning that this could would 
// not run until this finished
// but instead we have to chain on .then() and then
// console.log(data) and then can see what we get 
// back
// 
// If we have code that relies on asynchronous 
// operation like an axiom state get method call
// we need to use .then() assuming it returns a promise
// otherwise we would pass in a callback
// kind of obnoxious that we have to worry about
// callbacks and .then() and that is the entire point
// of the async and await keywords --- meaning there
// are two new keywords

// - 1. Async
// - 2. AWait

// or two pieces of the puzzle to make this work
// the function will therefore look like a synchronous
// function (behind the scenes there will still be 
// promises being resolved and .then()s thanks to the 
// syntactical sugar of async and await)
// makes it easier and cleaner to work with promises


function getData(){
  const data = axios.get('https://swapi.dev/api/planets/');
  console.log(data);
}


// The ASYNC keyword

// - The Async function always returns a promise
// - If the function returns a value, the promise
// will be resolved with that value
// - If the function throws an exception, the promise
// will be rejected

// We use async in front of a function declaration
// We use it to designate a certain function as an 
// async function and the key thing to understand
// that when you put it in front of a function 
// it behaves differently meaning it returns a promise
// (not having to write new Promise for example)
// 
// async function greet() { return "HELLO!!!"};
// 
// Now when we call greet() we get a promise that
// was returned and resolved instead of just a string
// with a value of "HELLO!!!"
//
// so we could do 
// 
async function greet() {
  return "Hello!!!";
}
greet().then((val) => {
  console.log("Promise Resolved With: ", val);
});

// we can chain on a .then() because greet is 
// now going to return a promise
//
// 

async function add(x, y) {
  if(typeof x !== 'number' || typeof y !== 'number') {
    throw 'X and Y must be a numbers!'
  }
  return x + y;
};

add('e', 'r').then(val => {
  console.log("Promise Resolved With: ", val);
})
.catch(err => {
  console.log("Promise Rejected With: ", err);
});

// how do we return a promise that is not resolved?
// (if things go well we return a value with "Hello" or
// "or 9", if we want to return a rejected promise we 
// must throw an Exception error that proise will be
// considered "rejected"

/*
async function uhOh() {
    throw new Error ('oh no!');
}

uhOh();! */

// AWAIT keyword

// - We can only use the await keyword 
// inside of functions declared with async
// - Await will pause the execution of the 
// function, waiting for a promise to be 
// resolved

// without having to run a .then we can run 
// an asynchronous operation without having
// to nest things or callbacks

// function getPlanets() {
//   return axios.get('https://swapi.dev/api/planets/');
// }

// getPlanets().then(res => {
//   console.log(res.data);
// });

// easier wait is to declare async function 

// async function getPlanets() {
//   const res = await axios.get('https://swapi.dev/api/planetser/')
//  console.log(res.data);
// };

// getPlanets();

// JavaScript will wait until the promise is resolved
// the value that is resolved would be stored in this 
// res variable for us to use on the next line
// for res.data
// hides .then() and callbacks but makes it appear synchronous

// What if that asynchronous operation is rejected?
// AXIOS should reject that promise, without a Catch 
// or Error Handling the error is not caught to 
// tell the user something went wrong 

// getPlanets().catch((err)=> {
//  console.log("Error!");
//  consolelog(err);
// });

/*

async function getPlanets() {
  try {
    const res = await axios.get('https://swapi.dev/api/planetser/')
    console.log(res.data);
  } catch(e) {
    console.log("IN CATCH!", e);
  }
};

getPlanets();

*/

// async function getPlanets() example
// shows we can be more detailed in our 
// error handling events

// multiple awaits can be added 
// before proceeding to the next
// function in order to 
// reassure that a promise has 
// been successfully resolved
// if it is resolved, move on 
// to the next function 
// 
// without a try{} catch{} 
// we can add a .catch((err) => {})
// otherwise we will have an uncaught exception
//
// making multiple fetch requests that depend
// on one another using async and await makes
// it much easier to read and understand what
// is going on 


// Parallel Vs Sequential Requests

/*
async function get3Pokemon(){
  const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1/');
  const poke2= await axios.get('https://pokeapi.co/api/v2/pokemon/2/');
  const poke3= await axios.get('https://pokeapi.co/api/v2/pokemon/3/');
  console.log(poke1.data);
  console.log(poke2.data);
  console.log(poke3.data);
};

get3Pokemon(); */

// These are not being sent off in parallel or together
// One is going and then returning, in sequence one
// after the other
// We don't need these to be in sequence because
// we are not dependent on one request or promise to be 
// fulfilled to then get another request to work
// 
// it would have to be in sequence if an url is dependent
// on the key 'ability' - the examples we see above 
// are independent endpoints, but to have a request
// go in parallel we would have to do the following:

// SEQUENTIAL
// There is a massive difference 
// We are sending off these requests which each return a promise 
// and they are pending (all three) but then we 
// say await the response that comes back 
// but the requests are being sent off as fast as
// javascript can send them back at the same time
// poke1.data doesn't exist as poke1 is the promise
// we would get three undefines 
// above for ex.  const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1/');
// beginning with axios on down in the statement
// that is our promise, whereas poke1, poke2, poke3 are 
// our promises in the below example

/*
async function get3Pokemon(){
  const poke1 = axios.get('https://pokeapi.co/api/v2/pokemon/1/');
  const poke2 =  axios.get('https://pokeapi.co/api/v2/pokemon/2/');
  const poke3 =  axios.get('https://pokeapi.co/api/v2/pokemon/3/');
  await poke1;
  await poke2;
  await poke3;
  console.log(poke1.data);
  console.log(poke2.data);
  console.log(poke3.data);
};

get3Pokemon();
*/

/*
async function get3Pokemon(){
  const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1/');
  const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2/');
  const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3/');
  console.log(prom1);
  const poke1 = await prom1; // await this promise
  const poke2 = await prom2; // await this promise
  const poke3 = await prom3; // await this promise
  console.log(prom1);
  // stored values in poke1, poke2, poke3
  console.log(poke1.data);
  console.log(poke2.data);
  console.log(poke3.data);
};

get3Pokemon();
*/

// These responses are in parallel, and they are 
// coming back lightning quick 


 function changeBodyColor(color, delay){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.body.style.backgroundColor = color;
        resolve();
      }, delay);
    });
};

changeBodyColor('teal', 1000); 


//SEQUENTIAL - took 4 seconds - happened in sequence
/*
async function lightShow(){
  await changeBodyColor('teal', 1000);
  await changeBodyColor('pink', 1000);
  await changeBodyColor('indigo', 1000);
  await changeBodyColor('violet', 1000);
}*/

//PARALLEL - took 1 second - all happened at same time
async function lightShow(){
  const p1 = changeBodyColor('teal', 1000);
  const p2 = changeBodyColor('pink', 1000);
  const p3 = changeBodyColor('indigo', 1000);
  const p4 = changeBodyColor('violet', 1000);
  await p1;
  await p2;
  await p3;
  await p4;
}

lightShow();

// Promis.all method

async function get3Pokemon(){
  const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1/');
  const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2/');
  const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3/');
  const results = await Promise.all([prom1, prom2, prom3]);
  printPokemon(results);
};

function printPokemon(results){
  for(let pokemon of results){
    console.log(pokemon.data.name);
  }
};

get3Pokemon();

// instead of using all these variables prom1 to prom 3
// we can use a Promise helper method called 
// Promise.all
// Promise.all accepts an array of Promises

// This promise for Promise.all is resolved
// when it's own promises are resolved 
// then we are awaiting Promise.all to be resolved
// take that resolved value and it's now stored
// in the results variable
// 
// Then we can print out something for reach each one
// using maybe a print function 

// Much nicer then awaiting individual promises, 
// instead we can await that Promise.all 
// and then move on
// 
// Using Async and Await makes the code appear
// synchronous but it is still behaving asynchronous

