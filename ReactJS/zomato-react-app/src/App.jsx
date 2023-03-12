import { Route, Routes } from "react-router-dom";
import Home from "./css/components/home/Home";
import Filter from "./css/components/QuickSearchFilter/Filter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:id/:type" element={<Filter />} />
      </Routes>
    </>
  );
}

export default App;
