// alert("Hello"); // native /core

// override
// function alert() {
//   console.log("hi");
// }

// class ==> collection prop & methods
// prop ==>like variables
// methods ==> like function

// to use this classes methods & prop we need to create "object"
// & object are created by "new" keyword

class MyClass {
  constructor(data) {
    // this ==> gives us a reference
    this.a = data;
  } // internal constructor

  alert() {
    console.log("Hello", this.a);
  }

  static alertTwo(name) {
    // this.alert();
    console.log(name);
  }
  static aTwo = 10;
}
let data = 10;

let myClassObject = new MyClass(data); //external contractor

console.log(myClassObject);
myClassObject.alert();

// alert("1");

MyClass.alertTwo("deepak"); // configuration / utilities
MyClass.aTwo;
// call
// apply
// bind
