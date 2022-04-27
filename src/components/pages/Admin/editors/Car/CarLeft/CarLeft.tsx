import React from 'react';
import {Box, Typography} from '@mui/material';
import {carLeft, carLeftBar, carLeftDesc, carLeftInfo} from './CarLeftStyle';
import {ICar} from '../../../../../../models/ICar';
import CarLeftInfo from './CarLeftInfo/CarLeftInfo';
import ProgressBar from '../../../../../common/ProgressBar/ProgressBar';

interface ICarLeft {
  car: ICar,
}

function CarLeft({car}: ICarLeft) {
  return (
    <Box sx={carLeft}>
      <Box sx={carLeftInfo}>
        <CarLeftInfo car={car} />
      </Box>
      <Box sx={carLeftBar}>
        <ProgressBar percent={74} />
      </Box>
      <Box sx={carLeftDesc}>
        <Typography>
          Описание
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Odio eaque, quidem, commodi soluta qui quae quod dolorum sint alias,
          possimus illum assumenda eligendi cumque?
        </Typography>
      </Box>
    </Box>
  );
}

export default CarLeft;
