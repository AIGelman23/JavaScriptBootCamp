// PROMISES a pattern for writing async code

	// We will create promises from scratch and 
	// also use existing promises

	// Promise - A JavaScript object that represents something
	// that eventually completes or just takes time
	//
	// Promising a value that you might not have at the moment
	// It is a guarantee or supposed guarantee (eventually either
	// has a failure or success) 
	// 
	// An HTTP request may take some time and might be successfull
	// but takes time, it might never be successful
	//
	//
	// A Promise is a returned object to which you attach callbacks, 
	// of passing callbacks into a function

	 /*
  const willGetYouADog = new Promise((resolve, reject) => {
		const rand = Math.random();
		if (rand < 0.5) {
			resolve(); // can be called to resolve a promise
	  } 
		else {
			reject(); // can be called to reject a promise
		}
		// if neither is done we will have a status of pending
	}); */

 //  Promises are always started with
 //  'new Promise'
 //  which we can assign to a variable
 //  and the Promise takes a function 
 //  that are usually always have two 
 //  parameters resolve and reject
 //
 // resolve and reject are actually 
 // functions themselves
 // at any point inside our new 
 // Promise function if we 
 // call resolve, the promise
 // will be resolved and if we 
 // call reject which is function
 // it wil be rejected

 // Promise {<pending>}
 //__proto__: Promise
 //[[PromiseState]]: "pending"
 //[[PromiseResult]]: undefined
 //
 // The Promise for PromiseState 
 // has not been resolved or rejected
 // it has not been fulfilled or 
 // broken

 // If we do not resolve / reject
 // a Promise than the status 
 // will remain "pending"
 // under the Promise Object

 // If immediately call reject() 
 // we will get a promise status
 // rejected or uncaught exception
 // if immediately call resolve()
 // the promise will not have
 // status of "resolved"

 // we can name resolve, reject 
 // other things, but these are
 // their default names

// How do we run code if this Promise was
// "fullfilled" or accepted versus 
// if this Promise was "rejected" ?
//
// This is where we meet our friend
// .then() method
// the .then() method will run 
// if our promise is resolved

// willGetYouADog.then(()=> {
// 	console.log("YAY WE GOT A DOG!");
// });

// we have a another method we can 
// use with a Promise called "catch"
// or .catch() which will run if the
// promise is found to be "rejected"

// willGetYouADog.catch(()=> {
// 	console.log("SORRY NO DOG!");
// });

// we have seen the two basic pieces of
// creating a promise

// if something takes time before
// rejecting a promise 

/*
const makeDogPromise = () => {
return new Promise((resolve, reject) => {
	setTimeout(() => {
		const rand = Math.random();
		if (rand < 0.5) {
			resolve(); // can be called to resolve a promise
		} 
		else {
			reject(); // can be called to reject a promise
		}
	}, 5000)
	// takes 5 seconds before it's accepted or rejected
});
} // we made a function here 
	// that returns a Promise
	// where if we return a call
	// axios.get('reddit.com').then().catch()
	// the above function itself is not a Promise
	// we are executing a function that returns 
	// a promise (either resolved or rejected eventually)
*/
	/*
makeDogPromise()
.then(() => {
	console.log("Yay we got a dog!!!");
})
.catch(() => {
	console.log("No Dog!");
}); */

// if you used makeDogPromise again 
// that would be two completely separate 
// promises

// You could save the result to a variable
// like dog = makeDogPromise() with d.then and t.catch
// but the above example is better

// When we resolve or reject a promise
// we can resolve it with a value 
// and we would have access to that 
// value in our callback in either .then()
// or .catch()
// which is really useful because most of 
// the time we are not waiting randomly 
// on an arbitrary reject or resolve 
// we want to know why was something 
// resolved or requested
// "why did it fail?" or "why was it rejected?"
// and it if didn't fail or was "fulfilled"
// or resolved - what was the data we got back?

// that's the point of making a request 
// which is to get some information

/*
const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const rand = Math.random()
			if (rand < 0.3){
				reject({ status: 404 });
			} else {
				const pages = {
					'/users': [
						{id: 1, username: 'Bilbo'},
						{id: 5, username: 'Esmerelda'},
					], 
					'/about': 'This is the about page!'
				};
				const data = pages[url];
				resolve({status: 200, data });
				resolve();
			}
		},3000)
	})
}

fakeRequest('/about')
	.then((res) => {
	console.log('Status Code', res.status);
	console.log('Data', res.data);
	console.log("REQUEST WORKED!");
}).catch((res) => {
	console.log(res.status);
	console.log("REQUEST FAILED!");
});

*/

