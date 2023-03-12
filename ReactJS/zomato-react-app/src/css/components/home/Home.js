import QuickSearch from "./QuickSearch";
import { useMainContext } from "./../../../context/MainContext";
import { useEffect } from "react";

let Home = () => {
  let {
    getLocationList,
    locationList,
    searchRest,
    getRestaurantList,
    setSelectedLocation,
    selectedLocation,
    restaurantList,
    getMealTypeList,
    mealType,
  } = useMainContext();
  useEffect(() => {
    if (locationList.length == 0) getLocationList();
    if (mealType.length == 0) getMealTypeList();
  }, []);
  return (
    <>
      <main className="container-fluid">
        <section className="row main-section align-content-start">
          <header className="col-12 py-3">
            <div className="container d-lg-flex justify-content-end d-none">
              <button className="btn text-white me-3">Login</button>
              <button className="btn text-white border border-white">
                Create an account
              </button>
            </div>
          </header>
          <section className="col-12 d-flex flex-column align-items-center justify-content-center">
            <p className="brand-name fw-bold my-lg-2 mb-0">Zomato</p>
            <p className="h1 text-white my-3 text-center">
              Find the best restaurants, cafés, and bars
            </p>
            <div className="search w-50 d-flex mt-3">
              <select
                className="form-select mb-3 mb-lg-0 w-50 me-lg-3 py-2 px-3"
                onChange={(event) => {
                  setSelectedLocation(event.target.value);
                }}
              >
                <option value="">Select Location</option>
                {locationList.map((value, key) => {
                  return (
                    <option key={key} value={value.location_id}>
                      {value.name}, {value.city}
                    </option>
                  );
                })}
              </select>
              <div className="w-75 position-relative">
                <div className=" input-group w-100 position-relative">
                  <span className="input-group-text bg-white">
                    <i className="fa fa-search text-primary"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control py-2 px-3"
                    placeholder="Search for restaurants"
                    value={searchRest}
                    onChange={getRestaurantList}
                    disabled={selectedLocation === "" ? true : false}
                  />
                </div>
                <ul className="list-group position-absolute w-100">
                  {restaurantList.map((restaurant, index) => {
                    return (
                      <li key={index} className="list-group-item">
                        {restaurant.name} ({restaurant.aggregate_rating}),{" "}
                        {restaurant.locality}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </section>
        </section>
        <section className="row justify-content-center">
          <section className="col-10 mt-3">
            <h3 className="fw-bold text-navy">Quick Searches</h3>
            <p className="text-secondary">Discover restaurants by Searches</p>
          </section>
          <section className="col-10">
            <section className="row py-2">
              <QuickSearch />
            </section>
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
