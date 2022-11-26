var date = new Date();
// Class always works 1st letter capital
// var output = date.toDateString();

// date
// var output = date.getDate();
// var output = date.getMonth() + 1;
// month start with ==>0

// var output = date.getFullYear();
// var output = date.getDay() + 1;
// day start with zero

// time
// var output = date.getHours();
// 24 hrs of clock
// var output = date.getMinutes();
// var output = date.getSeconds();

// hrs,min,sec ==> 24 hr

// 12 hrs

var hrs = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var _hrs = hrs;
var meridiem = null;

// 13 -12 = 1
if (hrs > 12) {
  _hrs = hrs - 12;
  meridiem = "pm";
} else {
  _hrs = hrs;
  meridiem = "am";
}

var time = _hrs + ":" + min + ":" + sec + " " + meridiem;

console.log(time);
