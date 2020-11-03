import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import './App.css';
import { Header } from './Components/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + 'Assets/Bg-Island-Photo.jpg'})`,
    backgroundRepeat: 'no-repeat',
    background: 'cover',
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
    </div>
  );
}
