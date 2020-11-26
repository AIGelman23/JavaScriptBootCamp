// HTTP Requests 
//
// XML HTTP 
// FETCH 
// AXIOS 

// We are goin to see how we are able 
// to use JavaScript to load movie data 
// logging someone into Facebook
// we have to understand asynchronous javascript
// as these takes time, it matters that it is not
// instantaneous
// 
// We will start with XMLHTTP requests which 
// are more of the hard to remember way and 
// is standard across all browsers
// 
// A new modern much simpler syntax exists
// called Fetch
//
// There is a popular library called AXIOS 
// that helps us make requests - it's a third
// party script that just simplifies the process

// Before we get into any of these methods of 
// making requests we must talk about something 
// called Ajax
// Ajax stands for asynchronous JavaScript and 
// XML which is kind of a misnomer because these
// days most of the time we don't use XML but
// we work with JSON

// We used to have one standard form or flow 
// of getting data from a server which included
// a page refresh 
//
// MDN for example is not a single page application
// If we search for something for example 
// such as 'react' in the search or magnifying glass
// and then hit enter we are directed to another pasge
// or URL and that original page actually reloads.
//
// What is happening here is the browser is sending 
// a request for a new webpage and it's going off to one
// of MDNs servers depending on the URL being requested 
// by then hitting enter after attempting to search.
// This URL is then received or the request is received 
// by the server itself (whereever it is) and it compiles 
// a new page for us including whatever html, css, and relevant
// JavaScript -- it sends the entire page back and our
// browser refreshes and then we see an entirely new page
//
// this is in contrast to the caniuse website where we type
// in a term or key word like 'gradient' - the page never
// reloads or we don't end being taken to a new page 
// there is communication with the server, but it is happening 
// behind the scenes which doesn't involve a entire page refresh
// and we are not getting a new web page. We are asking still 
// for data from some server and it comes back and then 
// new elements are added to the page and if we search for something
// else such as 'transform' we can see what happens as nothing actually 
// moves or the paging is not requesting an entirely new page
// instead data is being loaded into elements on the same page
// on the screen.

// This is what Ajax is all about, it's about using these
// requests made available through JavaScript asychronously 
// to load some data from a server or to save data to a server.
// We are communicating with data behind the scenes and not in 
// between page loads, like where we search or make a request 
// and search for something else
// 
// In between what a user sees and the page refreshing 
// that is when communication is occuring with the server
// here on caniuse website that communication is occuring 
// while we are on the same page in the background
// the general process:
//
// A request is sent based off of keyboard events
// (there are some kind of debounds when typing in 
// a phrase as it is not sending a request every time
// we select a letter, it is waiting until we finish 
// a word -- sending a request based off of keyboard input
// from the end user and in the background this is occurring)
// we get some response from the server and the response
// normally these days is in the form of what is called
// 'JSON' and in the past it had been XML and what was more
// commonly used and where the term Ajax comes from, but these
// days almost everyone uses JSON
// 
// JSON is just a format for sending data
// imagine you have data representing all of 
// this information that we see on the caniuse
// page -- the elements themselves aren't being 
// sent as HTML or the CSS is not being sent, all 
// that is being sent is the text and other information
// that might not show up, such as what is supported
// or what might not be supported and is being sent as text
// but rather than text it is turned into this JSON notation 
// or is a way of representing data or a protocol for communicating
// between servers or a protocol for formatting data
// and sending it to another server or to another browser
// somewhere --- 
// 
// Under the Dev Tools in Chrome > Network tab 
// we can see the requests that are happening
// behind the scenes such as if we search for
// the term or keyword 'spread' - we will see 
// a collection of activity which represent
// different requests that have been sent
//
// If we goto XHR - will show us the requests 
// that have been sent to the caniuse server 
// such as the Name or query.php?search=spread
// and Headers or information that was sent back
// or the data that was sent back
// ex: 
// "mdn-css_properties_box-spread_spread_radius"
// which represents 
// "CSS property: box-shadow: Spread radius"
// as a result shown on the page
// and then 
// "mdn-javascript_operators_spread_spread_in_destructuring"
// which shows up as the next search result that 
// was sent back from the server, but this is not
// all the information that was sent back from 
// the server -- there is a second request sent
// which is the core of the browser support chart
// that is created 
//
// We get the titles back as one XHR object
// split up into titles 
// and we get another object in JSON that 
// is returned by the server which is a 
// way of sharing data between a server 
// and a browser which we then use in JavaScript
// it is easy to take JSON and turn it into JavaScript
// and then do something with it
//
// So we the website sends a request whenever
// we type something in the search like 
// text-dec
// and XHR shows ---
// query.php?search=text-de 
// and thne this information is then 
// parsed via JavaScript, JavaScript then 
// takes this information and turns it into 
// elements on the web page or manipulates the 
// DOM --- all happening behind the scenes
// some event triggers it like typing or clicking
// a button - a request is sent and life goes
// on in the browser while this request is gone
// or while waiting for a response - JavaScript
// doesn't sit around doing nothing, the browser
// sends that request and information comes back
// JavaScript takes the reigns to decide what to do
// or display content (ex. add some classes, make 
// some tables, add headers with H3s, puts them in the 
// correct order and is ended with the final page 
// result)

