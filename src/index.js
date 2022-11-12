import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Blog from "./component/Component2/blog";
import Post from "./component/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Theme } from "./Theme/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<App />} />
          <Route path="Products" element={<Post />} />
          <Route path="Get Access" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  </React.StrictMode>
);
