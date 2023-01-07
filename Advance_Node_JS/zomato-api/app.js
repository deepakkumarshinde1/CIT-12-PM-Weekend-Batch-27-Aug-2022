const express = require("express");
const mongoose = require("mongoose");
const APIRouter = require("./Routes/APIRouter");
const app = express();
const PORT = 5004;
const MONGODB_URI = "mongodb://127.0.0.1:27017/batch12zomatoapi";
app.use("/", APIRouter);

// mongodb connection
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("connection success");
      console.log("Application is running on PORT ", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
