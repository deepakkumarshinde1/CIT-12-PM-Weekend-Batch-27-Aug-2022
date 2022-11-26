// destructuring=> extracting data from array or object
// array
let dArray = ["100", "200", "10"];
// index => auto gen ==> zero
/*
let varOne = dArray[0];
let varTwo = dArray[1];
let varThree = dArray[2];
*/
//let [varOne, varTwo, varThree] = dArray;
//console.log(varOne, varTwo, varThree);

// jsObject
// keys/index are user defined
let restaurant = {
  restName: "Green Cafe",
  city: "Pune",
  minCost: 20,
};

let { city, restName, minCost: cost } = restaurant;

//let cost = restaurant.minCost;

console.log(restName);
console.log(city);
console.log(minCost);
