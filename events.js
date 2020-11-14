/*
const btn = document.querySelector('#clicker');

btn.onclick = function(){
  console.log('You clicked me! Go away!');
}

btn.ondblclick = function () {
  console.log('Double Click!');
}

const button = document.querySelector('#button');

button.onclick = function () {
  console.log('You clicked me!');
};

*/

// We can overwrite the btn, with another assigned query 
// selector being assigned an onclick event 

// addEventListener
// Specify the event type and a callback to run 
/**
 const button = document.querySelecto('h1');

 button.addEventListener('click', () => {
   alert("You clicked me!");
 })

This addEventListener will attach as many events
as we want to a given element


 */

 const btn = document.querySelector('#clicker');

 btn.addEventListener('click', function() {
   alert("clicked!");
 });

 btn.addEventListener('click', function() {
  console.log("second thing");
});

// we are not setting the on click property or having 
// it set to anything, we are attaching an event listener
// where we can assign multiple events

btn.addEventListener('mouseover', function() {
  btn.innerText = "Stop Touching Me!";
});

// here we are just listening for the mouse over and
// not listening to whether we have moused out or 
// are no longer mousing over an element

btn.addEventListener('mouseout', function() {
  btn.innerText = "CLICKER";
});

// now will change back to previous text 

// we can use scroll listener to listen to a 
// scroll on the entire window, we can also
// listen for scrolls within a single element
// and add a scroll event to that
// an example would be an iframe or container of 
// some sort

window.addEventListener('scroll', function() {
  console.log('stop scrolling!');
});

// will show up in the dev console for every scroll
//
// there is some scroll position you will want to use
// to trigger something to happen like an animation
//
//  inline or through javascript without addEventListener
//  does not have as much flexibility
