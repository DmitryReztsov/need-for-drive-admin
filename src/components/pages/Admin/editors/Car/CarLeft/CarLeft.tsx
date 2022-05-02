import React from 'react';
import {Box, Typography} from '@mui/material';
import {carLeft, carLeftBar, carLeftDesc, carLeftInfo} from './CarLeftStyle';
import {ICar} from '../../../../../../models/ICar';
import CarLeftInfo from './CarLeftInfo/CarLeftInfo';
import ProgressBar from '../../../../../common/ProgressBar/ProgressBar';
import {getPercent} from '../../../../../../utils/getPercent';

interface ICarLeft {
  car: ICar,
}

function CarLeft({car}: ICarLeft) {
  const {description} = car;
  return (
    <Box sx={carLeft}>
      <Box sx={carLeftInfo}>
        <CarLeftInfo car={car} />
      </Box>
      <Box sx={carLeftBar}>
        <ProgressBar percent={getPercent(car)} />
      </Box>
      <Box sx={carLeftDesc}>
        <Typography>
          Описание
        </Typography>
        <Typography>
          {description || ''}
        </Typography>
      </Box>
    </Box>
  );
}

export default CarLeft;
