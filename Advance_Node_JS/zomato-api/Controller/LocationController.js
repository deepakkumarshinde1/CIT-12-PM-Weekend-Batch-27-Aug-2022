const locationList = require("../Model/get-location-list.json");

module.exports.apiHome = (request, response) => {
  response.status(200).send({
    status: true,
    data: "Its Working",
  });
};

module.exports.getLocationList = (request, response) => {
  response.status(200).send({
    status: true,
    locations: locationList,
  });
};
