import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SignInSide from "./scenes/login";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<SignInSide />} />
      </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
