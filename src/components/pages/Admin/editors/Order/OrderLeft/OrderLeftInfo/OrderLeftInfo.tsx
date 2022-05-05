import React from 'react';
import {Box, Checkbox, FormControlLabel, Typography} from '@mui/material';
import {
  orderLeftInfo, orderLeftInfoCategory, orderLeftInfoId,
  orderLeftInfoImage, orderLeftInfoName, orderLeftInfoOptions,
  orderLeftInfoPrice, orderLeftInfoStatus,
} from './OrderLeftInfoStyle';
import noImage from '../../../../../../../content/png/no_image_available.png';
import {IOrder} from '../../../../../../../models/IOrder';

interface IOrderLeftInfo {
  order: IOrder,
}

function OrderLeftInfo({order}: IOrderLeftInfo) {
  const {id, carId, color, price,
    isFullTank, isNeedChildChair,
    isRightWheel, orderStatusId,
  } = order;
  const options = [isFullTank, isNeedChildChair, isRightWheel];
  const labels = ['Полный бак', 'Детское кресло', 'Правый руль'];

  return (
    <Box sx={orderLeftInfo}>
      <Typography sx={orderLeftInfoId}>
        {id ? `Заказ № ${id}` : 'Новый заказ'}
      </Typography>
      <Typography sx={orderLeftInfoStatus}>
        {orderStatusId ? `Статус: ${orderStatusId?.name}` : 'Неизвестный статус'}
      </Typography>
      <Box sx={
        {...orderLeftInfoImage,
          backgroundImage: `url(${carId ? carId?.thumbnail?.path : noImage})`,
        }}
      />
      <Typography sx={orderLeftInfoName}>
        {carId ? carId?.name.toUpperCase() : 'Неизвестная машина'}
      </Typography>
      <Typography sx={orderLeftInfoCategory}>
        {carId ? carId?.categoryId?.name : 'Неизвестный тип'},&nbsp;
        {color ? color : 'любой цвет'}
      </Typography>
      <Box sx={orderLeftInfoOptions}>
        {options.map((option, i) => {
          return option && (
            <FormControlLabel
              key={labels[i]}
              control={<Checkbox defaultChecked />}
              label={labels[i]}
              onClick={(e) => e.preventDefault()}
            />
          );
        })}
      </Box>
      <Typography sx={orderLeftInfoPrice}>
        {price ? `${price.toLocaleString()} ₽` : 'Цена не указана'}
      </Typography>
    </Box>
  );
}

export default OrderLeftInfo;
