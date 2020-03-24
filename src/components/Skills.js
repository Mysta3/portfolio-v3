import React from 'react';
import NavBar from './NavBar';
import Grow from '@material-ui/core/Grow';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    color: 'black',
    background: '#6295D9',
    padding: '2%',
    minHeight: '100vh'
  },
  paragraph: {
    fontSize: '25px',
    paddingLeft: '3%',
    paddingRight: '3%',
    textShadow: '1px 1px 1px white'
  },
  title: {
    padding: '0',
    fontSize: '6rem',
    marginTop: 0
  },
  skillset: {
    minWidth: '40vw',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
});

function Skills() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <div className={classes.container}>
        <span className={classes.title}>Skill-Set</span>
        <div className={classes.skillset}>
          <Grow in={true} timeout={2000}>
            <i className="devicon-html5-plain-wordmark colored"></i>
          </Grow>
          <Grow in={true} timeout={2000}>
            <i className="devicon-css3-plain-wordmark"></i>
          </Grow>
          <Grow in={true} timeout={2000}>
            <i className="devicon-sass-original colored"></i>
          </Grow>
          <Grow in={true} timeout={2000}>
            <i className="devicon-javascript-plain colored"></i>
          </Grow>
          <Grow in={true} timeout={2000}>
            <i className="devicon-git-plain-wordmark colored"></i>
          </Grow>
          <Grow in={true} timeout={2000}>
            <i className="devicon-github-plain-wordmark"></i>
          </Grow>
          <Grow in={true} timeout={2000}>
            <i className="devicon-react-original-wordmark"></i>
          </Grow>
          <Grow in={true} timeout={2000}>
            <i className="devicon-nodejs-plain-wordmark"></i>
          </Grow>
          <Grow in={true} timeout={2000}>
            <i className="devicon-express-original-wordmark"></i>
          </Grow>
          <Grow in={true} timeout={2000}>
            <i className="devicon-postgresql-plain-wordmark"></i>
          </Grow>
          <Grow in={true} timeout={2000}>
            <i className="devicon-mongodb-plain-wordmark"></i>
          </Grow>
          <Grow in={true} timeout={2000}>
            <i className="devicon-python-plain-wordmark colored"></i>
          </Grow>
          <Grow in={true} timeout={2000}>
            <i className="devicon-django-line-wordmark"></i>
          </Grow>
        </div>
      </div>
    </div>
  );
}

export default Skills;
