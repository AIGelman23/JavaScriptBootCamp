// Now with being comfortable with promises we can refactor the 
// demo that we had earlier with Callbacks.html
// ---
// The earlier demo required nesting many moveX functions
// and chaining callbacks if the first call back was 
// a success, but was an ugly mess

// call backs can be messy or tricky 
//  --- we will write a call back that
// will take a number of pixels and
// move our button 
// and it will do this after a delay

const btn = document.querySelector('button');
const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
      if (elRight + amount > bodyBoundary) {
        reject({ bodyBoundary, elRight, amount });
      }
      else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  }) 
};

// instead of calling failure we would reject
// the promise if we can't move

/*
moveX(btn, 300, 1000)
.then(() => {
  return moveX(btn, 300, 1000)
.then(() => {
  return moveX(btn, 3000, 1000)
  })
.then(() => {
  return moveX(btn, 300, 1000)
  })
.then(() => {
    console.log("DONE WITH BOTH!");
  })
})
.catch(() => {
  console.log("OUT OF SPACE. CANNOT MOVE FURTHER!");
});
*/
  
// OR YOU CAN DO SO IMPLICITLY 
// WITH IMPLICIT RETURNS

moveX(btn, 300, 1000)
.then(() => moveX(btn, 100, 1000))
.then(() => moveX(btn, 100, 1000))
.then(() => moveX(btn, 100, 1000))
.then(() => moveX(btn, 100, 1000))
.then(() => moveX(btn, 100, 1000))
.then(() => moveX(btn, 100, 1000))
.then(() => moveX(btn, 100, 1000))
.then(() => moveX(btn, 100, 1000))
.then(() => moveX(btn, 100, 1000))
.then(() => moveX(btn, 100, 1000))
.then(() => moveX(btn, 100, 1000))
.then(() => moveX(btn, 100, 1000))
.then(() => moveX(btn, 100, 1000))
.then(() => moveX(btn, 100, 1000))
.then(() => moveX(btn, 100, 1000))
.then(() => moveX(btn, 100, 1000))
.then(() => moveX(btn, 100, 1000))
.then(() => moveX(btn, 100, 1000))
.then(() => moveX(btn, 100, 1000))
.then(() => moveX(btn, 100, 1000))
.catch(({bodyBoundary, elRight, amount}) => {
  console.log(`Body is ${bodyBoundary}px wide`);
  console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
});

// Nice not to have to have curly braces
// again cleaner code and easier to read
// again easier to follow instead of 
// the huge mess of nested functions / catch after
// catch
// the real value of promises isn't just about 
// doing asychronous things and being able to run
// some code afterwards, it's also about being
// able to catch any time a promise is rejected
// having a single catch it makes a huge difference
// --- we don't need 20 different catches one per
// dot then for each promise as long as we return
// a promise in the dot then which is what we're 
// doing thanks to an implicit aero function return
