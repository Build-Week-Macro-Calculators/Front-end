import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { userReducer } from "./store/reducers"

import { store } from "./index"
import HeaderLayout from "./component/HeaderLayout"
import Footer from "./component/Footer"
import Content from "./component/Content"
import { Formik } from "formik";
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import ForgetPassword from "./component/ForgetPassword";
import Dashboard from "./component/Dashboard/Dashboard"
import { PrivateRoute } from "./component/PrivateRoute"

function App() {
  return (
    <>
      <Route  exact path="/" component={Login} />
      <Route exact path="/SignUp" render={props => 
        <Provider store={store}>
        <SignUp {...props} />
        </Provider> 
        }/>
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <Route exact path="/ForgetPassword" component={ForgetPassword} />
   </>
  );
}

export default App;
