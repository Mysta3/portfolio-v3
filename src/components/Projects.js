import React from 'react';
import NavBar from './NavBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    color: 'white',
    background: '#212121',
    padding: '2%',
    minHeight: '100vh',
    minWidth: '100vw',
    wordWrap: 'break-word'
  },
  paragraph: {
    fontSize: '25px',
    paddingLeft: '3%',
    paddingRight: '3%',
    textShadow: '1px 1px 1px white'
  },
  title: {
    textAlign: 'center',
    padding: '0',
    fontSize: '5rem',
    textDecoration: 'underline',
    marginTop: 0
  },
  projectBoard: {
    minWidth: '40vw',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  projectCard: {
    margin: '3vh',
    maxWidth: '35vw',
    fontSize: '1rem',
    lineHeight: '5vh'
  },
  span: {
    fontSize: '5vh',
    color: 'white',
    fontWeight: '800'
  }
});

function Projects() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <div className={classes.container}>
        <span className={classes.title}>Projects</span>
        <div className={classes.projectBoard}>
          <div className={classes.projectCard}>
            <a href="https://mysta3.github.io/simon_app/">
              <span className={classes.span}>SIMON SAYS - POKÉ STYLE</span>
            </a>
            <p>
              Created using HTML, CSS with NES.css framework, and Vanilla
              JavaScript with HOWLjs. Enjoy the original game of Simon Says with
              a nostalgic Pokemon theme!{' '}
              <strong>WARNING: SOUND EFFECTS ARE USED</strong>
            </p>
          </div>
          <div className={classes.projectCard}>
            <a href="https://advice-assistant-app.herokuapp.com/">
              <span className={classes.span}>AD-VICE ASSISTANT APP</span>
            </a>
            <p>
              Created using React.js + Hooks, Material-UI and a 3rd party API.
              Whether you are looking for guidance, a lover of quotes, or even
              just searching for your next Instagram caption. You can rest
              assure you will find one here!
            </p>
          </div>

          <div className={classes.projectCard}>
            <a href="https://grab-a-joke.herokuapp.com/">
              <span className={classes.span}>GRAB A JOKE APP</span>
            </a>
            <p>
              Created using React.js + Hooks, CSS and a 3rd party RESTful API.
            </p>
          </div>
          <div className={classes.projectCard}>
            <a href="https://gatherupapp.herokuapp.com/">
              <span className={classes.span}>GATHERUP APP</span>
            </a>
            <p>
              Full Stack Application utilizing the MERN stack with full CRUD
              capabilities. Created with a team of 4 developers utilizing AGILE
              best practices where I operated as Scrum master/Software Developer
              as well as using a Github Feature Branch workflow.
            </p>
          </div>

          <div className={classes.projectCard}>
            <a href="https://squadup-app.herokuapp.com/squadup">
              <span className={classes.span}>SQUADUP APP</span>
            </a>
            <p>
              Full Stack App utilizing a React frontend and a Python/Django
              backend. Space and place for gamers to find a squad that shares
              the same gaming schedule!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
