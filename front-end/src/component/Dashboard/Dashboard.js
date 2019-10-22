import React, { useEffect } from "react";
import "./Dashboard.css"
import { connect } from "react-redux"

import HeaderLayout from "../HeaderLayout"
import { fetchProfile } from "../../store/actions"

const Dashboard = ({ 
    currentUser, 
    fetchProfile 
}) => {
    const {weight, height, age, exerciseFrequency, goal, male} = currentUser;

    useEffect(() => {
        fetchProfile();
    }, [])

    let calorieIntake;
    if (male) {
        calorieIntake = Math.ceil(((66 + (6.23 * weight) + (12.7 * height) - (6.8 * age)) * exerciseFrequency) * (1 + goal))
    } else {
        calorieIntake = Math.ceil(((655 + (4.35 * weight) + (4.7 * height) - (4.5 * age)) * exerciseFrequency) * (1 + goal))
    }
    const protein = Math.round(calorieIntake * 0.075)
    const carbs = Math.round(calorieIntake * 0.1)
    const fat = Math.round(calorieIntake * 0.033)

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
                <h4>Protein: {protein}g Carbs: {carbs}g Fat: {fat}g</h4>
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
        loading: state.loading
    }
}

export default connect(mapStateToProps, {fetchProfile})(Dashboard);
