import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

interface PieProps {
  value: number;
  size: number,
};

const Pie: React.SFC<PieProps> = ({
  value,
  size,
}) => {
  return (
    <CircularProgress
      size={`${size}%`}
      value={value}
      thickness={22}
      variant="static"
      color="primary"
    />
  );
};

export default Pie;
