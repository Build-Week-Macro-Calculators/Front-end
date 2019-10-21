import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

import HeaderLayout from "./component/HeaderLayout"
import Footer from "./component/Footer"
import Content from "./component/Content"
import { Formik } from "formik";
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import ForgetPassword from "./component/ForgetPassword";
import Dashboard from "./component/Dashboard"





function App() {
  return (
    <>
   <HeaderLayout/>
   {/* <Content/> */}
   {/* <Route exact path="/" component={WelcomePage} /> */}
   <Route  exact path="/" component={Login} />
   <Route  exact path="/Dashboard" component={Dashboard} />
   <Route exact path="/SignUp" component={SignUp} />
   <Route exact path="/ForgetPassword" component={ForgetPassword} />
    
   {/* <SignUp/> */}
   </>
  );
}

export default App;
