import "date-fns";
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import MenuItem from "@material-ui/core/MenuItem";
import clsx from "clsx";
import { Link } from "react-router-dom";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import {
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { connect } from "react-redux"

import { register } from "../store/actions"


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Macros Calculator
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: 'url(https://images.pexels.com/photos/1268478/pexels-photo-1268478.jpeg?cs=srgb&dl=antioxidant-berries-beverage-1268478.jpg&fm=jpg)',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SignUp = ({ values }) => {
  const classes = useStyles();
  // const [valuess, setValues] = React.useState({
  //   amount: "",
  //   password: "",
  //   weight: "",
  //   weightRange: "",
  //   showPassword: false
  // });
  // const handleChange = prop => event => {
  //   setValues({ ...valuess, [prop]: event.target.value });
  // };

  // const handleClickShowPassword = () => {
  //   setValues({ ...values, showPassword: !values.showPassword });
  // };

  // const handleMouseDownPassword = event => {
  //   event.preventDefault();
  // };
  // const [selectedDate, setSelectedDate] = React.useState(new Date());

  // const handleDateChange = date => {
  //   setSelectedDate(date);
  // };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AssignmentIndIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            On Boarding
          </Typography>
          <Form className={classes.form} noValidate>
            <Field
              component={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              id="name"
              label="Username"
              name="username"
              autoFocus
            />
            <Field
              component={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Grid container justify={"space-between"}>
              <Field
                component={TextField}
                margin="normal"
                fullWidth
                name="weight"
                label="Weight (lbs)"
                type="number"
              />
              <Field
                component={TextField}
                fullWidth
                select
                name="height"
                label="Height"
                className={clsx(classes.margin, classes.textField)}
                value={values.weightRange}
                // onChange={handleChange("weightRange")}
              >
                <MenuItem value={48}>4'0"</MenuItem>
                <MenuItem value={49}>4'1"</MenuItem>
              </Field>
              <Field
                component={TextField}
                fullWidth
                select
                name="exerciseFrequency"
                label="Number of days you Excercise"
                className={clsx(classes.margin, classes.textField)}
                value={values.weightRange}
                // onChange={handleChange("weightRange")}
              >
                <MenuItem value={0}>0 days</MenuItem>
                <MenuItem value={1.5}>1-2 days</MenuItem>
                <MenuItem value={3.5}>3-4 days</MenuItem>
                <MenuItem value={5.5}>5-6 days</MenuItem>
                <MenuItem value={7}>7 days</MenuItem>
              </Field>
              <Field
                component={TextField}
                fullWidth
                select
                name="goal"
                label="Goal"
                className={clsx(classes.margin, classes.textField)}
                value={values.weightRange}
                // onChange={handleChange("weightRange")}
              >
                <MenuItem value={-.20}>Aggressive Weight Loss</MenuItem>
                <MenuItem value={-.15}>Moderate Weight Loss</MenuItem>
                <MenuItem value={-.10}>Deficit Weight Loss</MenuItem>
                <MenuItem value={0}>Maintain Weight</MenuItem>
                <MenuItem value={.10}>Moderate Weight Gain</MenuItem>
                <MenuItem value={.15}>Aggressive Weight Gain</MenuItem>
              </Field>
              {/* nd their goal (drop down list: aggressive weight loss (20% deficit), moderate weight loss (15% deficit), weight loss (10% deficit), maintain weight, moderate weight gain (10% surplus), aggressive weight gain (15% deficit). */}
            </Grid>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify={"space-between"}>
                {/* <KeyboardDatePicker
                  margin="normal"
                  fullWidth
                  name="dob"
                  id="date-picker-dialog"
                  label="Date of Birth"
                  format="dd/MM/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                /> */}
                <Field component={ TextField}
                  id="date"
                  label="Age"
                  type="number"
                  name="age"
                  fullWidth
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <Field
                  component={TextField}
                  fullWidth
                  select
                  name="male"
                  label="Gender"
                  placeholder="Male/Female"
                  className={clsx(classes.margin, classes.textField)}
                  value={values.weightRange}
                  // onChange={handleChange("weightRange")}
                >
                  <MenuItem value={true}>Male</MenuItem>
                  <MenuItem value={false}>Female</MenuItem>
                </Field>
              </Grid>
            </MuiPickersUtilsProvider>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </Form>
        </div>
      </Grid>
    </Grid>
  );
};
const FormikSignUp = withFormik({
  mapPropsToValues({ username, exerciseFrequency, goal, password, weight, height, age, male }) {
    return {
      username: username || "",
      password: password || "",
      weight: weight || "",
      height: height || "",
      age: age || "",
      goal: goal || "",
      exerciseFrequency: exerciseFrequency || "",
      male: male || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("You must put a username"),
    weight: Yup.string().required(),
    height: Yup.string().required(),
    exerciseFrequency: Yup.string().required(),
    goal: Yup.string().required(),
    male: Yup.string().required(),
    password: Yup.string().required('Password is required'),
    age: Yup.string().required("Date of Birth is required"),
  }),

  //You can use this to see the values
  handleSubmit(values, {resetForm, ...rest}) {
    rest.props.register(values);
    rest.props.history.push("/dashboard")
  }
})(SignUp);
console.log("This is the HOC", FormikSignUp);

const mapStateToProps = state => {
  console.log(state)
  return {
    state: state
  }
}

export default connect(mapStateToProps, {register})(FormikSignUp);
