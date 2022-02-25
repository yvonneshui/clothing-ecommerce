import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ShopPage from "./pages/ShopPage";
import Header from "./components/header/Header";
import SignInSignUp from "./components/sign-in-sign-up/SignInSignUp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
