// FETCH 

// FETCH API 
// The newer way of making 
// requests via JS
// Support Promises!
// Not supported in IE (Internet Explorer)

/* 
Fetch was created because
XHRs were too messy and obnoxious, 
difficult with call backs, and does
not support promises 

Aside from the clean syntax
is that it supports promises

fetch('https://icanhazdadjoke.com/23/2', {
  headsers: { Accept: 'application/json' }
})
  .then((res) => {
    if (res.status !== 200) {
      console.log('Problem!', res.status);
      return;
    }
    res.json().then((data) => {
        console.log(data);
      });
  })
  .catch(function(err) {
    console.log('Fetch Error', err);
  });

  we call the function called fetch and pass
  in some URL and then that returns a promise
  and then the promise is either resolved 
  or rejected, if resolved we get a res or 
  response object and we get information 
  about the response, otherwise we can catch 
  a rejected promise if for some reason the fetch didn't 
  for instance if the Internet was not connected

*/

fetch('https://swapi.dev/api/planets/')
// promise returned from fetch
.then((response) => {
    if(!response.ok)
     throw new Error(`Status Code Error: ${response.status}`);

     return response.json()
  })
.then((data) => {
      console.log("FETCHED ALL PLANETS (first 10)");
      const filmUrl = data.results[0].films[0];
      return fetch(filmUrl);
})
.then((response) => {
    if(!response.ok)
     throw new Error(`Status Code Error: ${response.status}`);

     return response.json()
})
.then((data) => {
  console.log("FETCHED FIRST FILM, based off of first planet");
  console.log(data.title);
})
  .catch((err) => {
    console.log("SOMETHING WENT WRONG WITH FETCH!!!!");
    console.log(err);
  });
// another promise returned so need another .then()


// The Response Interface of the Fetch API represents
// the response to a request.
// 
// You can create a new Response object using the
// Response.Response() constructor, but you are more 
// likely to encounter a Response object being returned
// as the result of another API operation, for example a 
// a service worker Fetchevent.respondWith, or a simple
// GlobalFetch.fetch().
//
// Body.body - is a simple getter used to expose
// a ReadableStream of the body contents
//
// What is a readable stream?
//
// It is a readable stream of byte data and this is 
// one of the key differences from using XHRs - 
// this is aside from the syntactical differences 
// as well
// When you make a request you get a response object
// back the content of that response is included as 
// a readable stream and a stream is a way of accessing
// data that could be super large and or a massive 
// amount of data - and you can both access & process
// that data as you go
// 
// We have to be aware of how we read that stream!
// 
// Going to back to the Response Objects there is a 
// nice method called Body.json() or .json() which 
// takes a Response stream and reads to to completion
// and it returns a promise that resolve with the result
// of parsing the body text as JSON

// this could take time as this .json() 
// is asychronous and that stream 
// could be very very large and reading it fully
// could take a while compared to JSON.parse()

// The Promise returned from fetch() 'won't reject on HTTP
// error status' even if the response is an HTTP 404 or 500 
// Instead it will resolve normally (with ok status set to false), 
// and it will only reject network failures or if anything  
// prevented the request from completing.

// Fetch will only return a rejected promise in the 
// event that your Internet is not working or the 
// request can't be made at all or don't get a response
// at all

// If we call an error  in our .then() it will trigger
// the error in our .catch(err) and run 
// 
// This is the basics of fetch and while it would 
// be nice not to have concern ourselves about 
// the error code or catch --- that is where 
// the Axios library helps us, but this is 
// much better than having to use XMLHttpRequests
// it's easier to chain and make multiple requests 
// in a row

// The main selling point of Fetch is not having to 
// use callbacks and nestings
// instead we can use promises and chain a bunch of
// .then()

// Fetch is much better because we can keep things
// flat, non-nested, and we can have multiple requests
// that are dependent on one specific request, but 
// don't have to nest so deep -- but we can refactor
// even easier