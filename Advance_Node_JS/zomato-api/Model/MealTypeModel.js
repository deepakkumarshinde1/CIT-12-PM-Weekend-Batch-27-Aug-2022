const mongoose = require("mongoose");
// instance schema
const MealTypeSchema = new mongoose.Schema({
  name: { type: String },
  content: { type: String },
  image: { type: String },
  meal_type: { type: Number },
});

// create a model
module.exports = mongoose.model("mealtype", MealTypeSchema, "quicksearchs");
