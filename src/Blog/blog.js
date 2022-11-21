import "./blog.css";
import { Second } from "../second/Second";
import React, { useState } from "react";
import axios from "axios";
import { useEffect, useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/footer";
import { DarkMode } from "../Theme/theme";

function Blog() {
  const { ToggleSwitch, darkMode } = useContext(DarkMode);
  const [data, setData] = useState([]);

  const getData = async () => {
    // const res = await axios.get('https://dummyapi.io/data/v1/post?limit=10', {
    try {
      // console.log('sent')
      const res = await axios.get("https://dummyapi.io/data/v1/post?limit=10", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "app-id": "636a0100b23c1794f297d097",
        },
      });

      setData(res.data.data);

      console.log(res.data.data);
    } catch (err) {
      alert("dahiad yavul");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={`App ${darkMode && "grey"}`}>
      <div className="Head">
        <div className="head2">
          <h1 style={{color : darkMode && "white"}}>Blog posts</h1>
          <p style={{color : darkMode && "white"}}>Our latest updates and blogs about managing your team</p>
        </div>
      </div>
      <div className="margin"></div>
      <div className="posts">
        {data.map((post) => (
          <Second
            id={post.id}
            image={post.image}
            text={post.text}
            heading={post.tags}
            name={post.owner.firstName}
            avatar={post.owner.picture}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
function Logo() {
  return (
    <div className="navbar-left">
      <p>team</p>
    </div>
  );
}
export default Blog;
