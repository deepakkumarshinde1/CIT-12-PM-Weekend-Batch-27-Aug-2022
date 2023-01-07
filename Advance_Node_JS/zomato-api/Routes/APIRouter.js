const express = require("express");
const APIRouter = express.Router();

const locations = require("../Controller/LocationController");

APIRouter.get("/api/get-location-list", locations.getLocationList);

module.exports = APIRouter;
