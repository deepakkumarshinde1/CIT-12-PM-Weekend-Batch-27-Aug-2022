var employeeCount = {
  "0-1": 20,
  "1-4": 150,
  "4-10": 800,
  "above 10": 1500,
};

//convert object to array
// Object.keys ==> provides you all keys in array
// Object.values ==> provides you all value in array
// Object.entries()=> ==> provides you all keys&value in array

/**
 * When we calls a method or property by its class name we called as "Static"
 */
// var keysList = Object.keys(employeeCount);
// console.log(keysList);

// var values = Object.values(employeeCount);
// console.log(values);

var list = Object.entries(employeeCount);
console.log(list);
