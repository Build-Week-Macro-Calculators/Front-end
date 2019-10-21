import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";
import SignUp from "./SignUp";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
  },
  paper: {
    padding: theme.spacing(),
    flex: "1 0 auto",
    height: "100vh",
    color: theme.palette.text.secondary
  }
}));
function Content(props) {
  const classes = useStyles();
  const { width } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid component={Hidden} only={["xl", "xs"]} item sm={4} md={6}>
          <Paper className={classes.paper}>
            <div className="fill-image"></div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
        <Paper className={classes.paper}>

          <SignUp />
          </Paper>

        </Grid>
      </Grid>
    </div>
  );
}
Content.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired
};
export default withWidth()(Content);
