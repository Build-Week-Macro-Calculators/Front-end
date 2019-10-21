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
import axios from "axios";
import {
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

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
  const [valuess, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });
  const handleChange = prop => event => {
    setValues({ ...valuess, [prop]: event.target.value });
  };

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
              label="Full Name"
              name="fullName"
              autoFocus
            />

            <Field
              component={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
            <Field
              component={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
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
                onChange={handleChange("weightRange")}
              >
                <MenuItem value="5'7">5'7</MenuItem>
                <MenuItem value="5'8">5'8</MenuItem>
                ))}
              </Field>
              <Field
                component={TextField}
                fullWidth
                select
                name="days"
                label="Number of days you Excercise"
                className={clsx(classes.margin, classes.textField)}
                value={values.weightRange}
                onChange={handleChange("weightRange")}
              >
                <MenuItem value="0">0 day</MenuItem>
                <MenuItem value="2">1-2 days</MenuItem>
                <MenuItem value="3">3-4 days</MenuItem>
                <MenuItem value="6">5-6 days</MenuItem>
                <MenuItem value="7">7 days</MenuItem>
                ))}
              </Field>
              <Field
                component={TextField}
                fullWidth
                select
                name="goal"
                label="Goal"
                className={clsx(classes.margin, classes.textField)}
                value={values.weightRange}
                onChange={handleChange("weightRange")}
              >
                <MenuItem value="20">Aggressive Weight Loss</MenuItem>
                <MenuItem value="15">Moderate Weight Loss</MenuItem>
                <MenuItem value="10">Deficit Weight Loss</MenuItem>
                <MenuItem value="0">Maintain Weight</MenuItem>
                <MenuItem value="10">Moderate Weight Gain</MenuItem>
                <MenuItem value="15">Aggressive Weight Gain</MenuItem>
                ))}
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
                  label="Birthday"
                  type="date"
                  name="dob"
                  fullWidth
                  defaultValue="2017-05-24"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <Field
                  component={TextField}
                  fullWidth
                  select
                  name="gender"
                  label="Gender"
                  placeholder="Male/Female"
                  className={clsx(classes.margin, classes.textField)}
                  value={values.weightRange}
                  onChange={handleChange("weightRange")}
                >
                  <MenuItem value="M">Male</MenuItem>
                  <MenuItem value="F">Female</MenuItem>
                  ))}
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
  mapPropsToValues({ fullName, email,days,goal,confirmPassword, password, weight, height, dob, gender }) {
    return {
      fullName: fullName || "",
      email: email || "",
      password: password || "",
      confirmPassword:confirmPassword||"",
      weight: weight || "",
      height: height || "",
      dob: dob || "",
      goal: goal || "",
      days: days || "",
      gender: gender || ""
    };
  },
  validationSchema: Yup.object().shape({
    fullName: Yup.string().required("You must put a Full Name"),
    email: Yup.string().required("Please enter Valid email address"),
    weight: Yup.string().required(),
    height: Yup.string().required(),
    days: Yup.string().required(),
    goal: Yup.string().required(),
    gender: Yup.string().required(),
    password: Yup.string().required('Password is required'),
    dob: Yup.string().required("Date of Birth is required"),
    confirmPassword: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')

  }),
  //You can use this to see the values
  handleSubmit(values) {
    axios
      // .post("https://reqres.in/api/users/", values)
      .post("https://buildweek-macrocalc.herokuapp.com/createnewuser", values)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err.res));
  }
})(SignUp);
console.log("This is the HOC", FormikSignUp);
export default FormikSignUp;
