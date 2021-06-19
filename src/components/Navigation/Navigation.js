import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./navigation.css";
import { UserContext } from "../Context/UserContext";

const Navigation = () => {
  const { resetUser } = useContext(UserContext);
  let history = useHistory();
  const onLogout = () => {
    history.push("/");
    resetUser();
  };
  return (
    <div>
      <nav className="nav">
        <h1 style={{ float: "left", position: "absolute", marginLeft: "5px" }}>
          BloggerSpot
        </h1>

        <ul className="main-nav">
          <Link to="/write">
            <li className="pointer">Write</li>
          </Link>
          <Link to="/Myarticles">
            <li className="pointer">Myarticles</li>
          </Link>

          <li>
            <button className="pointer" onClick={onLogout}>
              Sign out
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