// it's going to take some time
// so it is going to return a promise
// because it takes some time

// we can pass a value into the 
// reject() or resolve() calls
// HTTP Status Code - 200 OK
// HTTP Status Code - 404 NOT FOUND

// Let's say we add an object into our 
// reject() like {status: 404}
// we then have the ability to pass
// in .catch((res) => ...)

// we can pass in two objects to .catch()
// and then add a second parameter 
// to the function itself

// if we pass in /users to the fakeRequest
// function, we could use that url 
// to then decide what to respond with 
// we are mocking an http request

// whatever url is passed in "./users" we will 
// use the url parameter 'url' to access information 
// out of pages

// this mocking of an HTTP request
// is useful for unit testing

const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
				const pages = {
					'/users'		: [ 
						{ id: 1, username: 'Bilbo' }, 
						{ id: 5, username: 'Esmerelda' }
					],
					'/users/1'		: {	
						id:				 1, 
						username: 'Bilbo',
						upvotes: 360, 
						city: 'Lisbon',
						topPostId: 454321
					},
					'/users/5'		: {	
						id:			  5, 
						username: 'Bilbo',
						upvotes: 360, 
						city: 'Lisbon',
						topPostId: 454321
					},
					'/posts/454321'		: {	
						id:			 454321, 
						title: 
							'Ladies & Gentlemen, may I introduce my pig Hamlet'
					},
					'/about'					: 'This is the about page!'
				};
				const data = pages[url];
				if (data){
					resolve({ status: 200, data });
				} else {
					reject({ status: 404 });
				}
		}, 1000);
	});
};

/*
fakeRequest('/users')
	.then((res) => {
	console.log('Status Code', res.status);
	console.log('Data', res.data);
	console.log("REQUEST WORKED!");
}).catch((res) => {
	console.log(res.status);
	console.log("REQUEST FAILED!");
});

fakeRequest('/dogs')
	.then((res) => {
	console.log('Status Code', res.status);
	console.log('Data', res.data);
	console.log("REQUEST WORKED!");
}).catch((res) => {
	console.log(res.status);
	console.log("REQUEST FAILED!");
});
*/

// CHAINING TOGETHER PROMISES

/*
fakeRequest('/users').then((res) => {
	const id = res.data[0].id;
	fakeRequest(`/users/${id}`).then((res) => {
		const postId = res.data.topPostId
		fakeRequest(`/posts/${postId}`).then((res) => {
			console.log(res);
		});
	})
})
.catch((err) => {
	console.log("OH NO!", err);
});
*/

// if the endpoint path was incorrect for the fakeRequest
// to resolve info under a certain id, and topPostId 
// an Uncaught (in promise) {status: 404} would occur 

// if we mess up this request and use it wrong or 
// put in an invalid URL, we should be able to "catch"
// it does and we get an error 404 and an object 
// but if this URL is valid and instead we mess up
// the request and you are user that doesn't exist
// the promise would be rejected, but we need
// to be able to also include a "catch" statement
// --- if we do a dot '.' and in the callback and with 
// the dot '.' we include a promise we can then 
// call it immediately after on the same level
// and don't have to nest or can change it and 
// continue to chain as long each callback for 
// a '.' dot then returns a promise we won't nest
// the '.' dot or do any nesting at all.
// Instead we return to promise this .dot and then 
// it returns a promise, this dot '.' then will
// run if the second promise if the first returned
// promise was resolved and so forth - in a chain.

fakeRequest('/users')
.then((res) => {
	console.log(res);
	const id = res.data[0].id;
	return fakeRequest(`/users/${id}`)
})
.then((res) => {
	console.log(res);
	const postId = res.data.topPostId
	return fakeRequest(`/posts/${postId}`)
})
.then((res) => {
	console.log(res);
})
.catch((err) => {
	console.log("OH NO!", err);
});

// we can write things in a more linear way 
// by chaining promises together 
// and returning a request
// and because of this structure 
// if anything were to happen 
// we would only need one catch 
// and therefor ethis catch would run if any of
// these promises are rejected 
// --- we have the promise and therefore
// we only need one catch to catch ALL

// We don't have to nest these, 
// although these take time, 
// we don't need a bunch of callbacks 
// and continue to nest with the 
// multi-level craziness
// all we have to do is make sure we return 
// a promise instead of this callback 
// and then we can add as many levels as we want
// no crazy multi-level dependencies going on 
// cleaner code and easier to read
// if one promise, fails then it continues on

// we can have asynchronous actions that we want
// to happen one after the other 
// --- so not simultaneously, but one after another
// and then as long as we return a promise each time
// then everything works and we only need one .catch
