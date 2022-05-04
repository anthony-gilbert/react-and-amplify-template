import React from "react";
import { Switch, Route, Redirect, useEffect } from "react-router";
import Home from "./Home";
import CreateOrder from './CreateOrder'
import Admin from './Admin'
import Login from './login'
import Nav from "./components/Nav";
import Signup from './Signup'
import Logout from './Logout'
import MyOrders from './MyOrders'
// import AllOrders from './AllOrders'




// Signup(Public level view)
// Logout(Logged in as user, level view)
// MyOrders(Logged in as user, level view)
// AllOrders(Admin level view)
// import CreateOrder from './CreateOrder'
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
              return <Login />;
            }}
          />

          <Route
            exact
            path="/create-order"
            render={() => {
              return <CreateOrder />;
            }}
          />

          <Route
            exact
            path="/signup"
            render={() => {
              return <Signup />;
            }}
          />

          <Route
            exact
            path="/my-orders"
            render={() => {
              return <MyOrders />;
            }}
          />


        <Redirect to="/" />
      </Switch>
    </div>
  );
}




