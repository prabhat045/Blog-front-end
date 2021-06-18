import React, { useState, useEffect } from "react";
import "./article.css";

const Articles = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/article", {
      method: "get",
      headers: { "Content-type": "application/json" },
    }).then((response) =>
      response.json().then((data) => {
        setData([data]);
      })
    );
  }, [data]);

  return (
    <div className="row">
      {data.map((data) => {
        return (
          <div className="column" key={data.id}>
            <div className="card">
              <h3 className="title">{data.title} </h3>
              <p className="description">{data.description}</p>
              <p className="body">{data.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Articles;
