import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import NavBar from "./components/NavBar.jsx";
// import MainSec from "./components/MainSec.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <NavBar />
      <MainSec /> */}
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
