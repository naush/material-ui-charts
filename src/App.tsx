import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import logo from './logo.svg';
import theme from './theme';

import {
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  '@keyframes app-logo-spin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
  app: {
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  logo: {
    height: '40vmin',
    pointerEvents: 'none',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    logo: {
      animation: '$app-logo-spin infinite 20s linear',
    },
  },
  link: {
    color: '#61dafb',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.app}>
        <header className={classes.header}>
          <img src={logo} className={classes.logo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className={classes.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
