import React from "react";
import "./Dashboard.css"
import { connect } from "react-redux"

import HeaderLayout from "../HeaderLayout"

const Dashboard = (props) => {

  return (
      <div className = "containerDashboard">
      <HeaderLayout history={props.history} />
        <div className="headerDashboard">
            <h1>Dashboard</h1>
        </div>
        <div className = "mainBox">
            <div className ="box">
                <h3>Today's Calorie Goal</h3>
                <h1>3,125 Calories</h1>
                <select className = "goalsInput" placeholder ="Edit your nutrition goals">
                    <option value="null">Edit Your Nutrition Goals</option>
                    <option value="null">Aggressive Weight Loss</option>
                    <option value="null">Moderate Weight Loss</option>
                    <option value="null">Mild Weight Loss</option>
                    <option value="null">Maintain Healthy Weight</option>
                    <option value="null">Moderate Weight Gain</option>
                    <option value="null">Aggressive Weight Gain</option>
                </select>
            </div>
            <div className = "box display-flex">
                <h3>Macro Nutrient Breakdown</h3>
                <div className = "pieChart"></div>
                <h4>Protein: 150g Carbs: 300g Fat: 60g</h4>
            </div>
        </div>
        <div className ="bottomDashboard">

        </div>
        <div className="bottom">

        </div>
      </div>

  );
};

export default connect(null, {})(Dashboard);
