import React from 'react';
import NavBar from './NavBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    background: '#6295D9',
    padding: '5vw',
    maxWidth: '100vw'
  },
  paragraph: {
    fontSize: '3vh',
    padding: '0 3vw',
    textShadow: '1px 1px 1px #6295D9',
    textAlign: 'center'
  },
  h1: {
    fontSize: '4vw',
    padding: '0',
    margin: 0
  },
  image: {
    borderRadius: '20%'
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
        <img
          className={classes.image}
          src="https://i.imgur.com/j8tPpiB.jpg"
          alt="profile"
        />

        <h2>
          <strong>Who Am I?</strong>
        </h2>
        <p className={classes.paragraph}>
          A Software Engineer who has worked on many projects both
          collaboratively and individually. My background was obtained with a
          combination of self-study and a Software Engineer Immersive Boot-camp
          with General Assembly where we worked with Html, CSS, & Javascript,
          learned popular front and back-end frameworks such as React & Django,
          as well as honed version control skills using Git workflows. With a
          background in Desktop Support, I was able to develop my communication
          skills which I further sharpened during my cohort by being able to
          effectively communicate found bugs in code, ideas when pair
          programming and distributing tasks as a Scrum master. Using my passion
          for problem-solving in combination with my thirst for learning I have
          been able to effectively tie in my transferable skills with my newer
          engineering skills.
        </p>

        <h2>
          <strong>What Am I Doing?</strong>
        </h2>
        <p className={classes.paragraph}>
          I am currently working on polishing my frontend & backend skills by
          continuously building new projects and taking on new challenges. I am
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
