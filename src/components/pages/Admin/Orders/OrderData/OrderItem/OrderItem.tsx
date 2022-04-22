import React from 'react';
import {
  Box, Button, ButtonGroup, Checkbox, FormControlLabel, FormGroup, Typography,
} from '@mui/material';
import noImage from '../../../../../../content/png/no_image_available.png';
import OrderItemTime from './OrderItemTime/OrderItemTime';
import {Check} from '@mui/icons-material';
import ClearIcon from '@mui/icons-material/Clear';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {IOrder} from '../../../../../../models/IOrder';
import {
  orderItem, orderItemButtons,
  orderItemImage,
  orderItemInfo,
  orderItemOptions,
  orderItemPrice,
  orderItemText,
} from './OrderItemStyle';

interface IOrderProps {
  order: IOrder,
}

function OrderItem({order}: IOrderProps) {
  const {
    id, cityId, pointId, carId, dateFrom, dateTo,
    color, price, isFullTank, isNeedChildChair, isRightWheel,
  } = order;
  return (
    <Box sx={orderItem} key={id}>
      <Box sx={orderItemInfo}>
        <Box sx={
          {...orderItemImage,
            backgroundImage: `url(${carId ? carId.thumbnail.path : noImage})`,
          }}
        >
        </Box>
        <Typography component={'div'} variant={'body2'} sx={orderItemText}>
          <Typography variant={'body2'}>
            <Typography
              component={'span'}
              variant={'body2'}
              color={'grey.900'}
            >
              {carId ? carId.name.toUpperCase() : 'Неизвестная машина'}
            </Typography>
            &nbsp;в&nbsp;
            <Typography
              component={'span'}
              variant={'body2'}
              color={'grey.900'}
            >
              {cityId ? cityId.name : 'Неопределенный город'}
            </Typography>
            , {pointId ? pointId.address : 'Неопределенный адрес'}
            <br/>
          </Typography>
          <OrderItemTime dateFrom={dateFrom} dateTo={dateTo} />
          <Typography variant={'body2'}>
            Цвет:&nbsp;
            <Typography
              component={'span'}
              variant={'body2'}
              color={'grey.900'}
            >
              {color}
            </Typography>
          </Typography>
        </Typography>
      </Box>
      <FormGroup sx={orderItemOptions}>
        <FormControlLabel
          // добавлен false чтобы закрыть предупреждение компилятора
          control={
            <Checkbox
              onClick={(e) => e.preventDefault()}
              disabled={!isFullTank}
              checked={isFullTank || false}
            />
          }
          label="Полный бак"
        />
        <FormControlLabel
          control={
            <Checkbox
              onClick={(e) => e.preventDefault()}
              disabled={!isNeedChildChair}
              checked={isNeedChildChair || false}
            />
          }
          label="Детское кресло"
        />
        <FormControlLabel
          control={
            <Checkbox
              onClick={(e) => e.preventDefault()}
              disabled={!isRightWheel}
              checked={isRightWheel || false}
            />
          }
          label="Правый руль"
        />
      </FormGroup>
      <Typography sx={orderItemPrice}>
        {price ? `${price.toLocaleString()} ₽` : 'Не указана'}
      </Typography>
      <ButtonGroup variant="outlined" sx={orderItemButtons}>
        <Button
          startIcon={<Check color={'primary'} />}
          color={'secondary'}>
          Готово
        </Button>
        <Button
          startIcon={<ClearIcon color={'error'} />}
          color={'secondary'}>
          Отмена
        </Button>
        <Button
          startIcon={<MoreVertIcon />}
          color={'secondary'}>
          Изменить
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default OrderItem;
