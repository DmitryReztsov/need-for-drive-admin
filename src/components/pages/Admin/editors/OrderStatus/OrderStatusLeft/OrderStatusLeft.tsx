import React from 'react';
import {Box, Typography} from '@mui/material';
import ProgressBar from '../../../../../common/ProgressBar/ProgressBar';
import {getPercent} from '../../../../../../utils/getPercent';
import {orderStatusLeft, orderStatusLeftBar, orderStatusLeftName} from './OrderStatusLeftStyle';
import {IOrderStatus} from '../../../../../../models/IOrderStatus';

interface IOrderStatusLeft {
  orderStatus: IOrderStatus,
}

function OrderStatusLeft({orderStatus}: IOrderStatusLeft) {
  const {name} = orderStatus;
  return (
    <Box sx={orderStatusLeft}>
      <Typography sx={orderStatusLeftName}>
        {name ? name.toUpperCase() : 'Неизвестный статус'}
      </Typography>
      <Box sx={orderStatusLeftBar}>
        <ProgressBar percent={getPercent(orderStatus)} />
      </Box>
    </Box>
  );
}

export default OrderStatusLeft;
