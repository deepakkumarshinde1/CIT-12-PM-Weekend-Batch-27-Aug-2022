import React from "react"; // es6
// const React = require('react'); // common js

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CounterContextProvider } from "./context/CounterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </React.StrictMode>
);

// Node =>
// const http = require('http') => Common JS
// import http from  'http
