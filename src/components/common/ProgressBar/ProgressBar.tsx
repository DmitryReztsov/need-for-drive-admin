import React from 'react';
import {Box, LinearProgress, Typography} from '@mui/material';
import {progressBar, progressBarLine, progressBarText} from './ProgressBarStyle';

interface IProgressBar {
  percent: number,
}

function ProgressBar({percent}: IProgressBar) {
  return (
    <Box sx={progressBar}>
      <Box sx={progressBarText}>
        <Typography>
          Заполнено
        </Typography>
        <Typography>
          {percent}%
        </Typography>
      </Box>
      <LinearProgress variant={'determinate'} value={percent} sx={progressBarLine} />
    </Box>
  );
}

export default ProgressBar;
