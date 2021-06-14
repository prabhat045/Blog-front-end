import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <div>
      <nav className='nav'>
        <h1 style={{ float: "left", position: "absolute", marginLeft: "5px" }}>
          BloggerSpot
        </h1>

        <ul className='main-nav'>
          <Link to='/write'>
            <li className='pointer'>Write</li>
          </Link>
          <Link to='/Myarticles'>
            <li className='pointer'>Myarticles</li>
          </Link>
          <Link to='/'>
            <li>
              <button className='pointer'>Sign out</button>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
