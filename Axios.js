// AXIOS 
// A library for making
// HTTP Requests
//
// Not native JavaScript 
// like fetch or XHRs
// It is an external library 
// and one of many HTTP libraries
// that can be used 

// github.com/axios/axios  -- the official github repo
// simplifies the process of making requests
// not magically adding features to the language
// is promise based (no crazy call backs)
// you can use on the client side or browser or 
// server side using NodeJS 
// 
// you can include a tool like Axios on the server side with 
// NodeJS using the same syntax
// one library or one way of fetching data 
// it must be included in our HTML file in an external 
// script or cdn -- see below: 
// 
// <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
// the source is set to an external source / minified and expressed 
// -- it must be included before our JS script relative tag
// so that we do not receive an error message

// We can in the dev console after adding the external 
// script type in 'Axios' to ensure that the script 
// from the external CDN is included
// then we can test making a call out to an API 
// const res = axios.get('https://swapi.dev/api/planets/1/')
// and then storing that promise in res
// a tool like Axios does the JSON parsing for us 
// unlike Fetch where we have to do the parsing on 
// our own 

// Normally we have to check the status code to know 
// that we are okay 200 or 404 not found
// instead with Axios it is not a problem any longer

/*
axios.get('https://swapi.dev/api/planets/1/').then((res) => {
  console.log(res.data);
}).catch((err) => {
  console.log("IN CATCH CALL-BACK, BEING REJECTED!");
  console.log(err);
})
*/

// It's already been parsed as we saw 
// and instead of a string of data that 
// we need to parse manually 
// AXIOS is taking care of that - getting a string of
// JSON and parsing it for us
// 
// with fetch we have to manually check the status code
// if the status code is 400 or 404 or something other
// than 200 which is what we want

// AXIOS knows that if there is a 404 or a status code
// that is not 200 or that is not OK you will want catch
// to run the call-back - simplifies things in two ways
// no parsing json, not have to weed out bad response codes
// we still return a promise, and then chain with .then()
// if we want a second response we just return a second
// .get()


const fetchNextPlanets = (url = "https://swapi.dev/api/planets/") => {
  return axios.get(url);
};

const printPlanets = ({data}) => {
  console.log(data);
  for(let planet of data.results){
    console.log(planet.name);
  }
  return Promise.resolve(data.next)
};

fetchNextPlanets()
.then(printPlanets)
.then(fetchNextPlanets)
.then(printPlanets)
.then(fetchNextPlanets)
.then(printPlanets)
.catch((err) => {
  console.log("ERROR!");
});

// AXIOS can be used to make requests on both the 
// client and the server side