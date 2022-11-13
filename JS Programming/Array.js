// array
// if want to store more then data in variables then we need Array
// create array
var numberList = [10, 20, 30, 40, 50, 60];
// array is a collection of same or different data types

// array is having key/index for each value
// key/index always start with zero
// key/index are auto generated
//console.log(numberList);
// how to read a single data from array
// we need the index/key to read array value

// arrayName[indexNumber]
//console.log(numberList[100]);
// for every out of range index we we gwt undefined

/**
 * Create/Add Data =>  push(),unshift()
 * Read Data => forEach()
 * Delete => pop(),shift(),splice()
 * Search => find(),findIndex(),filter()
 * Sort => sort()
 * Reduce => reduce()
 * Recreate => map(),slice()
 */
/************************ Create/Add Data =>  push(),unshift()*/
var numberList = [10, 20, 30, 40, 50, 60];

//numberList.push(1000); // add data from end
//numberList.unshift(1000); // add data from start

/************************** Delete => pop(),shift(),splice() */

var numberList = [10, 20, 30, 40, 50, 60];
//console.log(numberList);
// numberList.pop(); // delete data from end
// numberList.shift(); // delete data from start
//numberList.splice(2, 3); // specific location (indexNumber, deleteCount)
//console.log(numberList);

/********************  Read Data  => forEach()*/

// console.log(numberList.length);
/*function read(value, index) {
  console.log(value, " is having index ", index);
  // code
} // function definition*/

numberList.forEach(function (value, index) {
  // console.log(value, " is having index ", index);
});

/**
 * when create a function in other function call parameter we call
 * that function as "callback" function
 *  */

var restaurantList = [
  {
    name: "Hotel Taj",
    city: "Mumbai",
    minCost: 999,
  },
  {
    name: "Hotel Green Palace",
    city: "Pune",
    minCost: 150,
  },
  {
    name: "KFC",
    city: "Pune",
    minCost: 99,
  },
  {
    name: "MH One",
    city: "Nashik",
    minCost: 50,
  },
  {
    name: "Hotel Athavan",
    city: "Nashik",
    minCost: 200,
  },
];

/*restaurantList.forEach(function (restaurant, index) {
  // console.log(value["name"]);
  console.log(restaurant.name, restaurant.city);
});*/

/**  Search => find(),findIndex(),filter() */
var search = "Pune";

/*var searchResult = restaurantList.find(function (restaurant, index) {
  return restaurant.city === search;
});*/
// find return only one result
// if result is not found we get "undefined"
var restaurantList = [
  {
    name: "Hotel Taj",
    city: "Mumbai",
    minCost: 999,
  },
  {
    name: "Hotel Green Palace",
    city: "Pune",
    minCost: 150,
  },
  {
    name: "KFC",
    city: "Pune",
    minCost: 99,
  },
  {
    name: "MH 30",
    city: "Nashik",
    minCost: 50,
  },
  {
    name: "Hotel Athavan",
    city: "Nashik",
    minCost: 200,
  },
];
/*var search = "Pune1";
var searchResult = restaurantList.filter(function (restaurant, index) {
  return restaurant.city === search;
});*/
// filter return all match data in array
// if result is not found we get empty array e.g []

var search = "Pune1";
var searchResult = restaurantList.findIndex(function (restaurant, index) {
  return restaurant.city === search;
});
// findIndex return index number if match found
// if result is not found we get -1

console.log(searchResult);

// string methods
// var text = "India is my Country";
// text = text.toUpperCase();
// text = text.toLowerCase();

// console.log(text);
/*****************************  Sort => sort() */
var restaurantList = [
  {
    name: "Hotel Taj",
    city: "Mumbai",
    minCost: 999,
  },
  {
    name: "Hotel Green Palace",
    city: "Pune",
    minCost: 150,
  },
  {
    name: "KFC",
    city: "Pune",
    minCost: 99,
  },
  {
    name: "MH 30",
    city: "Nashik",
    minCost: 50,
  },
  {
    name: "Hotel Athavan",
    city: "Nashik",
    minCost: 200,
  },
];
/*
var sortResult = restaurantList.sort(function (a, b) {
  a = a.city.toLowerCase();
  b = b.city.toLowerCase();
  if (a < b) return 1; // avoid shuffling
  if (a > b) return -1; // shuffle value
});

console.log(sortResult);*/

/*************************  * Reduce => reduce() */
//var array = [10, 20, 30, 50, 40]; // addition

var restaurantList = [
  {
    name: "Hotel Taj",
    city: "Mumbai",
    minCost: 999,
  },
  {
    name: "Hotel Green Palace",
    city: "Pune",
    minCost: 150,
  },
  {
    name: "KFC",
    city: "Pune",
    minCost: 99,
  },
  {
    name: "MH 30",
    city: "Nashik",
    minCost: 50,
  },
  {
    name: "Hotel Athavan",
    city: "Nashik",
    minCost: 200,
  },
];

var text = restaurantList.reduce(function (pValue, cValue) {
  if (pValue == "") {
    return cValue.name;
  } else {
    return pValue + "," + cValue.name;
  }
}, "");
//console.log(text);
/************* Recreate => map(),slice() */

// var array = [10, 20, 30, 50, 40];
// var slicedArray = restaurantList.slice(0, 3);
// console.log(slicedArray);

var newArray = restaurantList.map(function (restaurant, index) {
  restaurant["location"] = restaurant.city; // create new oject key/index/prop
  delete restaurant.city; // delete data from object
  return restaurant;
});
console.log(newArray);
