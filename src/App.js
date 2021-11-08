import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
  from "react-router-dom";
import './App.css';
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
