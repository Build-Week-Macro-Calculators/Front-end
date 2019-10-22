import React, { useEffect } from "react";
import "./Dashboard.css"
import { connect } from "react-redux"

import HeaderLayout from "../HeaderLayout"
import { fetchProfile } from "../../store/actions"

const Dashboard = ({ 
    currentUser,
    calorieIntake, 
    fetchProfile 
}) => {
    useEffect(() => {
        fetchProfile();
    }, [])

    return (
      <div className = "containerDashboard">
      <HeaderLayout />
        <div className="headerDashboard">
            <h1>Hello, {currentUser.username}!</h1>
        </div>
        <div className = "mainBox">
            <div className ="box">
                <h3>Today's Calorie Goal</h3>
                <h1>{calorieIntake} Calories</h1>
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
                <h4>Protein: {Math.round(calorieIntake * 0.075)}g Carbs: {Math.round(calorieIntake * 0.1)}g Fat: {Math.round(calorieIntake * 0.033)}g</h4>
            </div>
        </div>
        <div className ="bottomDashboard">

        </div>
        <div className="bottom">

        </div>
      </div>

  );
};

const mapStateToProps = state => {
    console.log(state)
    return {
        currentUser: state.currentUser,
        loading: state.loading,
        calorieIntake: state.calorieIntake
    }
}

export default connect(mapStateToProps, {fetchProfile})(Dashboard);
