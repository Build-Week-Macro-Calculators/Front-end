import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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


export default function HeaderLayout (){
  const classes = useStyles();
    return(
<div className="header">
<div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
        
          <Typography variant="h6" className={classes.title}>
            Macro Nuitrent Calculator
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">FAQ</Button>
        </Toolbar>
      </AppBar>
    </div>
      </div>
    );
    
}