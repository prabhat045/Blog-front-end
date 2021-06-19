import React, { useState } from "react";
import "./App.css";
import Signin from "./components/Signin/Signin";
import Home from "./components/Home/Home";
import "tachyons";
import Register from "./components/Register/Register";
import Write from "./components/Write/Write";
import Myarticles from "./components/Myarticles/Myarticles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { UserContext } from "./components/Context/UserContext";

const App = () => {
  const [user, setUser] = useState({ id: "", name: "", email: "" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <div className="App">
          <Route exact path="/Home" component={Home} />
          <Route exact path="/" component={Signin} />
          <Route exact path="/Registration" component={Register} />
          <Route exact path="/Write" component={Write} />
          <Route exact path="/Myarticles" component={Myarticles} />
        </div>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
