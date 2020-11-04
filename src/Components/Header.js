import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  rootA: {
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
    color: '#fff',
    alignItems: 'left',
    textAlign: 'center',
  },
  logo: {
    color: '#2ec1ac',
    fontSize: '2rem',
  },
  textColor: {
    color: '#05dfd7',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#B8B8B8',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#05dfd7',
    fontSize: '4rem',
  },
}));

export const Header = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.rootA} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My<span className={classes.textColor}>City.</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.logo} elevation={0} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br /> My<span className={classes.textColor}>City.</span>
          </h1>
          <h1>
            <Scroll to="place-to-visit" smooth={true}>
              <IconButton>
                <ExpandMoreIcon className={classes.goDown} />
              </IconButton>
            </Scroll>
          </h1>
        </div>
      </Collapse>
    </div>
  );
};
