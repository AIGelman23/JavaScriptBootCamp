// Prototypes are the mechanism by which 
// JavaScript objects inherit features from one 
// another. In this article, we explain how prototype
// chains work and look at how the prototype property 
// can be used to add methods to existing components

// ___proto___: array[0]

// An array has a whole bunch of different methods
// under methods there are so many Array types
// that start with Array.prototype

// [1, 2, 3].push(4)

// const arr = [1, 2, 3];

// undefined

// You can have a method that you add to the Array 
// itself such as 
//
// arr.sing = function () {console.log("LA LA LA LA")};

// The individual array has a method then called 
// sing 
// Remember: Arrays are objects in JavaScript
// 
// When we call 
// arr.push(5);
// we don't see the push method 
// when checking under arr properties in the dev console
// they are all under the property called 
// __proto__
//
// it is a property that references the array prototype
// it is the template object that represents the array 
// with different available properties
//
// __proto__ is a reference to this blue print object
// contains all methods, and we can simply access
// arr.includes(2) for example 
// includes() is defined on this __proto__ or prototype 
// object
// each array created has a reference to that prototype
// blueprint with properties
// 
// we can also see this with const body = document.body;
// console.dir(body);
// certain properties show specific to this body, 
// but it also has it's own __proto__ or prototype
// which is __proto__: HTMLBodyElement and there 
// are different methods and properties that correspond
// to this HTMLBodyElement template 
//
// if we look at Array.prototype not an individual 
// instance of an array, we can see all the prototypes
// properties

// prototypes are template objects and contain 
// typically a bunch of methods and we can create 
// multiple objects that share the same prototype
// 
// there is a String type prototype
//
// String.prototype.grumpus (could add grumpus)
// String.prototype.grumpus = () => alert("GO AWAY!!");
// String.prototype will now show a prototype property
// called grumpus
// and if we create a new String like const cat = "Blue";
// and call cat.grumpus() we will get the alert "GO AWAY!!"
// as a property of the prototype object
// so now every time we make a string, we now 
// have the ability to access a new string method
// from the prototype property grumpus

// String.proptype.yell = function() {
//   console.log(this.toUpperCase());
// }; // this will refer to whatever is on the left hand
  // side of that dot -- 'this' represents for
  // instance "hello" on the left side of our yell method

// "hello".yell()

// String.prototype.yell = function() {
//   return `OMG!!! ${this.toUpperCase()} UGH!!!`
// };

// if we use 

// "i love you".yell();

// we get in return "OMG!!! i love you UGH!!!"
// we created our own method that we can use
// on every single string, but this is not 
// a good idea or pattern to follow all the time

// Array.prototype.pop = function () {
// return "SORRY I WAT THAT ELEMENT, I WILL NEVER POP IT OFF";
// };

// we can override something under the Array prototype
// such as .pop(), so our override would cancel out 
// the original method that .pop() would perform otherwise
// -- not highly recommended, but good ot understand 
// prototypes
// 
// having objects that contain specific properties
// that arrays can look up to or strings can look 
// up to, in order to store other properties

// __proto__ and .prototype are similar, but Array.prototype
// is the template object, but __proto__ is just a reference
// to the template object 
// reference versus actual object
// rare that would need to do anything with __proto__
// if anything we would access .prototype itself

// INTRO TO OOP 

// Organizing our code, designing and breaking things
// down into patterns of objects

// rgb(244,54,23)
// rgba(233,54,23,0.9)
// #76FF32
// hsl(180,50%, 30%)

