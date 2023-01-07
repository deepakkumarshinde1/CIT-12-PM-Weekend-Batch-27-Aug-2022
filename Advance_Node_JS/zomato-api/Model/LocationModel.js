const mongoose = require("mongoose");
// instance schema
const LocationSchema = new mongoose.Schema({
  name: { type: String },
  city_id: { type: Number },
  location_id: { type: Number },
  city: { type: String },
  country_name: { type: String },
});

// create a model
const LocationModel = mongoose.model("location", LocationSchema, "locations");
module.exports = LocationModel;
