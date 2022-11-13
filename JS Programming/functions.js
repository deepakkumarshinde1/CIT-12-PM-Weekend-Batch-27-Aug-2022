// addition operation
/*
var a = 10;
var b = 20;

var result = a + b;
console.log("addition result=", result);

var a1 = 110;
var b1 = 210;

var result = a1 + b1;
console.log("addition result=", result);

var a3 = 1110;
var b3 = 2110;

var result = a3 + b3;
console.log("addition result=", result);
*/
// code login is repeated
// there no control on our code
// what is function ?
// function are block of code ,
//   which can be use to perform same task again and again

// how to write function ?
/*syntax is as bellow
    function functionName(){
        // code
    }
*/
var a = 10; // global variable
var b = 20;

function add(varOne, varTwo) {
  var result = varOne + varTwo; // local variable eg. result
  // 100% local variable if dynamic code
  console.log("addition result=", result);
} // function definition

add(a, b); // function call
// () parameter body or argument body
// parameter pass in function call => actual parameter eg. line 42
// parameter used in function def => formal parameter eg. line 36

var a1 = 110;
var b1 = 210;

add(a1, b1); // function call

var a3 = 1110;
var b3 = 2110;

add(a3, b3); // function call
