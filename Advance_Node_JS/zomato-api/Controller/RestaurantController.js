const RestaurantModel = require("../Model/RestaurantModel");
const MenuItemsModel = require("../Model/MenuItemsModel");
module.exports.getRestaurantList = async (request, response) => {
  /**
   * request.params /:location_id => {}
   * request.query ?location_id=1 => {}
   * request.body {location_id:1} => {}
   */

  let { loc_id } = request.params;
  try {
    let result = await RestaurantModel.find({ location_id: loc_id });
    response.status(200).send({ status: true, result });
  } catch (error) {
    response.status(500).send({ status: false, error });
  }
};

module.exports.getMenuItemList = async (request, response) => {
  let { rest_id } = request.params;
  try {
    let result = await MenuItemsModel.find({ restaurantId: rest_id });
    response.status(200).send({ status: true, result });
  } catch (error) {
    response.status(500).send({ status: false, error });
  }
};
