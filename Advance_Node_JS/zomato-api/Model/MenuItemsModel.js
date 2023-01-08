const mongoose = require("mongoose");
// instance schema
const ObjectId = mongoose.Schema.Types.ObjectId;
const MenuItemsSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  ingridients: { type: Array },
  restaurantId: { type: ObjectId },
  image: { type: String },
  qty: { type: Number },
  price: { type: Number },
});

// create a model
module.exports = mongoose.model("menuitem", MenuItemsSchema, "menuitems");
