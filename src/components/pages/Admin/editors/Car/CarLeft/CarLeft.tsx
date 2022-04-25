import React from 'react';
import {Box} from '@mui/material';
import {carLeft} from './CarLeftStyle';
import {ICar} from '../../../../../../models/ICar';
import CarLeftInfo from './CarLeftInfo/CarLeftInfo';

interface ICarLeft {
  car: ICar,
}

function CarLeft({car}: ICarLeft) {
  return (
    <Box sx={carLeft}>
      <Box>
        <CarLeftInfo car={car} />
      </Box>
    </Box>
  );
}

export default CarLeft;
