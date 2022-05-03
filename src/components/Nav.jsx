import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";

const Nav = () => {
  
  return (
    <div id="nav">
      <span className="navButton" id="homeNav">
        <NavLink
          data-dd-action-name="home-nav-link"
          activeClassName="selected"
          activeStyle={{ textDecoration: "none" }}
          to="/">
          Home
        </NavLink>
      </span>

      <span className="navButton" id="startNav">
        <NavLink
          to="/admin"
          activeClassName="selected"
          activeStyle={{ textDecoration: "none" }}
          data-dd-action-name="user-action-nav-link">
          Admin
        </NavLink>
      </span>
      
    </div>
  );
};

export default withRouter(Nav);
