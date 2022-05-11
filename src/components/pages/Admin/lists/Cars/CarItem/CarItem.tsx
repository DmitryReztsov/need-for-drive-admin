import React from 'react';
import {Box, Button, Typography, useMediaQuery} from '@mui/material';
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
  const match = useMediaQuery('(max-width:1280px)');
  const {
    id, priceMin, priceMax, name, description,
    number, categoryId,
    thumbnail, tank, colors,
  } = car;
  return (
    <Box sx={carItem} key={id}>
      <Box sx={carItemInfo}>
        <Box sx={
          {...carItemImage,
            backgroundImage: `url(${thumbnail ? thumbnail?.path : noImage})`,
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
          {categoryId && <Typography variant={'body2'}>{categoryId?.name}</Typography>}
          {description && <Typography variant={'body2'}>{description}</Typography>}
        </Typography>
      </Box>
      <Box sx={carItemDetails}>
        <Typography variant={'body2'}>
          {match && 'Топливо'} {`${tank || 0} %`}
        </Typography>
        <Typography variant={'body2'}>
          {match && 'Номер'} {number ? number : 'отсутствует'}
        </Typography>
      </Box>
      <Box sx={carItemColor}>
        <Box>
          {!!colors.length ?
            <CheckBoxGroup
              sx={carItemColorList}
              items={colors}
              clickCheckbox={(e) => e.preventDefault()}
            /> :
            'Цветов нет'
          }
        </Box>
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
