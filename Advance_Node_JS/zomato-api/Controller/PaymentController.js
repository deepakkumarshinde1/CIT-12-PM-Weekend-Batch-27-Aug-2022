let OrderModel = require("../Model/OrderModel");

module.exports.saveOrderDetails = async (request, response) => {
  let orderData = {
    email_id: "deepakkumar.shinde0@gmail.com",
    mobile_no: "8007070845",
    order_list: [
      { order_item: "Panner Masala", qty: 2, price: 220, total: 440 },
      { order_item: "Roti", qty: 20, price: 10, total: 200 },
    ],
    total_prices: 640,
    receipt_id: 1,
    order_id: "order_123456",
    payment_id: "payment_123456",
    payment_status: 1,
  };
  try {
    // save data
    let newOrder = new OrderModel({
      email_id: orderData.email_id,
      mobile_no: orderData.mobile_no,
      order_list: orderData.order_list,
      total_prices: orderData.total_prices,
      receipt_id: orderData.receipt_id,
      order_id: orderData.order_id,
      payment_id: orderData.payment_id,
      payment_status: orderData.payment_status,
    });
    await newOrder.save();
    response
      .status(200)
      .send({ status: true, message: "Order Saved Successfully" });
  } catch (error) {
    response.status(500).send({ status: false, error });
  }
};
