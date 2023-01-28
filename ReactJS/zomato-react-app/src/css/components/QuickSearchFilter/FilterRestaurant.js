const FilterRestaurant = () => {
  return (
    <>
      <div className="col-12 food-shadow p-4 mb-4">
        <div className="d-flex align-items-center">
          <img src="/images/food-item.png" className="food-item" />
          <div className="ms-5">
            <p className="h4 fw-bold">The Big Chill Cakery</p>
            <span className="fw-bold text-muted">FORT</span>
            <p className="m-0 text-muted">
              <i
                className="fa fa-map-marker fa-2x text-danger"
                aria-hidden="true"
              ></i>
              Shop 1, Plot D, Samruddhi Complex, Chincholi …
            </p>
          </div>
        </div>
        <hr />
        <div className="d-flex">
          <div>
            <p className="m-0">CUISINES:</p>
            <p className="m-0">COST FOR TWO:</p>
          </div>
          <div className="ms-5">
            <p className="m-0 fw-bold">Bakery</p>
            <p className="m-0 fw-bold">
              <i className="fa fa-inr" aria-hidden="true"></i>
              700
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterRestaurant;
