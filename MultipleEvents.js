const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'indigo',
  'violet'
];

const h1 = document.querySelector('h1');
const changeColor = function(evt){
   console.log(evt);
   h1.style.color = this.style.backgroundColor;
}
// generally inside of the event handler
// this will refer to whatever we are attaching 
// our event listener to

const container = document.querySelector('#boxes');

for(let color of colors) {
  const box = document.createElement('div');
  box.style.backgroundColor = color;
  box.classList.add('box');
  container.appendChild(box);
  box.addEventListener('click', changeColor);
}

// EVENT OBJECT 
// When the user clicks on a box we are never
// executing change color ourself it's being called
// for us and it's being passed a value or event object
// sometimes extremely useful to access to
// if we were to add in a parameter like 'evt'
// we can see what it contains
// the event object as as seen below has access
// to things like the path taken in the html document
//
// MouseEvent {isTrusted: true, screenX: 271, screenY: 242, clientX: 175, clientY: 139, …}
// path: (6) [div.box, section#boxes, body, html, document, Window]
// timeStamp: 4215.689999997267
//

document.body.addEventListener('keypress', function(e) {
  console.log(e);
});

// Below an example of what is shown in the Event Object 
// when a key press is made within the document body of the HTML document
// KeyboardEvent {isTrusted: true, key: "h", code: "KeyH", location: 0, ctrlKey: false, …}
// 
// Often we need to know which key is pressed and that event object
// stores the key that was pressed
// This would be a keyboard event and not a mouse event
// 
// If pressing Shift it does not fire, but using Shift + R 
// the event does fire
// 
// If needing, to find what key was pressed, what time
// there is a bunch of pieces of information to use
// within that Event Object

