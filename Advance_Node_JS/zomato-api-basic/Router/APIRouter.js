const express = require("express");
// router instance
const ApiRouter = express.Router();

// request => client demands fro resource
// response => server to client
ApiRouter.get("/", (request, response) => {
  response.send("this is a get methods");
});

ApiRouter.post("/", (request, response) => {
  response.send("this is a post methods");
});

ApiRouter.put("/", (request, response) => {
  response.send("this is a put methods");
});

ApiRouter.delete("/", (request, response) => {
  response.status(403).send("you have a server error");
});

module.exports = ApiRouter;
