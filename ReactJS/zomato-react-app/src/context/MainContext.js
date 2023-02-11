import { createContext, useContext, useState } from "react";
import axios from "axios";
const MaiContext = createContext({});
const BASE_URL = "http://localhost:5004/api/";

export const useMainContext = () => useContext(MaiContext);

export const MainContextProvider = ({ children }) => {
  let [locationList, setLocationList] = useState([]);

  let getLocationList = async () => {
    let { data } = await axios.get(BASE_URL + "get-location-list");
    if (data.status === true) {
      setLocationList([...data.result]);
    } else {
      setLocationList([]);
    }
  };

  let values = {
    getLocationList,
    locationList,
  };
  return (
    <>
      <MaiContext.Provider value={values}>{children}</MaiContext.Provider>
    </>
  );
};
