const RestaurantModel = require("../Model/RestaurantModel");
const MenuItemsModel = require("../Model/MenuItemsModel");
module.exports.getRestaurantList = async (request, response) => {
  /**
   * request.params /:location_id => {}
   * request.query ?location_id=1 => {}
   * (post) request.body {location_id:1} => {}
   */

  let { loc_id, rest_name } = request.params;
  try {
    let result = await RestaurantModel.find({
      location_id: loc_id,
      name: { $regex: rest_name + ".*", $options: "i" },
    });
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

module.exports.filter = async (request, response) => {
  // meal-type (mandatory)
  // location (optional)
  // Cuisine (optional)
  // Cost For Two (optional)
  // Sort (optional)
  // Per Page Data (optional)
  let data = {
    mealtype: 1,
  };

  let filter = {}; // runtime create

  if (data.mealtype !== undefined) filter["mealtype_id"] = data.mealtype;
  if (data.location !== undefined) filter["location_id"] = data.location;
  // it must not equals to undefined
  console.log(filter);

  let result = await RestaurantModel.find(filter);
  response.send({ status: true, result });
};
