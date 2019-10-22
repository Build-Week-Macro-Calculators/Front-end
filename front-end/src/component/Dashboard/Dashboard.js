import React, { useEffect, useState } from "react";
import "./Dashboard.scss"
import { connect } from "react-redux"

import HeaderLayout from "../HeaderLayout"
import { fetchProfile, editGoals } from "../../store/actions"

const Dashboard = ({ 
    currentUser,
    calorieIntake, 
    fetchProfile ,
    editGoals
}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [newInfo, setNewInfo] = useState({
        goal: 0,
        weight: 0
    })

    const saveGoals = e => {
        e.preventDefault();
        editGoals(newInfo)    
        setIsEditing(false)
        console.log(newInfo)
    }

    useEffect(() => {
        fetchProfile();
    }, [currentUser.weight])


    const handleChange = e => {
        setNewInfo({
            ...newInfo,
            [e.target.name]: +e.target.value
        })
    }

    return (
      <div className = "containerDashboard">
      <HeaderLayout />
        <div className="headerDashboard">
            <h1>Hello, {currentUser.username}!</h1>
        </div>
        <div className = "mainBox">
            <div className ="box">
            { !isEditing 
                ?   <div className="calorieGoal">
                        <h3>Today's Calorie Goal</h3>
                        <h1>{calorieIntake} Calories</h1>
                        <button onClick={() => setIsEditing(true)}>Edit Your Goals</button>               
                    </div>
                :   <form onSubmit={saveGoals}>
                        <label>Edit your current weight:</label>
                        <input 
                            name="weight"
                            type="number" 
                            placeholder={`Last weigh-in: ${currentUser.weight} lbs.`} 
                            value={newInfo.weight}
                            onChange={handleChange} 
                        />
                        <select onChange={handleChange} name="goal" className = "goalsInput" placeholder ="Edit your nutrition goals">
                            <option value=''>Edit Nutrition Goals</option>
                            <option value={-.20}>Aggressive Weight Loss</option>
                            <option value={-.15}>Moderate Weight Loss</option>
                            <option value={-.10}>Mild Weight Loss</option>
                            <option value={0}>Maintain Healthy Weight</option>
                            <option value={.10}>Moderate Weight Gain</option>
                            <option value={.15}>Aggressive Weight Gain</option>
                        </select>
                        <button type="submit">Save New Goals</button>
                    </form>  
            }
            </div>
            <div className = "box display-flex">
                <h3>Macro Nutrient Breakdown</h3>
                <div className = "pieChart"></div>
                <h4>Protein: {Math.round(calorieIntake * 0.075)}g Carbs: {Math.round(calorieIntake * 0.1)}g Fat: {Math.round(calorieIntake * 0.033)}g</h4>
            </div>
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

export default connect(mapStateToProps, {fetchProfile, editGoals})(Dashboard);
