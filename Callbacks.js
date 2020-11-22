// call backs can be messy or tricky 
//  --- we will write a call back that
// will take a number of pixels and
// move our button 
// and it will do this after a delay

const btn = document.querySelector('button');

/*
setTimeout(()=> {
  btn.style.transform = `translateX(100px)`;
  setTimeout(()=> {
    btn.style.transform = `translateX(200px)`;
    setTimeout(()=> {
      btn.style.transform = `translateX(300px)`;
      setTimeout(()=> {
        btn.style.transform = `translateX(400px)`;
        setTimeout(()=> {
          btn.style.transform = `translateX(500px)`;
        }, 1000);        
      }, 1000);      
    }, 1000); 
  }, 1000);  
}, 1000);

*/

// browser can moving something easier with transform
const moveX = (element, amount, delay, onSuccess, onFailure) => {
	setTimeout(() => {
		const bodyBoundary = document.body.clientWidth;
		const elRight = element.getBoundingClientRect().right;
		const currLeft = element.getBoundingClientRect().left;
		if (elRight + amount > bodyBoundary) {
			onFailure();
		}
		else {
			element.style.transform = `translateX(${currLeft + amount}px)`;
			onSuccess();
		}
	}, delay);
};

//moveX(btn, 100, 1000, () => {
//  moveX(btn, 100, 1000, () => {
//    moveX(btn, 100, 1000, () => {
//      moveX(btn, 100, 1000, () => {
//        moveX(btn, 1000, 1000);
//      });
//    });
//  });
//});

// LOOK AT THIS UGLY MESS!
/*
moveX(btn,300,1000,() => {//success callback
  moveX(btn,300,1000,() => {
				//success callback
				moveX(btn,300,1000,() => {
						//success callback
						moveX(btn,300,1000,() => {
								//success callback
								moveX(btn,300,1000,() => {
										//success callback
										alert('YOU HAVE A WIDE SCREEN!');
									},() => {
                    //failure callback 
                    alert('CANNOT MOVE FURTHER!');
									});
					    },
							() => {
								//failure callback
								alert('CANNOT MOVE FURTHER!');
							}
						);
					}, () => {
						//failure callback
						alert('CANNOT MOVE FURTHER!');
					}
				);
			},
			() => {
				//failure callback
				alert('CANNOT MOVE FURTHER!');
			}
		);
	},
	() => {
		//failure callback
		alert('CANNOT MOVE FURTHER!');
	}
);

*/

// with asynchronous request
// if the request works then here is the call back
// if the request does not work then here is the code
// that throws an

// Promises allow us to rewrite code for
// example with moveX where we don't
// have to do so much crazy nesting

// ENTER PROMISES 
// 
// A Promise is an object representing the eventual completion 
// or failure of an asychronous operation

moveX(btn, 100, 1000)
	.then(() => moveXPromise(btn, 100, 1000))
	.then(() => moveXPromise(btn, 200, 1000))
	.then(() => moveXPromise(btn, 300, 1000))
	.then(() => moveXPromise(btn, 50, 1000))
	.then(() => moveXPromise(btn, 50, 1000))
	.catch((position) => {
		alert('CANNOT MOVE FURTHER!');
	});

	