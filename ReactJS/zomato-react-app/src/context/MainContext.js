import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const MaiContext = createContext({});
const BASE_URL = "http://localhost:5004/api/";

export const useMainContext = () => useContext(MaiContext);

export const MainContextProvider = ({ children }) => {
  let [locationList, setLocationList] = useState([]);
  let [searchRest, setSearchRest] = useState("");
  let [selectedLocation, setSelectedLocation] = useState("");
  let [restaurantList, setRestaurantList] = useState([]);
  let [mealType, setMealType] = useState([]);

  let getLocationList = async () => {
    let { data } = await axios.get(BASE_URL + "get-location-list");
    if (data.status === true) {
      setLocationList([...data.result]);
    } else {
      setLocationList([]);
    }
  };

  let getRestaurantList = async (event) => {
    setSearchRest(event.target.value);
    if (event.target.value !== "") {
      let url = `${BASE_URL}get-restaurant-list/${selectedLocation}/${event.target.value}`;
      let { data } = await axios.get(url);
      if (data.status === true) {
        setRestaurantList([...data.result]);
      } else {
        setRestaurantList([]);
      }
    }
  };

  let getMealTypeList = async () => {
    let { data } = await axios.get(BASE_URL + "get-meal-type-list");
    if (data.status === true) {
      setMealType([...data.result]);
    } else {
      setMealType([]);
    }
  };

  useEffect(() => {
    setRestaurantList([]);
  }, [locationList, selectedLocation, searchRest]);

  let values = {
    getLocationList,
    locationList,
    searchRest,
    getRestaurantList,
    selectedLocation,
    setSelectedLocation,
    restaurantList,
    getMealTypeList,
    mealType,
  };
  return (
    <>
      <MaiContext.Provider value={values}>{children}</MaiContext.Provider>
    </>
  );
};
