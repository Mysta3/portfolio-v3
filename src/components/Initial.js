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
    height: '15rem',
    border: '2px solid black',
    // padding: '1rem',
    margin: '4% auto'
  },
  cardActionArea: {
    height: '15rem'
  },
  h3: {
    textAlign: `center`
  }
});

function Initial() {
  const classes = useStyles();
  return (
    <main>
      <div className="aboutMe cardDiv">
        <Card className={classes.card}>
          <Link to="/about">
            <CardActionArea className={classes.cardActionArea}>
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
      <div className="projects">
        <Card className={classes.card}>
          <Link to="/projects">
            <CardActionArea className={classes.cardActionArea}>
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
      <div className="skills">
        <Card className={classes.card}>
          <Link to="/skills">
            <CardActionArea className={classes.cardActionArea}>
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
      <div className="contact">
        <Card className={classes.card}>
          <Link to="/contact">
            <CardActionArea className={classes.cardActionArea}>
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