// name - todd
// email - todd@gmail
// age - 89 
// 
// the above is just a format or structure
// like XML or JSON 
// 
// XML is very very broad or almost like the parent
// of HTML - it looks like HTML except the element 
// names are very different and aren't actually elements
// it's basically grouping content and adding meaning to 
// our data 
//
// <name>
//   <first>Todd</first>
//   <last>Smith</last> 
// </name>
// <email>Todd@gmail.com<email>
//
// HTML represents the structure of a web page
// both HTML and XML or encoding information 
// so that it can be transferred from one machine
// to another or across the Internet
// XML -- just a broad way of structuring data
//
// In JavaScript we have a way of taking 
// information from something like the XML above
// and turning it into a JavaScript object
//
// { 
//  name: {
//     first: 'Todd',
//     last: 'Smith'
//   },
//  email: 'Todd@gmail.com
// }
//
// this would be an actual JSON or JavaScript 
// object we can use that we structure based
// on the the XML object, and JavaScript can 
// parse the XML object and turn it into 
// actual JavaScript so that we can then use it
// but there is another format called JSON 
// which is extremely common these days 
// 
// JSON 
// - Java
// - Script
// - Object
// - Notation 
// 
// ex. 
/* 
  {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016, 
    "secretBase": "Super tower",
    "active": true, 
    "members": [
      "Molecule Man", 
        "Madame Uppercut",
        "Eternal Flame"
    ]
  }
*/

// JSON is not the exact same 
// as JavaScript even though it shares
// some similarities and is another
// format for sending data 
// there are some key differences such as 
// every key in JSON needing to be a string
// with quotes and we use colons : inside of 
// an object, we can have numbers and booleans
// but we cannot have more complicated things
// such as storing functions as an example
// --- it's very close to JavaScript ! not the same
//
// There is the SWAPI API at swapi.co 
// where we can have something like 
// https://swpai.co/api/starships/9/ and 
// if we open up the dev tools 
// under the XHR tab we will see that a request
// is sent under 'Name' and then we get 
// back our response as a JSON object

// To take XML as seen above and parse it 
// to JSON we would have double "" quotes
// around every key and could still have 
// single quotes around the corresponding
// value(s)

// If we have a function from JavaScript we
// are trying to turn into JSON that becomes
// problematic, but there are ways around this

// JSON is a format for sending data, 
// and so is XML 

// AJAJ is asynchronous, javascript, and, json 
// some APIs will respond with JSON when you 
// send a request to the API itself but you 
// could write a python application that
// communicates with that API which receives
// JSON and turns it into valid python and
// the same would go for ruby 
// JSON is not something you can ONLY use with
// javascript -- you can interact with it 
// for any other programming language

// jsonformatter.curiousconcept.com 
// allows you to check if you have valid JSON
// it is a JSON validator
// showing whether you are following the exact
// rules of JSON

