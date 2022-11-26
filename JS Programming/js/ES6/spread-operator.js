// spread operator  => user to marge or to create a new array or object
// Syntax => "...ArrayName"
let arrayOne = [10, 20, 30, 40, 50, 60];
let arrayTwo = [100, 200, 300, 400, 500, 600];

let arrayThree = [...arrayOne, ...arrayTwo]; //marge and array is created
//let arrayThree = arrayOne.concat(arrayTwo);
console.log(arrayThree);

// jsObject
let restaurant = {
  restName: "Green Cafe",
  minCost: 20,
};

let restLocation = {
  city: "Pune",
  pinCode: 411001,
};

let restaurantDetails = { ...restaurant, ...restLocation };
//marge and object is created
console.log(restaurantDetails);
