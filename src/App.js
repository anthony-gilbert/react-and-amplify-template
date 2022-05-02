// import { useState, useEffect } from 'react'
// import { API } from 'aws-amplify'
// import { listOrders } from '../src/graphql/queries'
// import Footer from './components/Footer';
// import HomePage from './HomePage'
import Navbar from './components/Navbar'
import Home from './Home'
import CreateOrder from './CreateOrder'
import { BrowserRouter  as Router, Route, Switch} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
            <Home />
          {/* <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/create-order">
                <CreateOrder />
            </Route>
          </Switch> */}
          
          {/* <Footer /> */}
        </div>
      </div>
    </Router>
  );
}
