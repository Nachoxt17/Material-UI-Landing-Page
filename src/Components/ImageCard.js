import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { CardContent, CardMedia, Typography, Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.45)',
    margin: '20px',
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    color: '#B8B8B8',
    fontSize: '2rem',
  },
  description: {
    fontFamily: 'Nunito',
    color: '#B8B8B8',
    fontSize: '1.1rem',
  },
});

export default function ImageCard({ city, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={city.imageUrl} />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h1" className={classes.title}>
            {city.title}
          </Typography>
          <Typography variant="body2" component="p" className={classes.description}>
            {city.description}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}
