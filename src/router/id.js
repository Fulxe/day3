import React, { useEffect, useState } from "react";
import axios from "axios";
import "./id.css";
import { useParams } from "react-router-dom";
import Loader from "../loader/loader";

export function Info(props) {
  const { id } = useParams();
  const [data, setData] = useState();
  const [input, setInput] = useState("");
  const [change, setChange] = useState([]);
  const [search] = useState("");

  function newElement() {
    setChange([...change, input]);
  }
  const deleteInput = (value) => {
    const newChange = change.filter((e) => e !== value);
    setChange(newChange);
  };
  function Button(props) {
    return (
      <button className="rem" onClick={() => deleteInput(props.delete)}>
        {props.value}
      </button>
    );
  }
  useEffect(() => {
    const FetchData = async () => {
      const res = await axios.get("https://dummyapi.io/data/v1/post/" + id, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "app-id": "636a0100b23c1794f297d097",
        },
      });
      setData(res.data);
    };
    FetchData();
  }, []);
  return (
    <div className="fullbody">
      <div className="big">
        {data ? (
          <div>
            <div className="major">
              <div className="major-tags">
                <h1>{`dog type: ${data.tags}`}</h1>
              </div>
              <img className="major-img" src={data.image} />
              <div className="major-text">
                <marquee direction="right">{`about dog : ${data.text}`}</marquee>
              </div>
              <div className="like">{`like count : ${data.likes}`}</div>{" "}
              <h1 className="owner-name">{`owner: ${data.owner?.firstName} ${data.owner?.lastName}`}</h1>
            </div>
            <div className="major-search">
              <div className="major-value">
                <div className="val-parent">
                  <input
                    className="val"
                    onKeyDown={(e) => e.key === "Enter" && newElement()}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="what do you think about this, please tell us your opinion?"
                  />
                  <button className="val-button" onClick={() => newElement()}>
                    post
                  </button>
                </div>
                <div className="comment">
                  {change.map((e) =>
                    search.length ? (
                      e.startsWith(search) && (
                        <div className="comment1">
                          <input value={e} />

                          <Button delete={e} value="delete" />
                        </div>
                      )
                    ) : (
                      <div className="comment1">
                        <input className="additional" value={e} />

                        <Button className="rem" delete={e} value="remove" />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
