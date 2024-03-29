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

  // 500 (min)  < min_price < 1000 (max)
  // $lt  $gt $lte $gte
  // min_price:{ $lte:1000, $gte:500 }
  // sort => 1 (low to high) , -1 (high to low)
  // 2st => 2
  // [100,200, 300,400, 500,600, 700,800]
  //    1          2       3       3
  let { mealtype, location, cuisine, minCost, maxConst, sort, page } =
    request.body;
  let perPage = 2;
  sort = sort ? sort : 1;
  let filter = {}; // runtime create
  let startIndex = page * perPage - perPage; // 2
  let lastIndex = page * perPage; //2

  if (mealtype !== undefined) filter["mealtype_id"] = mealtype;
  if (location !== undefined) filter["location_id"] = location;
  if (cuisine !== undefined) filter["cuisine_id"] = { $in: cuisine };
  if (minCost !== undefined && maxConst !== undefined)
    filter["min_price"] = { $lte: maxConst, $gte: minCost };

  // it must not equals to undefined
  console.log(filter);

  let result = await RestaurantModel.find(filter).sort({
    min_price: sort,
  });
  result = result.slice(startIndex, lastIndex);
  response.send({ status: true, result });
};
