import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

interface DonutProps {
  value: number;
  size: number;
};

const Donut: React.SFC<DonutProps> = ({
  value,
  size,
}) => {
  return (
    <CircularProgress
      size={`${size}%`}
      value={value}
      thickness={10}
      variant="static"
      color="primary"
    />
  );
};

export default Donut;
