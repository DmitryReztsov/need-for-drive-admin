import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import {
  carItem, carItemButtons, carItemColor, carItemColorList, carItemDetails,
  carItemImage, carItemInfo, carItemName, carItemPrice, carItemText,
} from './CarItemStyle';
import noImage from '../../../../../../content/png/no_image_available.png';
import CarItemPrice from './CarItemPrice/CarItemPrice';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {ICar} from '../../../../../../models/ICar';
import {useNavigate} from 'react-router-dom';
import CheckBoxGroup from '../../../../../common/inputs/CheckBoxGroup/CheckBoxGroup';

interface ICarProps {
  car: ICar,
}

function CarItem({car}: ICarProps) {
  const navigate = useNavigate();
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
        <CheckBoxGroup sx={carItemColorList} items={colors} />
      </Box>
      <Box sx={carItemPrice}>
        <CarItemPrice priceMin={priceMin} priceMax={priceMax} />
      </Box>
      <Box sx={carItemButtons}>
        <Button
          startIcon={<MoreVertIcon />}
          color={'secondary'}
          variant={'outlined'}
          onClick={() => navigate(id)}
        >
          Изменить
        </Button>
      </Box>
    </Box>
  );
}

export default CarItem;
