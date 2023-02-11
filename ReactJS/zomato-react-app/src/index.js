import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MainContextProvider } from "./context/MainContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.Fragment>
    <BrowserRouter>
      <MainContextProvider>
        <App />
      </MainContextProvider>
    </BrowserRouter>
  </React.Fragment>
);
