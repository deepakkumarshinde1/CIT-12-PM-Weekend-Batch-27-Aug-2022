var uploadExtList = ["jpeg", "png", "pdf", "docx"];
var text = "India-is-my-Country.docx";
// capital
// text = text.toUpperCase();
// small
// text = text.toLowerCase();
// to convert string to array
// text = text.split(" ");

// check extension
var pos = text.lastIndexOf(".") + 1;
var ext = text.substring(pos);

var isAllow = uploadExtList.includes(ext);

console.log(isAllow);
