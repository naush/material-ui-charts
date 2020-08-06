import React from 'react';
import Slider from '@material-ui/core/Slider';

import { makeStyles, } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: theme.spacing(4),
  },
  rail: {
    height: theme.spacing(4),
  },
  track: {
    height: theme.spacing(4),
  },
  mark: {
    height: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  thumb: {
    display: 'none',
  },
}));

interface ScaledBarProps {
  value: number;
};

const ScaledBar: React.SFC<ScaledBarProps> = ({
  value,
}) => {
  const classes = useStyles();

  return (
    <Slider
      value={value}
      step={10}
      min={0}
      max={100}
      marks
      valueLabelDisplay="off"
      classes={{
        root: classes.root,
        rail: classes.rail,
        track: classes.track,
        thumb: classes.thumb,
        mark: classes.mark,
      }}
    />

  );
};

export default ScaledBar;
