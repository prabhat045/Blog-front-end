import React, { useContext, useState } from "react";
import Navigation from "../Navigation/Navigation";
import Cover from "../Cover/Cover";
import Articles from "../Articles/Articles";
import { UserContext } from "../Context/UserContext";

const Home = () => {
  const { user } = useContext(UserContext);
  const userId = user.id;
  return (
    <div>
      <h1>{userId}</h1>
      <Navigation userId={userId} />
      <Cover />
      <br />
      <Articles />
    </div>
  );
};
export default Home;
