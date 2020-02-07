import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../MSLogo2.svg';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import '../index.css';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: 1,
    background: 'white',
    marginTop: '0',
    textAlign: 'center'
  },
  navBar: {
    marginTop: '2.5%',
    marginRight: '2%'
  },
  brandImg: {
    maxHeight: '100px',
    marginTop: '0',
    padding: '5px'
  }
});

function NavBar() {
  const classes = useStyles();
  return (
    <div>
      <header className={classes.root}>
        <Link to="/">
          <img className={classes.brandImg} src={logo} alt="MS logo" />
        </Link>
        <nav className={classes.navBar}>
          <Link to="/about">
            <Button>About Me</Button>
          </Link>
          <Link to="/projects">
            <Button>Projects</Button>
          </Link>

          <Link to="/skills">
            <Button>Skills</Button>
          </Link>

          <Link to="/contact">
            <Button>Contact Me</Button>
          </Link>
        </nav>
      </header>
    </div>
  );
}


export default NavBar;
