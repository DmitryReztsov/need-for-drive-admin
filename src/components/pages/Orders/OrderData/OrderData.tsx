import React from 'react';
import {Box, Typography} from '@mui/material';
import {orderData, orderDataImage, orderDataInfo, orderDataText} from './OrderDataStyle';
import {formatDate} from '../../../../utils/time';

interface IOrderDataProps {
  order: any,
}

function OrderData({order}: IOrderDataProps) {
  const {cityId, pointId, carId, dateFrom, dateTo, color} = order;
  return (
    <Box sx={orderData}>
      <Box sx={orderDataInfo}>
        <Box sx={{...orderDataImage, backgroundImage: `url(${carId.thumbnail.path})`}}>
        </Box>
        <Box sx={orderDataText}>
          <Typography>
            <Typography
              component={'span'}
              color={'grey.900'}
            >
              {carId.name}
            </Typography>
            &nbsp;в&nbsp;
            <Typography
              component={'span'}
              color={'grey.900'}
            >
              {cityId.name}
            </Typography>
            , {pointId.address}
            <br/>
          </Typography>
          <Typography>
            {formatDate(dateFrom)} - {formatDate(dateTo)}
          </Typography>
          <Typography>
            Цвет:&nbsp;
            <Typography
              component={'span'}
              color={'grey.900'}
            >
              {color}
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Box>Чекбоксы</Box>
      <Box>Сумма</Box>
      <Box>Кнопки</Box>
    </Box>
  );
}

export default OrderData;
