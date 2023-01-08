const MealTypeModel = require("../Model/MealTypeModel");
module.exports.getMealType = async (request, response) => {
  try {
    let result = await MealTypeModel.find();
    response.status(200).send({ status: true, result });
  } catch (error) {
    response.status(500).send({ status: false, error });
  }
};
