const express = require("express");
const APIRouter = require("./Routes/APIRouter");
const app = express();
const PORT = 5004;

app.use("/", APIRouter);

app.listen(PORT, () => {
  console.log("Application is running on PORT ", PORT);
});
