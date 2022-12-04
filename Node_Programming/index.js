/**
    import module
    ES5 or Common JS
    const http = require("http"); // Node JS for server development
    ES6
    import http from "http"; // React JS
  */
const http = require("http");
const fs = require("fs");
// how to create a node server
// request ==> Client to Server
// response ==> Server to Client
const server = http.createServer((request, response) => {
  fs.readFile("./public/page.html", (error, data) => {
    if (error) {
      response.write("file is not available ");
    } else {
      response.write(data);
    }
    response.end();
  });
});
server.listen(5003, () => {
  console.log("server is runnings");
});
// > 3000
