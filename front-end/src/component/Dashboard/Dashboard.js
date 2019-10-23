import React, { useEffect, useState } from "react";
import "./Dashboard.scss"
import { connect } from "react-redux"
import { fetchProfile, editGoals } from "../../store/actions"
import HeaderLayout from "../HeaderLayout/HeaderLayout"
import ReactMinimalPieChart from "react-minimal-pie-chart";

const Dashboard = ({ 
    currentUser,
    calorieIntake, 
    fetchProfile ,
    editGoals,
    protein,
    carbs,
    fat
}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [time, setTime] = useState(new Date().getHours())
    const [newInfo, setNewInfo] = useState({
        goal: 0,
        weight: currentUser.weight ? currentUser.weight : ''
    })

    const saveGoals = e => {
        e.preventDefault();
        editGoals(newInfo)    
        setIsEditing(false)
    }

    useEffect(() => {
        fetchProfile();
        setNewInfo({
            ...newInfo,
            weight: currentUser.weight
        })
    }, [currentUser.weight, currentUser.goal])


    const handleChange = e => {
        setNewInfo({
            ...newInfo,
            [e.target.name]: +e.target.value
        })
    }
console.log(time > 12 ? time - 12 : time)
    return (
      <div className = "containerDashboard">
      <HeaderLayout />
        <div className = "mainBox">
        <div className="headerDashboard">
            <h1>{time >= 0 && time < 12 
                ? 'Good Morning' 
                : time >= 12 && time <= 16 
                ? 'Good Afternoon' 
                : 'Good Evening'
            }, {currentUser.username}!</h1>
        </div>
        <div className="data-display-containers">
                <div className ="box">
                { !isEditing 
                    ?   <div className="calorieGoal">
                            <h3>Today's Calorie Goal</h3>
                            <h1>{calorieIntake} Calories</h1>
                            <button onClick={() => setIsEditing(true)}>Edit Your Goals</button>               
                        </div>
                    :   <form onSubmit={saveGoals}>
                            <label>Recent Weigh-In (lbs.):</label>
                            <input 
                                name="weight"
                                type="number" 
                                placeholder={`Last weigh-in: ${currentUser.weight} lbs.`} 
                                value={newInfo.weight}
                                onChange={handleChange} 
                            />
                            <label>Modify Weight Goal:</label>
                            <select onChange={handleChange} name="goal" className = "goalsInput" placeholder ="Edit your nutrition goals">
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
                <div className = "pie-chart">
                    <h3>Macro Nutrient Breakdown</h3>
                    <ReactMinimalPieChart
                        animate
                        animationDuration={500}
                        animationEasing="ease-in-out"
                        cx={50}
                        cy={50}
                        data={[
                            {
                            color: '#f79d65',
                            title: 'Carbs',
                            value: carbs
                            },
                            {
                            color: '#f4845f',
                            title: 'Protein',
                            value: protein
                            },
                            {
                            color: '#f27059',
                            title: 'Fat',
                            value: fat
                            }
                        ]}
                        label={true}
                        labelStyle={{
                            fontSize: '8px',
                            fill: 'rgba(255, 255, 255, .9)'
                        }}
                        labelPosition={50}
                        lengthAngle={360}
                        lineWidth={100}
                        onClick={undefined}
                        onMouseOut={undefined}
                        onMouseOver={undefined}
                        paddingAngle={0}
                        radius={30}
                        ratio={1}
                        rounded={false}
                        startAngle={0}
                    />
                    <p>Protein: {protein}g Carbs: {carbs}g Fat: {fat}g</p>
                </div>
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
        calorieIntake: state.calorieIntake,
        protein: state.protein,
        carbs: state.carbs,
        fat: state.fat
    }
}

export default connect(mapStateToProps, {fetchProfile, editGoals})(Dashboard);
