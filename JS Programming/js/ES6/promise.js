/*
     we will have session tomorrow
        // if deepak is available
            // true => resolve => .then() will run "session will be conducted"
        // if deepak is not available
            // false => reject => .catch() will run "session will be not conducted"
*/
var isDeepakAvailable = "No";

async function weWillHaveSession(isAvailable) {
  if (isAvailable === "Yes") {
    return Promise.resolve("session will be conducted");
  } else {
    return Promise.reject("session will be not conducted");
  }
}

// callback(callback(callback(callback(callback()))))) => callback hell
// single promise
weWillHaveSession(isDeepakAvailable)
  .then(function (message) {
    console.log(message);
  })
  .catch(function (error) {
    console.error(error);
  });

// div => 10/5 =>result(2)
// add => result(2) +15 => 17

async function div(a, b) {
  if (b === 0) {
    return Promise.reject("Can't divide a number by zero");
  } else {
    var result = a / b;
    return Promise.resolve(result);
  }
}

async function add(divResult, b) {
  var result = divResult + b;
  return Promise.resolve(result);
}

// async await

async function calculation() {
  try {
    let result = await div(10, 0); // wait other promise to run & returns resolve result
    let finalResult = await add(result, 15);
    console.log(finalResult);
  } catch (error) {
    console.log(error);
  }
}
calculation();
