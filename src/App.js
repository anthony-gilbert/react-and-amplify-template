import { useState, useEffect } from 'react'
import { API } from 'aws-amplify'
import { listOrders } from '../src/graphql/queries'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter  as Router, Route, Switch} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <hr></hr>
      {/* <h1>Aplication Body</h1> */}
      <Footer />
    </div>
  );
}
