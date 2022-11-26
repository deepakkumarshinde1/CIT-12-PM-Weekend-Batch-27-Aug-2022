// general function
function add(callback) {
  // console.log("this is add function");
  callback();
}
//add();

let sub = function () {
  console.log("this is sub function");
}; // expression function

sub();

add(function () {
  // callback function
  console.log("this is a callback function");
});

// IIFE => Immediately Invoked Function Expression
(function () {
  console.log("IIFE function");
})();//
