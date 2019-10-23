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
    marginTop: 50,
    padding: 40,
    background: '#FEEED3',
    height: '100vh',
    paddingTop: '100px'
  },
  round: {
    margin: "10px auto",
    width: 200,
  }
}));

const Meals = ({ 
  calorieIntake, 
  fetchProfile,
  protein,
  carbs,
  fat 
  }) => {

  const classes = useStyles();
  const [mealAmount, setMealAmount] = useState(4)
  const [snackAmount, setSnackAmount] = useState(true)

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
                  onClick={() => {
                    setMealAmount(3)
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
                  onClick={() => {
                    setMealAmount(4)
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
                  onClick={() => {
                    setMealAmount(4)
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
                  <Typography variant="h4">Meal Breakdown</Typography>
                  <div className="macronutrients">
                    <div className='macro-div'><p>{Math.floor(protein / mealAmount)}g <br /> Protein</p></div>
                    <div className='macro-div'><p>{Math.floor(carbs / mealAmount)}g <br /> Carbs</p></div>
                    <div className='macro-div'><p>{Math.floor(fat / mealAmount)}g <br /> Fat</p></div>
                  </div>
                    <Typography variant="h3">{Math.round(calorieIntake / mealAmount)} calories per snack</Typography>
              </div>
              
              <div className='info-breakdown'>
                  <Typography variant="h4">{snackAmount ? 'Snack Breakdown' : 'No Snacks Today!'}</Typography>
                  <div className="macronutrients">
                    <div className='macro-div'><p>{!snackAmount ? 0 : Math.floor((protein / mealAmount) / 2)}g <br /> Protein</p></div>
                    <div className='macro-div'><p>{!snackAmount ? 0 : Math.floor((carbs / mealAmount) / 2)}g <br /> Carbs</p></div>
                    <div className='macro-div'><p>{!snackAmount ? 0 : Math.floor((fat / mealAmount) / 2)}g <br /> Fat</p></div>
                  </div>
                    <Typography variant="h3">{!snackAmount ? 0 : Math.floor(calorieIntake / 8)} calories per snack</Typography>
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