// XMLHttpRequest 
//
// The "original" way of sending requests
// via JS 
// 
// Does not support promises, 
// so there are a lot of callbacks!
//
// There is a lot of capitalization!
//
// The syntax is also clunky and 
// can be difficult to remember

// XMLHttpRequest - objects within the browser
// we can create that have different methods
// that we can use to fetch data from an API
// they basically generate an HTTP request
// and is confusing by the name and is a relic
// from when XML was the standard
// We can use XMLHttpRequests also known as 
// XHRs to fetch any sort of data from an API
// and this doesn't just have to be XML 
// again there are no support for Promises
// so we end up with many many callbacks 
// if we have nested requests
// things where we have one request we get 
// information back but then need a second
// request which we mimicked with a fake HTTP
// request earlier
//
// No one likes the syntax of XHRs 
// very hard to remember!!

// An example of an XMLHttpRequest ---
//
// const myReq = new XMLHttpRequest(); 
//
// myReq.onload = function() {
//    const data = JSON.parse(this.responseText);
//    console.log(data); 
// };
// myReq.onerror = function(err) {
//  console.log('ERROR!, err);
// };
// myReq.open('get', 'https://icanhazdadjoke.com/', true);
// myReq.setRequestHeader('Accept', ' application/json');
// myReq.send();

// there is a branching for either request success
// or failure 
// if successful the myReq.onLoad function will run
// if not the myReq.onerror function will run

/*
  Template:

  function reqListener () {
    console.log(this.responseText);
  }

  var oReq = new XMLHttpRequest(); 
  onReq.addEventListener("load", reqListener);
  onReq.open("GET", "https://www.example.org/example.txt");
  onReq.send();
*/

const firstReq = new XMLHttpRequest(); 
firstReq.addEventListener('load', function() {
 console.log('FIRST REQUEST IT WORKED!!!');
 const data = JSON.parse(this.responseText);
 const filmUrl = data.results[0].films[0]; 
const filmReq = new XMLHttpRequest();
 filmReq.addEventListener('load', function() {
  console.log("SECOND REQUEST WORKED!!!");
  const filmData = JSON.parse(this.responseText);
  console.log(filmData);
 })
 filmReq.addEventListener('error', function(e) {
  console.log("ERROR!!", e);
 })
 filmReq.open('GET', filmUrl);
 filmReq.send();

// for(let planet of data.results){
//   console.log(planet.name);
// };
  // console.log(firstReq.responseText); 
  // 'this' keyword can't be used in an arrow function 
  // we would get undefined if we console log this.responseText


});
firstReq.addEventListener('error', () => {
  console.log('ERROR!!!!!!');
});
firstReq.open('GET', "https://swapi.dev/api/planets/");
firstReq.send();
console.log("Request Sent!");

// myReq.onload = function() {
//    const data = JSON.parse(this.responseText);
//    console.log(data); 
// };
//
// the way that you access this data is through
// this.responseText
// 'this' refers tot the request itself

// firstReq.responseText reveals the JSON data
// this JSON object is again NOT considered JavaScript

// ----
// we can loop over and grab the names of the planets 
// we can then create elements and then append this 
// information to elements to give a visual overview
// to individuals

// When we make requests that are dependent on one another 
// we have to start chaining requests together 

// If we look at the data we get back it includes
// residents and films which are actually just
// references to other API endpoints
// So if we wanted to take the first planet and look
// at the first resident of that planet we would send
// another request to this endpoint, however, 
// we first need to wait for this request to come back
// we can have a second request gather a individual(s)
// living on a planet(s)

// This is a you URL that we can send a request to 
// get information http://swapi.dev/api/films/1/ 
// and it looks like this is film/1 which is 
// A New Hope
// so now we can send a request to this url

 // selecting the first film and planet that it appears in
 // using that film's URL and so we couldn't make the
 // the second request until the first one is completed
 // often you would put a second request if the 
 // first one fails

 // things are really messy with the use of XHRs 
 // they are very difficult with all the nesting

 