import React from 'react';
import {Box} from '@mui/material';
import {orderData} from './OrderDataStyle';
import {IOrder} from '../../../../../models/IOrder';
import OrderItem from './OrderItem/OrderItem';

interface IOrderDataProps {
  orders: IOrder[],
}

function OrderData({orders}: IOrderDataProps) {
  return (
    <Box sx={orderData}>
      {orders.map((order) => <OrderItem order={order} />)}
    </Box>
  );
}

export default OrderData;
