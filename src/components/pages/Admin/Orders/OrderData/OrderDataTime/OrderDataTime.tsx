import React from 'react';
import format from 'date-fns/format';
import {Typography} from '@mui/material';

interface IOrderDataTimeProps {
  dateFrom: number,
  dateTo: number,
}

function OrderDataTime({dateFrom, dateTo}: IOrderDataTimeProps) {
  const from = dateFrom ? format(new Date(dateFrom), 'dd.MM.yyyy k:mm') : 'неизвестно';
  const to = dateFrom ? format(new Date(dateTo), 'dd.MM.yyyy k:mm') : 'неизвестно';
  return (
    <Typography variant={'body2'}>
      {from} - {to}
    </Typography>
  );
}

export default OrderDataTime;
