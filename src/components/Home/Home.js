import React from "react";
import Navigation from "../Navigation/Navigation";
import Cover from "../Cover/Cover";
import Articles from "../Articles/Articles";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Cover />
        <br />
        <Articles />
      </div>
    );
  }
}
export default Home;
