import React from 'react';
import {ICar} from '../../../../../../../models/ICar';
import {Box} from '@mui/material';
import {carItem} from './CarItemStyle';

interface ICarProps {
  car: ICar,
}

function CarItem({car}: ICarProps) {
  const {
    id, priceMin, priceMax, name,
    number, categoryId: {name: categoryName},
    thumbnail: {path}, tank, colors,
  } = car;
  return (
    <Box sx={carItem} key={id}>
      {name}
    </Box>
  );
}

export default CarItem;
