import React from "react";
import "./Meals.css"


const Meals = () => {

  return (
      <div className = "containerDashboard">
        <div className="headerDashboard">
            <h1>Meals and Snacks</h1>
        </div>
        <div className = "meals">
            <h2 className = "mealsH2">Macronutrient Breakdown</h2>
            <div className = "secondBox">
                <h2 className = "h2one">Today I am eating:</h2>
                <div className = "inputs">
                    <button className="mealsInput">3 Meals</button>
                    <button className="mealsInput">4 Meals</button>
                    <button className="mealsInput">3 Meals and 2 Snacks</button>
                </div>
            </div>
        </div>
        <div className = "mainBox">
            <div className ="box">
                <h1>Per Meal:</h1>
                <div className = "macroBoxesContainer">
                    <div className = "macroBoxes">
                        <h2>40g</h2>
                        <h4>Protein</h4>
                    </div>
                    <div className = "macroBoxes">
                        <h2>15g</h2>
                        <h4>Fat</h4>
                    </div>
                    <div className = "macroBoxes">
                        <h2>85g</h2>
                        <h4>Carbs</h4>
                    </div>
                </div>
                <h1>or</h1>
                <h2>675 Calories</h2>
            </div>
            <div className = "box">
            <h1>Per Snack:</h1>
                <div className = "macroBoxesContainer">
                    <div className = "macroBoxes">
                        <h2>5g</h2>
                        <h4>Protein</h4>
                    </div>
                    <div className = "macroBoxes">
                        <h2>2g</h2>
                        <h4>Fat</h4>
                    </div>
                    <div className = "macroBoxes">
                        <h2>30g</h2>
                        <h4>Carbs</h4>
                    </div>
                </div>
                <h1>or</h1>
                <h2>125 Calories</h2>
            </div>
        </div>
        <div className ="bottomDashboard">
        </div>
        <div className="bottom">
        </div>
      </div>

  );
};

export default Meals;