// navColor 
// Color {r: 230, b: 34, g: 126, name: "carrot", h: 28...}
// navColor.rgb() 
// "rgb(230, 126, 34)"
// navColor.hex()
// "#e67e22"
// document.querySelector('h1')[0].style.backgroundColor = 
// navColor.rgb()
// "rgb(230, 126, 34)"
// document.querySelectorAll('h1')[1].style.backgroundColor = 
// navColor.rgba(0.8)
// "rgba(230, 126, 34, 0.8)"
// "rgba(230, 126, 34, 0.5)"
// document.querySelectorAll('h1')[1].style.backgroundColor = 
// navColor.opposite()
// which gives an opposite hue accross the color wheel
// document.querySelectorAll('h1')[1].style.backgroundColor = 
// navColor.fullSaturation()
// "hsl(28, 100%, 51.8%)"
// document.querySelectorAll('h1')[1].style.backgroundColor = 
// navColor.logoColor.rgb()
// "rgb(46, 204, 113)"
// document.querySelectorAll('h1')[1].style.backgroundColor = 
// logoColor.rgba(0.7)
// "rgb(46, 204, 113, 0.7)"
// document.querySelectorAll('h1')[1].style.backgroundColor = 
// logoColor.opposite()
// "hsl(325, 63.2%, 49%)" -- we get opposite color on the color wheel
// 
// we could easily have a bunch of objects and no 
// functions what-so-ever and pass things around
// which we have seen before 
// under the project representing a Deck of Cards
// const deck1 = initializeDeck()
// deck1 <--- returns a new deck of cards
// shuffle(deck1) allows us to get then a shuffled deck
// 
// const deck1 = makeDeck() 
// 
// deck1.initializeDeck() <--- updated with all values
// in the array
// 
// deck1.shuffle() <--- uses a floor and round to randomly shuffle
// deck1.drawCard() <--- adds a random card to deck
// 
// the idea of having a repeatable recipe for other 
// objects to be created after is central 
// like when we learned to make XHRs 
// 
// const req = new XMLHttpRequest()
// 
// req
// now req has all the backed in properties from XMLHttpRequest
// and now we end up this new object but req is cut
// from the same cookie cutter as any newly assigned object
// and this is the same with anything DOM related
// cut from same cookie cutter as HTMLHeaderElement

// FACTORY FUNCTIONS 

