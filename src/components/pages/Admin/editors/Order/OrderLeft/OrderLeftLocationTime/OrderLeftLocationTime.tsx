import React from 'react';
import {IOrder} from '../../../../../../../models/IOrder';
import {Box, Typography} from '@mui/material';
import {
  OrderLeftLocationTimeAddress,
  OrderLeftLocationTimeTime,
  OrderLeftLocationTimeTitle,
} from './OrderLeftLocationTimeStyle';
import format from 'date-fns/format';

interface IOrderLeftInfo {
  order: IOrder,
}

function OrderLeftLocationTime({order}: IOrderLeftInfo) {
  const {dateFrom, dateTo, cityId, pointId} = order;
  const from = dateFrom ? format(new Date(dateFrom), 'dd.MM.yyyy k:mm') : 'неизвестно';
  const to = dateTo ? format(new Date(dateTo), 'dd.MM.yyyy k:mm') : 'неизвестно';

  return (
    <Box>
      <Typography sx={OrderLeftLocationTimeTitle}>
        Адрес и время выдачи
      </Typography>
      <Typography sx={OrderLeftLocationTimeAddress}>
        {cityId ? cityId?.name : 'Неизвестный город'},&nbsp;
        {pointId ? pointId?.address : 'Неизвестный пункт выдачи'}
      </Typography>
      <Typography sx={OrderLeftLocationTimeTime}>
        {from} - {to}
      </Typography>
    </Box>
  );
}

export default OrderLeftLocationTime;
