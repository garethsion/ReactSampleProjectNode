import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PurchaseOrderList from './components/PurchaseOrderList';
// import PurchaseOrderList from './components/PurchaseOrderList';
// import OrderDetails from './components/OrderDetails';
// import Privacy from './components/Privacy';


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <PurchaseOrderList />
        <Footer />
      </div>
    )
  }
}
