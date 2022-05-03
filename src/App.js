import React from "react";
import { Switch, Route, Redirect, useEffect } from "react-router";
import Home from "./Home";
import Nav from "./components/Nav";
import Admin from './Admin'
// import A from './Admin'

// import "./styles.css";


export default function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
          <Route 
            exact 
            path="/" 
            component={Home} 
          />

          <Route
            exact
            path="/admin"
            render={() => {
              return <Admin />;
            }}
          />





        <Redirect to="/" />
      </Switch>
    </div>
  );
}
