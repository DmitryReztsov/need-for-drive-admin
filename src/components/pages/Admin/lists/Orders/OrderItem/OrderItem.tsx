import React from 'react';
import {Box, Typography} from '@mui/material';
import noImage from '../../../../../../content/png/no_image_available.png';
import OrderItemTime from './OrderItemTime/OrderItemTime';
import {IOrder} from '../../../../../../models/IOrder';
import {
  orderItem, orderItemButtons,
  orderItemImage,
  orderItemInfo,
  orderItemOptions,
  orderItemPrice,
  orderItemText,
} from './OrderItemStyle';
import ItemButtons from '../../../../../common/inputs/ItemButtons/ItemButtons';
import OrderItemOptions from './OrderItemOptions/OrderItemOptions';

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
            backgroundImage: `url(${carId ? carId?.thumbnail?.path : noImage})`,
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
      <Box sx={orderItemOptions}>
        <OrderItemOptions options={[isFullTank, isNeedChildChair, isRightWheel]} />
      </Box>
      <Typography sx={orderItemPrice} component={'div'}>
        {price ? `${price.toLocaleString()} ₽` : 'Не указана'}
      </Typography>
      <Box sx={orderItemButtons}>
        <ItemButtons />
      </Box>
    </Box>
  );
}

export default OrderItem;
