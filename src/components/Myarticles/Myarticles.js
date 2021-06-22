import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../Context/UserContext";

const MyArticles = (props) => {
  const userId = props.location.userId.toString();

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5001/articles/getMyarticles?userId=${userId}`, {
      method: "get",
      headers: { "Content-type": "application/json" },
    }).then((response) =>
      response.json().then((data) => {
        setData(data);
      })
    );
  }, []);

  return (
    <div className="row">
      {data.map((data) => {
        return (
          <div className="column" key={data.id}>
            <div className="card">
              <h3 className="title">{data.title} </h3>
              <p className="description">{data.description}</p>
              <p className="body">{data.mainbody}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyArticles;
