import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";
import ReactMinimalPieChart from "react-minimal-pie-chart";
import images from "../images/Mac.jpg";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 50,
    padding: 40
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary
  },
  round: {
    margin: "10px auto",
    width: 200,
    height: 200,
    padding: 10,
    borderRadius: 110,
    border: "2px solid black"
  }
}));

export default function MealAndSnack() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3">Macronutrient Breakdown</Typography>
            <Grid item xs>
              <Typography variant="h6">Today I am Eating</Typography>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs>
                <Button
                  variant="outlined"
                  color="inherit"
                  className={classes.button}
                >
                  3 MEALS
                </Button>
              </Grid>

              <Grid item xs>
                <Button
                  variant="outlined"
                  color="inherit"
                  className={classes.button}
                >
                  4 MEALS
                </Button>
              </Grid>
              <Grid item xs>
                <Button
                  variant="outlined"
                  color="inherit"
                  className={classes.button}
                >
                  2 MEALS & 2 SNACKS
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
              spacing={2}
            >
              <Grid item sm={5}>
                <Paper className={classes.paper}>
                  <Typography variant="h4">Per Meal:</Typography>
                  <ReactMinimalPieChart
                    animate
                    animationDuration={500}
                    animationEasing="ease-out"
                    cx={50}
                    cy={50}
                    data={[
                      {
                        color: "#E38627",
                        title: "One",
                        value: 150
                      },
                      {
                        color: "#C13C37",
                        title: "Two",
                        value: 120
                      },
                      {
                        color: "#6A2135",
                        title: "Three",
                        value: 20
                      }
                    ]}
                    label
                    labelPosition={60}
                    labelStyle={{
                      fontFamily: "sans-serif",
                      fontSize: "5px"
                    }}
                    lengthAngle={360}
                    lineWidth={20}
                    onClick={undefined}
                    onMouseOut={undefined}
                    onMouseOver={undefined}
                    paddingAngle={18}
                    radius={50}
                    ratio={1}
                    rounded
                    startAngle={0}
                  />
                   <div className={classes.round}>
                    <img src={images} alt="Logo" />
                    <Typography variant="h3">240 KCAL</Typography>
                  </div>
                </Paper>
               
              </Grid>
              
              <Grid item sm={5}>
                <Paper className={classes.paper}>
                  <Typography variant="h4">Per Snack:</Typography>
                  <ReactMinimalPieChart
                    animate
                    animationDuration={500}
                    animationEasing="ease-out"
                    cx={50}
                    cy={50}
                    data={[
                      {
                        color: "#E38627",
                        title: "One",
                        value: 100
                      },
                      {
                        color: "#C13C37",
                        title: "Two",
                        value: 180
                      },
                      {
                        color: "#6A2135",
                        title: "Three",
                        value: 20
                      }
                    ]}
                    label
                    labelPosition={60}
                    labelStyle={{
                      fontFamily: "sans-serif",
                      fontSize: "5px"
                    }}
                    lengthAngle={360}
                    lineWidth={20}
                    onClick={undefined}
                    onMouseOut={undefined}
                    onMouseOver={undefined}
                    paddingAngle={18}
                    radius={50}
                    ratio={1}
                    rounded
                    startAngle={0}
                  />
                  <div className={classes.round}>
                    <img src={images} alt="Logo" />
                    <Typography variant="h3">390 KCAL</Typography>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