function hex (r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

function rgb(r,g,b) {
  return `rgb(${r}, ${g}, ${b})`;
}

hex(255, 100, 25);
rgb(255, 100, 25);

// #ff6419
// rgb(255, 100, 25)

// we can use a factory function that already has a
// hex and rgb function 

function makeColor(r,g,b){
  const color = {};
  color.r = r;
  color.b = b;
  color.g = g;
  color.rgb = function() {
   const {r, g, b} = this;
   return `rgb(${r}, ${g}, ${b})`;
  }
  color.hex = function() {
    const {r, g, b} = this;
    return (
      '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    );
  };
  return color;
};
// makeColor(255,255,255)
// we are making a factory object
// so we can return and then use it later

const firstColor = makeColor(35,255,150);
firstColor.rgb() 
// or
firstColor.hex()
// could have purple.hex()
// could have purple.rgb()

// the value of what is being returned for 
// return `rgb(${r}, ${g}, ${b})`;
// will refer to the firstColor object

// the focus is on the above object
// or the factory function
// we are making a pattern based off a recipe

// there is a better approach that what we
// see above using Prototype
// a factory function is not commonly used
// instead we use a constructor function

// new XMLHttpRequest() makes a new object
// following a pattern
// 
// new String() 
// 
// what is that 'new' keyword? it is an operator
//
// every time we make a new color object, we have
// three unique color properties, but each function
// is recreated and a new color property is added
// to each object, so each object has it's rgb 
// function, colors might be different, or end
// up with a different result
//
// there is no need to have a copy of a unique function
// each time color1.hex, color2.rgb
//
// black.hex === firstColor.hex (are not equal
// not comparing to same function)
//
// "h1".slice === "bye".slice 
// we get true, what's happening 
// is the slice method is not defined 
// on every single string or not defined
// in the array object, instead they 
// are defined on the prototype
//
// "h1".slice and "bye".slice are referencing
// the same function located under the Prototype
// 

// THE CONSTRUCTOR FUNCTION

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year; 
}

var car1 = new Car('Eagle', 'Talon TSi', 1993);

console.log(car1.make);
// expected outpu: "Eagle"

// we are referencing 'this' directly inside
// a function, this function is donated by 
// a 'C' capital letter because it is a constructor
// function which is a function that helps 
// create new objects
// 
// 

function Color(r,g,b) {
  this.r = r;
  this.g = g;
  this.b = b;
  console.log(this);
}

Color(255,0,0)
// undefined
//
// 'this' keyword refers to the window in the DOM
// in this case, in the scope of this function 
// because it is not inside of any other object
// it is going to refer to the Global Scope
// when we call the 'new' before the function 
// call it behaves differently 

new Color(255,40,100);

// it will create a blank plain object and passes
// the newly created object and set this to that new
// object (adding r, g, and b to that new object)
// it is returning these values implicitly behind 
// the scenes instead of visibly deconstructing it
// and then return each of the values
// 'this' behaves differently here because
// it refers to the Global Scope Window Object
// in the DOM 
// the magic is in the keyword 'new' which will 
// create a new object based on the above pattern
//
// running new Color(255,40,100) we get a new
// object with the assigned properties from the
// Color function
//
// we are setting the constructor to the Color
// function which allows us to add methods
// not to the individual objects, but to the 
// Prototype

// Color.prototype.rgb = function() {
//  const {r, g, b} = this; 
//  return `rgb(${r},${g},${b})`; 
// };

// This is overriding or creating a new constructor
// method within prototype
// 
// we can then assign 
// const colo1 = new Color(40, 50, 60); 
// where Color has access to r, g, and b
// inside the constructor function under
// prototype
// color1 doesn't have the Color method defined
// directly on it, but it is directly accessible
// under the prototype property
//
// now we can have 
// const color1 = new Color(40, 50, 60);
// const color2 = new Color(0, 0, 0);
// 
// and we can add in a second constructor function 
// to the Color prototype
// 
// Color.prototype.hex = function(){
//   const {r, g, b} = this;
//   return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//  };

// we still have access to whatever is on the left side of the 
// dot or color1.hex() ---  

// color1.hex() 
// "#28323c"
// color2.hex()
// "#000000"
// 
// color1.hex === color2.hex
// true
// because they are both point to the same
// thing and this can be verified
// under the dev tools as they are defined 
// under the instance of color but under
// the actual prototype itself

// Color.prototype.rgba = function(a=1.0) {
//  const { r, g, b } = this; 
//  return `rgba(${r}, ${g}, ${b}, ${a})`;
// };
//
// should give rgba color but should give a fourth 
// channel that accepts an alpha channel for opacity
//
// document.body.style.backgroundColor = color1.rgb()
// "rgb(40, 255, 60)"
// document.body.style.backgroundColor = color1.rgba(0.8)
// "rgba(40, 255, 60, 0.8)"
// can continue to bring the background down to a more 
// translucent color with the alpha channel


// the main benefit of using the Class 
// syntax is that we don't have to methods 
// to the Prototype manually and we don't
// have the break up the constructor function
// and realize that separate properties are
// defined under the Prototype that need
// to be used later

class Color {
  constructor(r,g,b, name){
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    this.calcHSL(); // calculate HSL based on RGB passed in
    // calls calcHSL immediately
   // console.log('Inside Constructor';)
   // console.log(r,g,b);
  }
  innerRGB(){
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}`;
  }
  rgb(){
    return `rgb(${this.innerRGB()})`;
  }
  rgba(a=1.0){
    return `rgba(${this.innerRGB()}, ${a})`;
  }
  hex(){
    const { r, g, b } = this;
      return ('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
      );
  }
  hsl() {
    const {h, s, l} = this;
    return `hsl(${h}, ${s}%, ${l}%)`;
  }
  fullySaturated(){
    const { h, l }  = this;
    return `hsl(${h}, 100%, ${l}%)`;
  }
  opposite(){
    const {h, s, l} = this;
    const newHue = (h + 180) % 360;
    return `hsl(${newHue}, ${s}%, ${l}%)`;
  }
  calcHSL() {
    const { r, g, b } = this;
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;
  
    // Find greates and smallest channel values
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b), 
      delta = cmax - cmin, 
      h = 0, 
      s = 0, 
      l = 0, 
      if (delta == 0) h = 0;
      else if (cmax == r)
      // Red is max
        h = ((g - b) / delta) % 6;
      else if (cmax == g)
      // Green is max
        h = (b - r) / delta + 2;
      else
      // Blue is max
      h = (r - g) / delta + 4;
  
      h = Math.round(h * 60);
  
      // Make negative hues positive and behind 360 degrees
      if (h < 0) h += 360;
      // Calculate lightness;
      l = (cmax + cmin) / 2;
  
      // Calculate saturation
      s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  
      // Multiply l and s by 100
  
      s = +(s * 100).toFixed(1);
      s = +(l * 100).toFixed(1);
      this.h = h;
      this.s = s;
      this.l = l;
      // hsl exist on individual instances of Color prototype object
      // to assign color for hue saturation light
  }
}


const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');



// we use the uppercase letter to indicate that 
// this is a class or a constructor function 
// or a pattern for an Object
// normally for a function name like querySelector
// we don't capitalize the first letter
// 
// we don't have to call constructor, as it will
// automatically run when refer to the constructor
// class Color as long as constructor is defined
// within the class based function
// this will run we we initiate a new instance 
// of the Color object

// c1 is an object which all properties would be set
// under the class constructor for Color
// __proto__ set then has a Color property

// greet is now a method on every Color
// but not on every instance 
//
// just like Color.prototype.greet
//
// c1.greet() 
// "HELLO FROM tomato!"

// any time we are in a Class the keyword 'this' 
// refers to the individual Color object
// not the function and not the window

// white.hex() 
// "#ffffff"
// red.hex()
// "#ff4359"
// red.hex === white.hex
// true
// 
// hex and rgb functions / methods 
// are listed under the __proto__ type reference
// or Prototype object

// can now use hsl() function with the Class Color
// for example 

white.hsl()
"hsl(0,0%,100%)"
// or 
red.hsl()

document.body.style.backgroundColor = red.hsl();
document.body.style.backgroundColor = red.fullySaturated();


// Keyword Extends and Keyword Super

// both have to do with subclassing and or 
// inheritance

class Pet {
  constructor(name, age){
    console.log("IN PET CONSTRUCTOR");
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating.`;
  }
}

