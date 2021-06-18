import React, { Component } from "react";
import "./App.css";
import Signin from "./components/Signin/Signin";
import Home from "./components/Home/Home";
import "tachyons";
import Register from "./components/Register/Register";
import Write from "./components/Write/Write";
import Myarticles from "./components/Myarticles/Myarticles";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        id: "",
        name: "",
        email: "",
      },
    };
  }
  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
      },
    });
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/Home' component={Home} />
          <Route exact path='/' component={Signin} />
          <Route exact path='/Registration' component={Register} />
          <Route exact path='/Write' component={Write} />
          <Route exact path='/Myarticles' component={Myarticles} />
        </div>
      </Router>
    );
  }
}

export default App;
