import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Services from "./components/pages/services/Services";
import Home from "./components/pages/home/Home";
import Products from "./components/pages/products/Products";
import ContactUs from "./components/pages/contact/ContactUs";
import SignUp from "./components/pages/registration/SingUp";
import Marketing from "./components/pages/marketing/Marketing";
import Consulting from "./components/pages/consulting/Consulting";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/sing-up" component={SignUp} />
          <Route path="/marketing" component={Marketing} />
          <Route path="/consulting" component={Consulting} />
      </Switch>
    </Router>
  );
}

export default App;