class Cat extends Pet {
  meow(){
    return 'MEOWWWW!!';
  }
}

const monty = new Cat('monty', 9);

class Dog extends Pet {
  constructor(name, age, livesLeft=9){
    console.log("IN CAT CONSTRUCTOR");
    super(name, age)
    this.livesLeft = livesLeft;
  }
  bark(){
    return 'WOOFF!!';
  }
  eat(){
    return `${this.name} scarfs his food!`
  }
}

const monty = new Cat('wyatt', 10);


// can have a planet Class called Pet
// and it Cat and Dog can extend
// from Pet using class inheritance
// so that both Cat and Dog objects
// have access to name and age
// and to eat 
//
// under __proto__ we will see functionality
// bark, and eat even though never defined
// directly on Cat or Dog classes
//
// monty.eat() -- not defined on Cat
// monty.meow() -- defined on Cat

// if adding eat() function to Dog class
// and it doesn't find eat under the Dog 
// __proto__ or prototype it will look
// on the pet prototype, and if it didn't
// find it there it would look under the
// object prototype and if it didn't find 
// it any of those places it will be unhappy

// SUPER

// sometimes we want to rely on the constructor
// specifically from the class Pet for instance
// which is inherited by both the Cat And Dog
// classes
//
// currently we have no constructors within 
// either Cat or Dog classes but if we want
// to have some additional info for Cat
// for instance such as constructor(name, age, livesLeft = 9)
// we could manually set inside the constructor
// this.name = name, this.age = age, and this.livesLeft = livesLeft
// and if we don't want to duplicate this we can 
// use the 'super' keyword 'super' is going to reference
// the class we are extending from it will 
// call the Pet constructor from the Cat or Dog class
//
// super(name, age)
// will get access to the Parent class this.name = name
// and this.age = age so that we don't have to have
// the references under the Cat constructor for instance
// we reused the functionality, but added functionality
// on our own for Cat
// super is a referencing from what we are extending from
// which is Pet

// We might ahve other data we want to add on or 
// inherit depending upon on the complexity of our 
// classes -- 