import { createContext, useContext, useState } from "react";
import axios from "axios";
const MaiContext = createContext({});
const BASE_URL = "http://localhost:5004/api/";

export const useMainContext = () => useContext(MaiContext);

export const MainContextProvider = ({ children }) => {
  let [locationList, setLocationList] = useState([]);
  let [searchRest, setSearchRest] = useState("");
  let [selectedLocation, setSelectedLocation] = useState("");

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
      console.log(data);
    }
  };

  let values = {
    getLocationList,
    locationList,
    searchRest,
    getRestaurantList,
    selectedLocation,
    setSelectedLocation,
  };
  return (
    <>
      <MaiContext.Provider value={values}>{children}</MaiContext.Provider>
    </>
  );
};
