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
      {`от ${priceMin.toLocaleString()} ₽`}
      <br/>
      {`до ${priceMax.toLocaleString()} ₽`}
    </Box>
  );
}

export default CarItemPrice;
