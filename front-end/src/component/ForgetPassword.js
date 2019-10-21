import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import axios from "axios";
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
    backgroundImage: 'url(https://images.unsplash.com/photo-1559822933-b5972869b84d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=gesina-kunkel-04fUAPKw37Y-unsplash.jpg)',
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

const ForgetPassword=({values}) =>{
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Password Reset
          </Typography>
          <Form className={classes.form} noValidate>
            <Field component={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Reset PassWord{" "}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2">
                  Sign In
                </Link>
              </Grid>
              <Grid item>
                <Link to="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
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
const FormikForgetPassword = withFormik({
  mapPropsToValues({  email}) {
    return {
     
      email: email || "",
  
    };
  },
  // validationSchema: Yup.object().shape({
  //   fullName: Yup.string().required("You must put a Full Name"),
  //   email: Yup.string().required("Please enter Valid email address")
  // }),
  //You can use this to see the values
  handleSubmit(values) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err.res));
  }
})(ForgetPassword);
console.log("This is the HOC", FormikForgetPassword);
export default FormikForgetPassword;

