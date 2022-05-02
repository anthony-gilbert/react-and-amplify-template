// // import Link from 'next/link
// import React from 'react'
// // import '../configureAmplify'
// // import { useState, useEffect} from 'react'
// import HomePage from '../HomePage'
// import MyOrders from '../MyOrders'
// import AllOrders from '../AllOrders'
// import CreateOrder from '../CreateOrder'
// import Login from '../login'
// import Signup from '../Signup'
// import Admin from '../Admin'
// import { BrowserRouter  as Router, Route, Switch, NavLink, Link, withRouter} from 'react-router-dom';

// const Navbar = () => {
//     // const [ signedUser, setSignedUser] = useState(false)

//     return (
//         <div className='pt-5 pl-5'>
//             <h1>Navbar</h1>
//             <div className="flex bg-gray-200">
//                 <div className="flex-1 text-gray-700 text-center py-2 m-2">
                    
//                     <Link to="/" className='rounded-lg px-3 py-2 text-slate-700 font-medium  bg-slate-300 hover:bg-slate-500 hover:text-slate-900'>Home Page</Link>
//                 </div>
//                 <div className="contents">
//                     <div className="flex-1 text-gray-700 text-center py-2 m-2">
//                         <Link to='/my-orders' className='rounded-lg px-3 py-2 text-slate-700 font-medium bg-slate-300 hover:bg-slate-500 hover:text-slate-900'>My Orders</Link>
//                     </div>
//                     <div className="flex-1 text-gray-700 text-center py-2 m-2">
//                         <Link to='/create-order' className='rounded-lg px-3 py-2 text-slate-700 font-medium bg-slate-300 hover:bg-slate-500 hover:text-slate-900'>Create Orders</Link>
//                     </div>
//                     <div className="flex-1 text-gray-700 text-center py-2 m-2">
//                         <Link to='/all-orders' className='rounded-lg px-3 py-2 text-slate-700 font-medium bg-slate-300 hover:bg-slate-500 hover:text-slate-900'>All Orders</Link>
//                     </div>
//                     <div className="flex-1 text-gray-700 text-center py-2 m-2">
//                         <Link to='/admin' className='rounded-lg px-3 py-2 text-slate-700 font-medium bg-slate-300 hover:bg-slate-500 hover:text-slate-900'>Admin</Link>
//                     </div>
//                     <div className="flex-1 text-gray-700 text-center py-2 m-2">
//                         <Link to='/login' className='rounded-lg px-3 py-2 text-slate-700 font-medium bg-slate-300 hover:bg-slate-500 hover:text-slate-900'>Login</Link>
//                     </div>
//                     <div className="flex-1 text-gray-700 text-center py-2 m-2">
//                         <Link to='/' className='rounded-lg px-3 py-2 text-slate-700 font-medium bg-slate-300 hover:bg-slate-500 hover:text-slate-900'>Logout</Link>
//                     </div>
//                     <div className="flex-1 text-gray-700 text-center py-2 m-2">
//                         <Link to='/signup' className='rounded-lg px-3 py-2 text-slate-700 font-medium bg-slate-300 hover:bg-slate-500 hover:text-slate-900'>Signup</Link>
//                     </div>
//                 </div>

//             </div>

//             <Router>
//                 <div className='App'>
//                     <Switch>
//                         {/* Public Routes */}
//                         <Route exact path="/">
//                             <HomePage/>
//                         </Route>
//                         <Route exact path="/login">
//                             <Login/>
//                         </Route>
//                         {/* Routes for Generic Logged In User */}
//                         <Route exact path="/my-orders">
//                             <MyOrders/>
//                         </Route>
//                         <Route exact path="/create-order">
//                             <CreateOrder/>
//                         </Route>
//                         {/* Admin Routes*/}
//                         <Route exact path="/all-orders">
//                             <AllOrders/>
//                         </Route>
//                         <Route exact path="/admin">
//                             <Admin/>
//                         </Route>
//                         <Route exact path="/signup">
//                             <Signup/>
//                         </Route>
//                     </Switch>
//                 </div>
//             </Router>
//         </div>
//     )
// }

// export default Navbar;


// import React from "react";
// import { NavLink, Link, withRouter } from "react-router-dom";
// // import { generateHandles } from "../generateHandles";
// const Navbar = () => {
// //   const sectorProp = () => {
// //     return `/${generateHandles()}/contact/random`;
// //   };
//   return (
//     <div id="nav">
          
