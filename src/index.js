import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Post from "./component/Post";
import Login from "./component/component/log";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={ <App />}/>
        <Route path='products' element={<Post/>}/>
        <Route path="login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
