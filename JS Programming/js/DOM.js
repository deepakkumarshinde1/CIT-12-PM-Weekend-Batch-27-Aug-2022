/**
 * DOM => Document Object Model
 * DOM is a logical representation of HTMl page
 * HTMl element => Object/Element Node in Javascript
 *
 * DOM => Manipulating HTMl data
 *
 * If we want to use DOM , we need to use a inbuilt of Javascript Object Called "document"
 */
// create a instance /object of HTMl Element
var button = document.getElementById("btn");
var counterText = document.getElementById("counterText");
var counter = 0;
console.log(counterText);
// click ==> event
/**
 * Javascript Event => User Action
 *      click, dblclick, keypress, mouse, scroll, drag,drop
 *  To handel events => addEventListener()
 *  You can have a event on any html element
 */

/**
 * If we want to set some data from javascript to html
 * We use a prop called as ".innerHTML"
 */
button.addEventListener("click", function (event) {
  counter++;
  counterText.innerHTML = counter;
  button.innerHTML = "Click " + counter;
  console.log(counter);
});
