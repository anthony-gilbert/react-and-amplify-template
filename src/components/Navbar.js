// import Link from 'next/link
import React from 'react'
// import '../configureAmplify'
// import { useState, useEffect} from 'react'
import HomePage from '../HomePage'
import MyOrders from '../MyOrders'
import AllOrders from '../AllOrders'
import CreateOrder from '../CreateOrder'
import Login from '../login'
import Signup from '../Signup'
import Admin from '../Admin'
import { BrowserRouter  as Router, Route, Switch, NavLink, Link, withRouter} from 'react-router-dom';

const Navbar = () => {
    // const [ signedUser, setSignedUser] = useState(false)

    return (
        <div className='pt-5 pl-5'>
            
            <div class="flex bg-gray-200">

                <div class="flex-1 text-gray-700 text-center   py-2 m-2">
                    <a href='/' className='rounded-lg px-3 py-2 text-slate-700 font-medium  bg-slate-300 hover:bg-slate-500 hover:text-slate-900'>Home Page</a>
                </div>
                <div class="contents">
                    <div class="flex-1 text-gray-700 text-center py-2 m-2">
                        <a href='/my-orders' className='rounded-lg px-3 py-2 text-slate-700 font-medium bg-slate-300 hover:bg-slate-500 hover:text-slate-900'>My Orders</a>
                    </div>
                    <div class="flex-1 text-gray-700 text-center py-2 m-2">
                        <a href='/create-order' className='rounded-lg px-3 py-2 text-slate-700 font-medium bg-slate-300 hover:bg-slate-500 hover:text-slate-900'>Create Orders</a>
                    </div>
                    <div class="flex-1 text-gray-700 text-center py-2 m-2">
                        <a href='/all-orders' className='rounded-lg px-3 py-2 text-slate-700 font-medium bg-slate-300 hover:bg-slate-500 hover:text-slate-900'>All Orders</a>
                    </div>
                    <div class="flex-1 text-gray-700 text-center py-2 m-2">
                        <a href='/admin' className='rounded-lg px-3 py-2 text-slate-700 font-medium bg-slate-300 hover:bg-slate-500 hover:text-slate-900'>Admin</a>
                    </div>
                    <div class="flex-1 text-gray-700 text-center py-2 m-2">
                        <a href='/login' className='rounded-lg px-3 py-2 text-slate-700 font-medium bg-slate-300 hover:bg-slate-500 hover:text-slate-900'>Login</a>
                    </div>
                    <div class="flex-1 text-gray-700 text-center py-2 m-2">
                        <a href='/' className='rounded-lg px-3 py-2 text-slate-700 font-medium bg-slate-300 hover:bg-slate-500 hover:text-slate-900'>Logout</a>
                    </div>
                    <div class="flex-1 text-gray-700 text-center py-2 m-2">
                        <a href='/signup' className='rounded-lg px-3 py-2 text-slate-700 font-medium bg-slate-300 hover:bg-slate-500 hover:text-slate-900'>Signup</a>
                    </div>
                </div>

            </div>

            <Router>
                <div className='App'>
                    <Switch>
                        {/* Public Routes */}
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                        <Route exact path="/login">
                            <Login/>
                        </Route>
                        {/* Routes for Generic Logged In User */}
                        <Route exact path="/my-orders">
                            <MyOrders/>
                        </Route>
                        <Route exact path="/create-order">
                            <CreateOrder/>
                        </Route>
                        {/* Admin Routes*/}
                        <Route exact path="/all-orders">
                            <AllOrders/>
                        </Route>
                        <Route exact path="/admin">
                            <Admin/>
                        </Route>
                        <Route exact path="/signup">
                            <Signup/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default Navbar;