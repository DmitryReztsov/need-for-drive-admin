import React from 'react';
import {Box} from '@mui/material';
import {
  orderLeft, orderLeftBar,
  orderLeftInfo, orderLeftLocation,
} from './OrderLeftStyle';
import {IOrder} from '../../../../../../models/IOrder';
import OrderLeftInfo from './OrderLeftInfo/OrderLeftInfo';
import ProgressBar from '../../../../../common/ProgressBar/ProgressBar';
import {getPercent} from '../../../../../../utils/getPercent';
import OrderLeftLocationTime from './OrderLeftLocationTime/OrderLeftLocationTime';
import {useAppSelector} from '../../../../../../hooks/reduxHooks';

interface IOrderLeft {
  order: IOrder,
}

function OrderLeft({order}: IOrderLeft) {
  const ignoredFields = useAppSelector((state) => state.ignoredFieldsReducer);
  return (
    <Box sx={orderLeft}>
      <Box sx={orderLeftInfo}>
        <OrderLeftInfo order={order} />
      </Box>
      <Box sx={orderLeftBar}>
        <ProgressBar
          percent={getPercent(order, ignoredFields)}
        />
      </Box>
      <Box sx={orderLeftLocation}>
        <OrderLeftLocationTime order={order} />
      </Box>
    </Box>
  );
}

export default OrderLeft;
