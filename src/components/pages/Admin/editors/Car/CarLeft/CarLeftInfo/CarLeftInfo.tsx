import React from 'react';
import {Box, Typography} from '@mui/material';
import {
  carLeftInfo, carLeftInfoCategory, carLeftInfoImage, carLeftInfoName,
} from './CarLeftInfoStyle';
import noImage from '../../../../../../../content/png/no_image_available.png';
import {ICar} from '../../../../../../../models/ICar';

interface ICarLeftInfo {
  car: ICar,
}

function CarLeftInfo({car}: ICarLeftInfo) {
  console.log(car);
  const {
    id, priceMin, priceMax, name, description,
    number, categoryId: {name: categoryName},
    thumbnail: {path}, tank, colors,
  } = car;
  return (
    <Box sx={carLeftInfo}>
      <Box sx={
        {...carLeftInfoImage,
          backgroundImage: `url(${path ? path : noImage})`,
        }}
      />
      <Typography sx={carLeftInfoName}>
        {name ? name.toUpperCase() : 'Неизвестная машина'}
      </Typography>
      <Typography sx={carLeftInfoCategory}>
        {categoryName || 'Неизвестный тип'}
      </Typography>
    </Box>
  );
}

export default CarLeftInfo;
