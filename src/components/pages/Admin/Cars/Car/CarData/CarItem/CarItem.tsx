import React from 'react';
import {ICar} from '../../../../../../../models/ICar';
import {Box, Checkbox, FormControlLabel, Typography} from '@mui/material';
import {
  carItem, carItemColor, carItemDetails,
  carItemImage, carItemInfo, carItemName, carItemPrice, carItemText,
} from './CarItemStyle';
import noImage from '../../../../../../../content/png/no_image_available.png';
import CarItemPrice from './CarItemPrice/CarItemPrice';
import CarItemColor from './CarItemColor/CarItemColor';

interface ICarProps {
  car: ICar,
}

function CarItem({car}: ICarProps) {
  const {
    id, priceMin, priceMax, name, description,
    number, categoryId: {name: categoryName},
    thumbnail: {path}, tank, colors,
  } = car;
  return (
    <Box sx={carItem} key={id}>
      <Box sx={carItemInfo}>
        <Box sx={
          {...carItemImage,
            backgroundImage: `url(${path ? path : noImage})`,
          }}
        >
        </Box>
        <Typography component={'div'} variant={'body2'} sx={carItemText}>
          <Typography
            variant={'h3'}
            sx={carItemName}
          >
            {name ? name.toUpperCase() : 'Неизвестная машина'}
          </Typography>
          {categoryName && <Typography variant={'body2'}>{categoryName}</Typography>}
          {description && <Typography variant={'body2'}>{description}</Typography>}
        </Typography>
      </Box>
      <Box sx={carItemDetails}>
        <Typography variant={'body2'}>
          Оставшееся топливо: {`${tank || 0} %`}
        </Typography>
        <Typography variant={'body2'}>
          {number}
        </Typography>
      </Box>
      <Box sx={carItemColor}>
        <CarItemColor colors={colors} />
      </Box>
      <Box sx={carItemPrice}>
        <CarItemPrice priceMin={priceMin} priceMax={priceMax} />
      </Box>
    </Box>
  );
}

export default CarItem;
