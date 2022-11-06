// IF , IF ELSE , IF ELSE IF
var studentDepartment = "IT"; //  Science , Arts , Commerce

if (studentDepartment === "Science") {
  console.log("Welcome to science department ");
} else if (studentDepartment === "Arts") {
  console.log("Welcome to Arts department ");
} else if (studentDepartment === "Commerce") {
  console.log("Welcome to Commerce department ");
} else {
  console.log("Invalid department ");
}
// SWITCH
switch (studentDepartment) {
  case "Science":
    console.log("Welcome to science department ");
    break;
  case "Arts":
    console.log("Welcome to Arts department ");
    break;
  case "Commerce":
    console.log("Welcome to Commerce department ");
    break;
  default:
    console.log("Invalid department ");
    break;
}
