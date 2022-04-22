import React from 'react';
import {Box} from '@mui/material';
import {carData} from './CarDataStyle';
import {ICar} from '../../../../../../models/ICar';
import CarItem from './CarItem/CarItem';

interface IOrderDataProps {
  cars: ICar[],
}

function CarData({cars}: IOrderDataProps) {
  return (
    <Box sx={carData}>
      {cars.map((car) => <CarItem car={car} />)}
    </Box>
  );
}

export default CarData;
