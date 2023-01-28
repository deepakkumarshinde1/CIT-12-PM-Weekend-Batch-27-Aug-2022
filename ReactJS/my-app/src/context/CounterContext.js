import { createContext, useContext, useState } from "react";
const CounterContext = createContext({});

// provider function
export const CounterContextProvider = ({ children }) => {
  let [counterList, setCounterList] = useState([0, 2, 4, 5, 7]);

  let incCount = (index) => {
    counterList[index] += 1;
    setCounterList([...counterList]); // recreate array
  };

  let values = {
    counterList,
    incCount,
  };
  return (
    <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
  );
};

// export useCounterContext
export const useCounterContext = () => {
  return useContext(CounterContext);
};
