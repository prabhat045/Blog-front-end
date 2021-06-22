import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "tachyons";
import "./App.css";
import { Store } from "./components/Context/UserContext";
import Home from "./components/Home/Home";
import MyArticles from "./components/Myarticles/MyArticles";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import Register from "./components/Register/Register";
import Signin from "./components/Signin/Signin";
import Write from "./components/Write/Write";

const App = () => {
  return (
    <Store>
      <Router>
        <div className="App">
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/Registration" component={Register} />
          <Route exact path="/Write" component={Write} />
          <Route exact path="/Myarticles" component={MyArticles} userId={1} />
        </div>
      </Router>
    </Store>
  );
};

export default App;
