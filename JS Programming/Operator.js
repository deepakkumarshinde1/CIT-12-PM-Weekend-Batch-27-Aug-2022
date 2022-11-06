//   Assignment Operator
var a = 10;
//a += 5; //a = a + 5;
// a -= 5; //a = a - 5;
// a *= 5; //a = a * 5;
// a /= 5; //a = a / 5;
// a %= 5; //a = a % 5;

// conditional statement
// if else

//   Conditions Operator
/*
    == equals (data ) 10 == '10'
    === strong equals data + datatype
    != not equals (data )
    !== strong not equals 
    > Greater Then
    >= Greater Then or Equals
    < Less Then
    <= Less Then or Equals
*/
var a = 10;
var b = "10";
if (a === b) {
  console.log("Yes");
  // true code
} else {
  // false
  console.log("No");
}

//   Logical Operator
var a = 10;
var b = 10;
var c = 11;
// AND ===> && ==> TRUE && TRUE ==> TRUE else FALSE
// OR ==> || ==> FALSE || FALSE ==> FALSE else TRUE
// NOT ===> ! ==> Invert the boolean value ==> !TRUE => False
if (a === b && c === b) {
  console.log("yes");
} else {
  console.log("No");
}

var value = true;
value = !value;

console.log(value);
