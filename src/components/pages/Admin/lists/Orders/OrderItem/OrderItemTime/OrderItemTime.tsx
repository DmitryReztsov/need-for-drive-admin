import React from 'react';
import format from 'date-fns/format';
import {Typography} from '@mui/material';

interface IOrderDataTimeProps {
  dateFrom: number,
  dateTo: number,
}

function OrderItemTime({dateFrom, dateTo}: IOrderDataTimeProps) {
  const from = dateFrom ? format(new Date(dateFrom), 'dd.MM.yyyy k:mm') : 'неизвестно';
  const to = dateTo ? format(new Date(dateTo), 'dd.MM.yyyy k:mm') : 'неизвестно';
  return (
    <Typography variant={'body2'}>
      {from} - {to}
    </Typography>
  );
}

export default OrderItemTime;
