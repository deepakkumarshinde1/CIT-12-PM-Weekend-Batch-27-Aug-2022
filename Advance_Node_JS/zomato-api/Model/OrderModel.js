const mongoose = require("mongoose");
// instance schema

const OrderSchema = new mongoose.Schema({
  email_id: { type: String },
  mobile_no: { type: Number },
  order_list: { type: Array },
  total_prices: { type: Number },
  receipt_id: { type: Number },
  order_id: { type: String },
  payment_id: { type: String },
  payment_status: { type: Number },
});

// create a model
module.exports = mongoose.model("order", OrderSchema, "orders");
