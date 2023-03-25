require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const APIRouter = require("./Routes/APIRouter");
const app = express();

app.use(cors());
app.use(express.json()); // enable post data request
app.use(express.urlencoded({ extended: false })); // enable post data request
app.use("/", APIRouter);

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connection success");
      console.log("Application is running on PORT ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
