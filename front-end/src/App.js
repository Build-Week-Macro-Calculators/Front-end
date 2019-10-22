import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HeaderLayout from "./component/HeaderLayout"
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import ForgetPassword from "./component/ForgetPassword";
import MealAndSnack from "./component/MealAndSnack";





function App() {
  return (
    <>
   <HeaderLayout/>
  
   <Route  exact path="/" component={Login} />
   <Route exact path="/SignUp" component={SignUp} />
   <Route exact path="/ForgetPassword" component={ForgetPassword} />
   <Route exact path="/MealAndSnack" component={MealAndSnack} />
   </>
  );
}

export default App;
