const annoyer = { 
  phrases: ["literally", "cray cray", "I can't even", 
  "Totes!", "YOLO", "Can't Stop, Won't Stop!"], 
  pickPhrase(){
    const {
      phrases
    } = this;
    const idx = Math.floor(Math.random() * 
    phrases.length);
    return phrases[idx]
  },
  start() { 
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase());
    }, 300)
  }, 
  stop() {
    clearInterval(this.timerId);
    console.log("Thank goodness that is over!!!");
  }
};

// arrow functions don't get there
// only special 'this' and are not 
// constrained to the window that
// is a global object, but
// can work to allow function to
// obtain properties available
// within specific object
// 
// sometimes arrow function are
// better to use because you don't
// want a new 'this' and on the other
// side of that coin they are no good
// as regular methods on an object
// because you don't get access to the 
// this accessing the object 

// setInterval -- comes in browser
// as part of a Window property within
// the browser
