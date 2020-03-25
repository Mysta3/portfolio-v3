import React from 'react';
import NavBar from './NavBar';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';
import { Icon } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    background: '#6295D9',
    padding: '2%',
    minHeight: '80vh'
  },
  paragraph: {
    fontSize: '22px',
    paddingLeft: '3%',
    paddingRight: '3%',
    textShadow: '1px 1px 1px #6295D9',
    color: 'black'
  },
  h1: {
    padding: '0',
    marginTop: 0
  },
  icon: {
    color: 'white',
    fontSize: '4vw'
  }
});

function Contact() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <div className={classes.container}>
        <h1 className={classes.h1}>Contact Me</h1>
        <p className={classes.paragraph}>I look forward to hearing from you!</p>
        <Icon>
          <a
            href="https://github.com/Mysta3"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon className={classes.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/myshawne-stallings/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedInIcon className={classes.icon} />
          </a>
        </Icon>
        <p>
          <a
            className={classes.paragraph}
            href="mailto:myshawnestallings.com?subject=Job%20Inquiry&body=Please include name, phone number, and job description"
          >
            Myshawnestallings@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
