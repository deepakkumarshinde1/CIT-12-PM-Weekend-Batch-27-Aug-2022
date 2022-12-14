const express = require("express");
const APIRouter = express.Router();

const locations = require("../Controller/LocationController");
const meal_type = require("../Controller/MealTypeController");
const restaurant = require("../Controller/RestaurantController");

APIRouter.get("/api/get-location-list", locations.getLocationList);

APIRouter.get("/api/get-meal-type-list", meal_type.getMealType);

APIRouter.get("/api/get-restaurant-list/:loc_id", restaurant.getRestaurantList);

APIRouter.get("/api/get-menu-list/:rest_id", restaurant.getMenuItemList);
// dynamic url in node js
module.exports = APIRouter;
