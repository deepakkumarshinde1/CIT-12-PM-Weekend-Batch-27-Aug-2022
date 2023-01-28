let QuickSearch = () => {
  let mealTypes = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <section className="col-12 px-0 d-flex justify-content-between flex-wrap">
        {mealTypes.map((meal_type_item) => {
          return (
            <section className="px-0 d-flex border border-1 quick-search-item">
              <img
                src="/images/search-item.png"
                alt=""
                className="image-item"
              />
              <div className="pt-3 px-2">
                <h4 className="text-navy">Breakfast</h4>
                <p className="small text-muted">
                  Start your day with exclusive breakfast options
                </p>
              </div>
            </section>
          );
        })}
      </section>
    </>
  );
};

export default QuickSearch;