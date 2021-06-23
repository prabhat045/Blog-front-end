import React, { useContext } from "react";
import Navigation from "../Navigation/Navigation";
import Cover from "../Cover/Cover";
import Articles from "../Articles/Articles";
import { UserContext } from "../Context/UserContext";

const Home = () => {
  const { user } = useContext(UserContext);
  const userId = user.id;
  return (
    <div>
      <h3>{user.name}</h3>
      <Navigation userId={userId} />
      <Cover />
      <br />
      <Articles />
    </div>
  );
};
export default Home;
