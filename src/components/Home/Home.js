import React, { useContext } from "react";
import Navigation from "../Navigation/Navigation";
import Cover from "../Cover/Cover";
import Articles from "../Articles/Articles";
import { UserContext } from "../Context/UserContext";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>{user.name}</h1>
      <Navigation />
      <Cover />
      <br />
      <Articles />
    </div>
  );
};
export default Home;
