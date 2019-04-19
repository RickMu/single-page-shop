import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mainview from "./components/shop";
import { Elements } from "react-stripe-elements";
import StripePayment from './components/CommonComponents/Payment/StripePayment';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import { CheckoutFlow } from './components/CheckoutPage/CheckoutFlow';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Mainview/>
        {/* <Elements>
          <StripePayment/>
        </Elements> */}
        {/* <CheckoutPage checkoutFlow={CheckoutFlow}>

        </CheckoutPage> */}
      </div>
    );
  }
}

export default App;
