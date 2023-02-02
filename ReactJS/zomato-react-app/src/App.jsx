import { useState } from "react";
import ClassComponent from "./css/components/ClassComponent";
import FunctionComponent from "./css/components/FunctionComponent";
import Home from "./css/components/home/Home";
import Filter from "./css/components/QuickSearchFilter/Filter";

function App() {
  let [toggle, setToggle] = useState(false);
  return (
    <>
      <center>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        {toggle == true ? <ClassComponent /> : <FunctionComponent />}
      </center>
    </>
  );
}

export default App;
