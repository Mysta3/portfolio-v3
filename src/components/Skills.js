import React from 'react';
import NavBar from './NavBar';
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
          <i className="devicon-html5-plain-wordmark colored"></i>
          <i class="devicon-css3-plain-wordmark"></i>
          <i className="devicon-sass-original colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-git-plain-wordmark colored"></i>
          <i className="devicon-github-plain-wordmark"></i>
          <i class="devicon-react-original-wordmark"></i>
          <i class="devicon-nodejs-plain-wordmark"></i>
          <i className="devicon-express-original-wordmark"></i>
          <i class="devicon-postgresql-plain-wordmark"></i>
          <i class="devicon-mongodb-plain-wordmark"></i>
          <i className="devicon-python-plain-wordmark colored"></i>
          <i className="devicon-django-line-wordmark"></i>
        </div>
      </div>
    </div>
  );
}

export default Skills;
