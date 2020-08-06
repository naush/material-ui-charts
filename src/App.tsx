import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

import Bar from './charts/Bar';
import Donut from './charts/Donut';
import Pie from './charts/Pie';
import ScaledBar from './charts/ScaledBar';
import RadialBar from './charts/RadialBar';

import theme from './theme';
import clsx from 'clsx';

import {
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  app: {
    textAlign: 'center',
  },
  header: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  container: {
    width: '60%',
    margin: theme.spacing(4, 0),

    [theme.breakpoints.down('sm')]: {
      width: '80%',
      margin: theme.spacing(4, 0),
    },
  },
  title: {
    margin: theme.spacing(0, 0, 4),
  },
  examples: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bars: {
    flexDirection: 'column',
    minHeight: theme.spacing(32),
  },
}));

function App() {
  const classes = useStyles();
  const samples = [25, 50, 75, 100];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.app}>
        <header className={classes.header}>
          <Box
            display="flex"
            flexDirection="column"
            className={classes.container}
          >
            <Typography
              variant="h3"
              className={classes.title}
            >
              Donut
            </Typography>
            <Box
              className={classes.examples}
            >
              {
                samples.map((sample: number) => {
                  return (
                    <Donut
                      key={sample}
                      value={sample}
                      size={15}
                    />
                  )
                })
              }
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            className={classes.container}
          >
            <Typography
              variant="h3"
              className={classes.title}
            >
              Pie
            </Typography>
            <Box
              className={classes.examples}
            >
              {
                samples.map((sample: number) => {
                  return (
                    <Pie
                      key={sample}
                      value={sample}
                      size={15}
                    />
                  )
                })
              }
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            className={classes.container}
          >
            <Typography
              variant="h3"
              className={classes.title}
            >
              Bar
            </Typography>
            <Box
              className={clsx(classes.examples, classes.bars)}
            >
              {
                samples.map((sample: number) => <Bar key={sample} value={sample} />)
              }
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            className={classes.container}
          >
            <Typography
              variant="h3"
              className={classes.title}
            >
              Scaled Bar
            </Typography>
            <Box
              className={clsx(classes.examples, classes.bars)}
            >
              {
                samples.map((sample: number) => <ScaledBar key={sample} value={sample} />)
              }
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            className={classes.container}
          >
            <Typography
              variant="h3"
              className={classes.title}
            >
              Radial Bar
            </Typography>
            <Box
              className={clsx(classes.examples, classes.bars)}
            >
              <RadialBar
                values={samples}
              />
            </Box>
          </Box>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
