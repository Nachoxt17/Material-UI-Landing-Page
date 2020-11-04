import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import ImageCard from './ImageCard';
import Cities from '../Static/Cities';
import useWindowPosition from '../Hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
  rootB: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));

export const PlaceToVisit = () => {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.rootB} id="place-to-visit">
      <ImageCard city={Cities[0]} checked={checked} />
      <ImageCard city={Cities[1]} checked={checked} />
    </div>
  );
};
