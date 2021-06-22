import React, { useState, useEffect } from "react";

const Myarticles = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/articles/getMyarticles", {
      method: "get",
      headers: { "Content-type": "application/json" },
    }).then((response) =>
      response.json().then((data) => {
        setData(data);
      })
    );
  }, []);

  return (
    <div className='row'>
      {data.map((data) => {
        return (
          <div className='column' key={data.id}>
            <div className='card'>
              <h3 className='title'>{data.title} </h3>
              <p className='description'>{data.description}</p>
              <p className='body'>{data.mainbody}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Myarticles;
