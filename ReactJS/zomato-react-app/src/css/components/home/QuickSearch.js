import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useMainContext } from "../../../context/MainContext";
let QuickSearch = () => {
  let navigate = useNavigate();
  let { mealType } = useMainContext();
  return (
    <>
      <section className="col-12 px-0 d-flex justify-content-between flex-wrap">
        {mealType.map((meal_type_item, index) => {
          return (
            <section
              key={index}
              className="px-0 d-flex border border-1 quick-search-item"
              onClick={() =>
                navigate(
                  "/search/" +
                    meal_type_item.meal_type +
                    "/" +
                    meal_type_item.name.toLowerCase()
                )
              }
            >
              <img
                src={"/images/" + meal_type_item.image}
                alt=""
                className="image-item"
              />
              <div className="pt-3 px-2">
                <h4 className="text-navy">{meal_type_item.name}</h4>
                <p className="small text-muted">{meal_type_item.content}</p>
              </div>
            </section>
          );
        })}
      </section>
    </>
  );
};

export default QuickSearch;
