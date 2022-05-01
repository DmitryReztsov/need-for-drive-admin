import React from 'react';
import {Box, LinearProgress, Typography} from '@mui/material';
import {progressBar, progressBarLine, progressBarText} from './ProgressBarStyle';

interface IProgressBar {
  entity: any,
}

function ProgressBar({entity}: IProgressBar) {
  function getPercent(): number {
    const numerator = Object.values(entity).filter((value: any) => {
      if (Array.isArray(value)) return value.length;
      return value;
    }).length;
    const denominator = Object.values(entity).length;
    return Math.round((numerator / denominator) * 100);
  }

  return (
    <Box sx={progressBar}>
      <Box sx={progressBarText}>
        <Typography>
          Заполнено
        </Typography>
        <Typography>
          {getPercent()}%
        </Typography>
      </Box>
      <LinearProgress variant={'determinate'} value={getPercent()} sx={progressBarLine} />
    </Box>
  );
}

export default ProgressBar;
