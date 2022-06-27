import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too
import Login from "./components/Login";
import Dash from "./components/Dash";
import Table from "./components/Table";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dash" element={<Dash />} />
      <Route path="/table" element={<Table />} />
    </Routes>
  </BrowserRouter>
);
