import React from "react";
import { Switch, Route, Redirect, useEffect } from "react-router";


import Home from "./Home";
import Nav from "./components/Nav";
import Admin from './Admin'


import login from './login'
// Signup(Public level view)
import Signup from './Signup'
// Logout(Logged in as user, level view)
import Logout from './Logout'
// MyOrders(Logged in as user, level view)
import MyOrders from './MyOrders'
// AllOrders(Admin level view)
import AllOrders from './AllOrders'
// import CreateOrder from './CreateOrder'
import CreateOrder from './CreateOrder'
// import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>

        {/* Home Page */}
          <Route 
            exact 
            path="/" 
            component={Home} 
            />

        {/* // Admin Dashboard(Admin level view) */}
          <Route
            exact
            path="/admin"
            render={() => {
              return <Admin />;
            }}
          />
          <Route
            exact
            path="/login"
            render={() => {
              return <login />;
            }}
          />

          <Route
            exact
            path="/create-order"
            render={() => {
              return <CreateOrder />;
            }}
          />


        <Redirect to="/" />
      </Switch>
    </div>
  );
}




