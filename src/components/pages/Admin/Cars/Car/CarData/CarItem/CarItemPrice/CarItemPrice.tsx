import React from 'react';
import {Box} from '@mui/material';
import {carItemPrice} from './CarItemPriceStyle';

interface ICarItemPrice {
  priceMin: number,
  priceMax: number,
}

function CarItemPrice({priceMin, priceMax}: ICarItemPrice) {
  return (
    <Box sx={carItemPrice}>
      {`${priceMin.toLocaleString()} ₽ - ${priceMax.toLocaleString()} ₽`}
    </Box>
  );
}

export default CarItemPrice;
