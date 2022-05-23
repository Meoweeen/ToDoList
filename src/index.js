import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import Description from "./Description";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Description" element={<Description />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
