import React from 'react';
import NavBar from './NavBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    color: 'white',
    background: 'black',
    padding: '2%'
  },
  paragraph: {
    fontSize: '25px',
    paddingLeft: '3%',
    paddingRight: '3%',
    textShadow: '1px 1px 5px white'
  },
  h1: {
    padding: '0',
    marginTop: 0
  }
});

function About() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <div className={classes.container}>
        <h1 className={classes.h1}>Myshawne Stallings</h1>
        <h3>
          <em>Full-Stack Software Engineer</em>
        </h3>
        <img src="https://i.imgur.com/j8tPpiB.jpg" alt="profile picture" />

        <h2>Who Am I?</h2>
        <p className={classes.paragraph}>
          Originally from Baltimore, MD after I obtained my B.S in Informaiton
          Systems & Sciences, I decided to make a new change to my life by
          moving to California.{' '}
        </p>

        <h2>What Am I Doing?</h2>
        <p className={classes.paragraph}>
          I am currently a Full-Time Software Engineer learning Front- and
          Back-end technologies. My graduation date is March 13th, 2020. I am
          open to new opportunities where growth, diversity, and a high work
          ethic is valued. Currently looking for a company with a diverse and
          inviting culture, upward mobility, and who believes in work/life
          balance.
        </p>
      </div>
    </div>
  );
}

export default About;
