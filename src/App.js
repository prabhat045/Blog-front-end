import React, { useState } from "react";
import "./App.css";
import Signin from "./components/Signin/Signin";
import Home from "./components/Home/Home";
import "tachyons";
import Register from "./components/Register/Register";
import Write from "./components/Write/Write";
import Myarticles from "./components/Myarticles/Myarticles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Store } from "./components/Context/UserContext";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

const App = () => {
  return (
    <Store>
      <Router>
        <div className="App">
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/Registration" component={Register} />
          <Route exact path="/Write" component={Write} />
          <Route exact path="/Myarticles" component={Myarticles} />
        </div>
      </Router>
    </Store>
  );
};

export default App;
