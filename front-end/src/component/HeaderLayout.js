import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { pink } from '@material-ui/core/colors';
import { connect } from "react-redux"
import { datePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const HeaderLayout = props => {
  const classes = useStyles();

  const logout = () => {
    localStorage.removeItem('token');
    props.history.push("/")
  }

    return(
      <div className="header">
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Macro Calculator
            </Typography>
            <Button color="inherit">Dashboard</Button>
            <Button color="inherit">Meals</Button>
            <Button onClick={logout} color="inherit">Log Out</Button>
          </Toolbar>
        </AppBar>
      </div>
      </div>
    );    
}

export default connect(null, {})(HeaderLayout) 