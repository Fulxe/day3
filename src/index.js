import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Post from "./Post/Post";
import Login from "./login/log";
import Blog from "./Blog/blog";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Theme } from "./Theme/theme";
import {Info} from "./router/id";
// import Loader from "./loader/loader"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<App />} />
          <Route path="Products" element={<Post />} />
          <Route path="Login" element={<Login />} />
          <Route path="Get-Access" element={<Blog />} />
          <Route path="/Get-Access/blog/:id" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  </React.StrictMode>
);
