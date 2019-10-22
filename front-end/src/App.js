import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { userReducer } from "./store/reducers"
import { store } from "./index"
import HeaderLayout from "./component/HeaderLayout"
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import ForgetPassword from "./component/ForgetPassword";
import MealAndSnack from "./component/MealAndSnack";
import Dashboard from "./component/Dashboard/Dashboard"
import Meals from "./component/Meals/Meals"
import { PrivateRoute } from "./component/PrivateRoute"
function App() {
  return (
    <>
   <Route  exact path="/" component={Login} />
   <Route exact path="/ForgetPassword" component={ForgetPassword} />
   <Route exact path="/MealAndSnack" component={MealAndSnack} />
      <Route exact path="/SignUp" render={props => 
        <Provider store={store}>
          <SignUp {...props} />
        </Provider> 
        }/>
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/Meals" component={Meals} />
   </>
  );
}

export default App;
