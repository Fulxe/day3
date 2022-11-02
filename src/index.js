import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Post from "./component/Post";
import Login from "./component/component/log";
import Blog from "./component/Component2/blog";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />} />
        <Route path="Products" element={<Post />} />
        <Route path="Login" element={<Login />} />
        <Route path="Get Access" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
