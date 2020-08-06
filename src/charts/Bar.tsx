import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

import { makeStyles, } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
}));

interface BarProps {
  value: number;
};

const Bar: React.SFC<BarProps> = ({
  value,
}) => {
  const classes = useStyles();

  return (
    <LinearProgress
      variant="determinate"
      value={value}
      classes={{
        root: classes.root,
      }}
    />
  );
};

export default Bar;
