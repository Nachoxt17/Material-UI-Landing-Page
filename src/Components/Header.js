import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  logo: {
    color: '#fff',
    fontSize: '2rem',
  },
  textColor: {
    color: '#5AFF3D',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My<span className={classes.textColor}>Island.</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.logo} elevation={0} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse in={true}>
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br /> My<span className={classes.textColor}>Island.</span>
          </h1>
          <h1>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </h1>
        </div>
      </Collapse>
    </div>
  );
};
