import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";
import { connect } from "react-redux"

import './Meal.scss'
import HeaderLayout from "../HeaderLayout/HeaderLayout"
import { fetchProfile } from "../../store/actions"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: '#FEEED3',
    height: '100vh',
  },
}));

const Meals = ({ 
  calorieIntake, 
  fetchProfile,
  protein,
  carbs,
  fat 
  }) => {

  const classes = useStyles();
  const [mealAmount, setMealAmount] = useState({
    meals: 3,
    threeMeals: true,
    fourMeals: false,
    snackAndMeals: false
  })
  const [snackAmount, setSnackAmount] = useState(false)

  useEffect(() => {
    fetchProfile();
  }, [])

  return (
    <div className={classes.root}>
      <HeaderLayout />
        <div className="macroDiv">
            <h2>Daily Nutrition Breakdown</h2>
            <Grid item xs>
              <h3>Today I am eating...</h3>
            </Grid>
            <div className='button-container'>
              <Grid>
                <Button
                  variant="outlined"
                  color="inherit"
                  className={classes.button}
                  style={mealAmount.threeMeals ? {boxShadow: '0px 0px 15px #FEE8BD'} : {}}
                  onClick={() => {
                    setMealAmount({
                      ...mealAmount,
                      meals: 3,
                      threeMeals: true,
                      fourMeals: false,
                      snackAndMeals: false
                    })
                    setSnackAmount(false)
                  }}
                >
                  3 MEALS
                </Button>
              </Grid>
              <Grid>
                <Button
                  variant="outlined"
                  color="inherit"
                  className={classes.button}
                  style={mealAmount.fourMeals ? {boxShadow: '0px 0px 15px #FEE8BD'} : {}}
                  onClick={() => {
                    setMealAmount({
                      ...mealAmount,
                      meals: 4,
                      threeMeals: false,
                      fourMeals: true,
                      snackAndMeals: false
                    })
                    setSnackAmount(false)
                  }}
                >
                  4 MEALS
                </Button>
              </Grid>
              <Grid>
                <Button
                  variant="outlined"
                  color="inherit"
                  className={classes.button}
                  style={mealAmount.snackAndMeals ? {boxShadow: '0px 0px 15px #FEE8BD'} : {}}
                  onClick={() => {
                    setMealAmount({
                      ...mealAmount,
                      meals: 4,
                      threeMeals: false,
                      fourMeals: false,
                      snackAndMeals: true
                    })
                    setSnackAmount(true)
                  }}
                >
                  3 MEALS & 2 SNACKS
                </Button>
              </Grid>
            </div>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
              spacing={2}
              className='info-container'
            >
              <div className='info-breakdown'>
                  <h4>Meal Breakdown</h4>
                  <div className="macronutrients">
                    <div className='macro-div protein-bubble'><p>{Math.floor(protein / mealAmount.meals)}g <br /> Protein</p></div>
                    <div className='macro-div carb-bubble'><p>{Math.floor(carbs / mealAmount.meals)}g <br /> Carbs</p></div>
                    <div className='macro-div fat-bubble'><p>{Math.floor(fat / mealAmount.meals)}g <br /> Fat</p></div>
                  </div>
                    <h3>{Math.round(calorieIntake / mealAmount.meals)} calories per meal</h3>
              </div>
              
              <div className='info-breakdown'>
                  <h4>{snackAmount ? 'Snack Breakdown' : 'No Snacks Today!'}</h4>
                  <div className="macronutrients">
                    <div className='macro-div protein-bubble'><p>{!snackAmount ? 0 : Math.floor((protein / mealAmount.meals) / 2)}g <br /> Protein</p></div>
                    <div className='macro-div carb-bubble'><p>{!snackAmount ? 0 : Math.floor((carbs / mealAmount.meals) / 2)}g <br /> Carbs</p></div>
                    <div className='macro-div fat-bubble'><p>{!snackAmount ? 0 : Math.floor((fat / mealAmount.meals) / 2)}g <br /> Fat</p></div>
                  </div>
                    <h3>{!snackAmount ? 0 : Math.floor(calorieIntake / 8)} calories per snack</h3>
              </div>
            </Grid>
        </div>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state)
  return {
    currentUser: state.currentUser,
    calorieIntake: state.calorieIntake,
    protein: state.protein,
    carbs: state.carbs,
    fat: state.fat
  }
}

export default connect(mapStateToProps, {fetchProfile})(Meals)