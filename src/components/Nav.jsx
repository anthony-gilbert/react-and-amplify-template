import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";

const Nav = () => {
  
  return (
    <div id="nav" className="mt-10 ml-6 pb-10">
      <span className="border-solid border-2  ml-3 border-sky-500 rounded-lg px-3 py-2 text-medium hover:bg-slate-100 hover:text-slate-900" id="homeNav">
        <NavLink
          data-dd-action-name="home-nav-link"
          activeClassName="selected"
          activeStyle={{ textDecoration: "none" }}
          to="/">
          Home
        </NavLink>
      </span>
      <span className="border-solid border-2  ml-3 border-sky-500 rounded-lg px-3 py-2 text-medium hover:bg-slate-100 hover:text-slate-900" id="startNav">
        <NavLink
          to="/create-order"
          activeClassName="selected"
          activeStyle={{ textDecoration: "none" }}
          data-dd-action-name="user-action-nav-link">
          Create Order
        </NavLink>
      </span>

      <span className="border-solid border-2  ml-3 border-sky-500 rounded-lg px-3 py-2 text-medium hover:bg-slate-100 hover:text-slate-900" id="startNav">
        <NavLink
          to="/admin"
          activeClassName="selected"
          activeStyle={{ textDecoration: "none" }}
          data-dd-action-name="user-action-nav-link">
          Admin
        </NavLink>
      </span>

      <span className="border-solid border-2 ml-3 border-sky-500 rounded-lg px-3 py-2 text-medium hover:bg-slate-100 hover:text-slate-900" id="startNav">
        <NavLink
          to="/login"
          activeClassName="selected"
          activeStyle={{ textDecoration: "none" }}
          data-dd-action-name="user-action-nav-link">
          Login
        </NavLink>
      </span>

      
    </div>
  );
};

export default withRouter(Nav);
