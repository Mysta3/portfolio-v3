import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../App.css';

const useStyles = makeStyles({

  card: {
    height: '18rem',
    boxShadow: '1px 5px 5px #000000',
    margin: '2% auto',
    maxWidth: '30rem'
  },
  cardActionArea: {
    height: '18rem'
  },
  aboutMe: {
    background: 'url(https://i.imgur.com/dmriUcN.jpg) no-repeat center',
    backgroundSize: '100vh',
    filter: 'grayscale(100%)'
  },
  projects: {
    background: 'url(https://i.imgur.com/bfZjwKJ.jpg) no-repeat center',
    backgroundSize: '100vh',
    filter: 'grayscale(100%)'
  },
  skills: {
    background: 'url(https://i.imgur.com/Sq10Ixx.jpg) no-repeat center',
    backgroundSize: '100vh',
    filter: 'grayscale(100%)'
  },
  contactMe: {
    background: 'url(https://i.imgur.com/dk7F9xv.jpg) no-repeat center',
    backgroundSize: '100vh',
    filter: 'grayscale(100%)'
  },
  h3: {
    textAlign: 'center',
    color: '#FFFF',
    fontWeight: 'bold',
    textShadow: '1px 1px 1px black'
  }
});

function Initial() {
  const classes = useStyles();
  return (
    <main>
      <div>
        <Card className={classes.card}>
          <Link to="/about">
            <CardActionArea
              className={`${classes.cardActionArea} ${classes.aboutMe}`}
            >
              <CardContent>
                <Typography
                  className={classes.h3}
                  gutterBottom
                  variant="h3"
                  component="h2"
                >
                  About Me
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </div>
      <div>
        <Card className={classes.card}>
          <Link to="/projects">
            <CardActionArea
              className={`${classes.cardActionArea} ${classes.projects}`}
            >
              <CardContent>
                <Typography
                  className={classes.h3}
                  gutterBottom
                  variant="h3"
                  component="h2"
                >
                  Projects
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </div>
      <div>
        <Card className={classes.card}>
          <Link to="/skills">
            <CardActionArea
              className={`${classes.cardActionArea} ${classes.skills}`}
            >
              <CardContent>
                <Typography
                  className={classes.h3}
                  gutterBottom
                  variant="h3"
                  component="h2"
                >
                  Skills
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </div>
      <div>
        <Card className={classes.card}>
          <Link to="/contact">
            <CardActionArea
              className={`${classes.cardActionArea} ${classes.contactMe}`}
            >
              <CardContent>
                <Typography
                  className={classes.h3}
                  gutterBottom
                  variant="h3"
                  component="h2"
                >
                  Contact Me
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </div>
    </main>
  );
}
export default Initial;
