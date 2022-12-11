// create a server

// import express
const express = require("express"); // Common JS

// create a instance
const app = express();
const ApiRouter = require("./Router/APIRouter");

// inject routing in app .use() => "middleware"
// here  "/" => prefix
// /admin
// /user
// /product
app.use("/", ApiRouter);

// add PORT number
const PORT = 5004;
app.listen(PORT, () => {
  console.log("project is running on prot ", PORT);
});
