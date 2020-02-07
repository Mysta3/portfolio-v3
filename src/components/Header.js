import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Initial from './Initial'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    background: '#212121',
    marginTop: '0',
    padding: '2%',
    textAlign: 'center',
    color: 'white',
    boxShadow: '0px 6px 5px grey'
  },
  title: {
    flexGrow: 1,
    marginTop: '0',
    marginBottom: '0'
  },
  subTitle: {
    marginTop: '0'
  }
});

function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <header className={classes.root}>
        <Link>
          <h1 className={classes.title}>Myshawne Stallings</h1>
          <h2 className={classes.subTitle}>
            <em>Software Engineer</em>
          </h2>
        </Link>
      </header>
      <Initial />
    </div>
  );
}

export default ButtonAppBar;
