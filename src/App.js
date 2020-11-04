import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import './App.css';
import { Header } from './Components/Header';
import { PlaceToVisit } from './Components/PlaceToVisit';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/Assets/Tokyo-Shibuya-Bg-Photo.jpg'})`,
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
      <PlaceToVisit />
    </div>
  );
}
