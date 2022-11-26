/*
    rest parameter ==> 
        you can pass unlimited value in function call parameter

        (...varName) => function definition
 */

function add(...numbers) {
  // let result = varOne + varTwo + varThree + varFour;
  //
  let result = numbers.reduce(function (pValue, cValue) {
    return pValue + cValue;
  }, 0);
  console.log(result);
}

add(10, 20, 0.5, 45);
