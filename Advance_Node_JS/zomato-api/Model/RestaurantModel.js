const mongoose = require("mongoose");
// instance schema
const RestaurantSchema = new mongoose.Schema({
  name: { type: String },
  city: { type: String },
  location_id: { type: Number },
  city_id: { type: Number },
  locality: { type: String },
  thumb: { type: Array },
  aggregate_rating: { type: Number },
  rating_text: { type: String },
  min_price: { type: Number },
  contact_number: { type: Number },
  cuisine_id: { type: Array },
  cuisine: { type: Array },
  image: { type: String },
  mealtype_id: { type: Number },
});

// create a model
module.exports = mongoose.model("restaurant", RestaurantSchema, "restaurants");