//       <span className="navButton" id="homeNav">
//         <NavLink
//           data-dd-action-name="home-nav-link"
//           activeClassName="selected"
//           activeStyle={{ textDecoration: "none" }}
//           to="/">
//           Home | 
//         </NavLink>
//       </span>

//       <span className="navButton" id="startNav">
//         <NavLink
//           to="/create-order"
//           activeClassName="selected"
//           activeStyle={{ textDecoration: "none" }}
//           data-dd-action-name="user-action-nav-link">
//            Create Order | 
//         </NavLink>
//       </span>

//       <span className="navButton" id="startNav">
//         <NavLink
//           to="/all-orders"
//           activeClassName="selected"
//           activeStyle={{ textDecoration: "none" }}
//           data-dd-action-name="error-nav-link">
//            All Orders |
//         </NavLink>
//       </span>

//       <span className="navButton" id="middleNav">
//         <NavLink
//           to="/my-orders"
//           data-dd-action-name="resource-nav-link"
//           activeClassName="selected"
//           activeStyle={{ textDecoration: "none" }}>
//            My Orders |
//         </NavLink>
//       </span>

//       <span className="navButton" id="endNav">
//         <NavLink
//         //   to={sectorProp}
//         to="/admin"
//           activeClassName="selected"
//           activeStyle={{ textDecoration: "none" }}
//           data-dd-action-name="contacts-nav-link">
//            Admin | 
//         </NavLink>
//       </span> 

//       <span className="navButton" id="endNav">
//         <NavLink
//         //   to={sectorProp}
//         to="/login"
//           activeClassName="selected"
//           activeStyle={{ textDecoration: "none" }}
//           data-dd-action-name="contacts-nav-link">
//            Login | 
//         </NavLink>
//       </span>
//       <span className="navButton" id="endNav">
//         <NavLink
//         //   to={sectorProp}
//         to="/signup"
//           activeClassName="selected"
//           activeStyle={{ textDecoration: "none" }}
//           data-dd-action-name="contacts-nav-link">
//            Signup |
//         </NavLink>
//       </span>
//       <span className="navButton" id="endNav">
//         <NavLink
//         //   to={sectorProp}
//         to="/"
//           activeClassName="selected"
//           activeStyle={{ textDecoration: "none" }}
//           data-dd-action-name="contacts-nav-link">
//            Logout
//         </NavLink>
//       </span>
//     </div>
//   );
// };
import { NavLink, Link, withRouter } from "react-router-dom";
// export default Navbar;
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <h1>ACME</h1> */}
      <div clasname="linke">
          <span className="navButton" id="middleNav">
            <NavLink
              to="/"
              data-dd-action-name="resource-nav-link"
              activeClassName="selected"
              activeStyle={{ textDecoration: "none" }}>
              Home
            </NavLink>
          </span>
          <span className="navButton" id="middleNav">
            <NavLink
              to="/my-orders"
              data-dd-action-name="resource-nav-link"
              activeClassName="selected"
              activeStyle={{ textDecoration: "none" }}>
              My Orders
            </NavLink>
          </span>
          <span className="navButton" id="middleNav">
            <NavLink
              to="/create-order"
              data-dd-action-name="resource-nav-link"
              activeClassName="selected"
              activeStyle={{ textDecoration: "none" }}>
              Create Order
            </NavLink>
          </span>
          <span className="navButton" id="middleNav">
            <NavLink
              to="/all-orders"
              data-dd-action-name="resource-nav-link"
              activeClassName="selected"
              activeStyle={{ textDecoration: "none" }}>
              All Orders
            </NavLink>
          </span>
          <span className="navButton" id="middleNav">
            <NavLink
              to="/login"
              data-dd-action-name="resource-nav-link"
              activeClassName="selected"
              activeStyle={{ textDecoration: "none" }}>
              Login
            </NavLink>
          </span>
          <span className="navButton" id="middleNav">
            <NavLink
              to="/"
              data-dd-action-name="resource-nav-link"
              activeClassName="selected"
              activeStyle={{ textDecoration: "none" }}>
              Logout
            </NavLink>
          </span>
          <span className="navButton" id="middleNav">
            <NavLink
              to="/admin"
              data-dd-action-name="resource-nav-link"
              activeClassName="selected"
              activeStyle={{ textDecoration: "none" }}>
              Admin
            </NavLink>
          </span>
      </div>
    </nav>
   );
}
 
export default Navbar;