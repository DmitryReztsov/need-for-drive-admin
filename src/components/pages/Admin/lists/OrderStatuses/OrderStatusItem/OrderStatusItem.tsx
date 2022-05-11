import React from 'react';
import PageBaseRow from '../../../../../page/PageBaseRow/PageBaseRow';
import {Typography} from '@mui/material';
import {IOrderStatus} from '../../../../../../models/IOrderStatus';

interface IOrderStatusItemProps {
  orderStatus: IOrderStatus,
}

function OrderStatusItem({orderStatus}: IOrderStatusItemProps) {
  const {id, name} = orderStatus;
  return (
    <PageBaseRow id={id}>
      <Typography>
        {name}
      </Typography>
    </PageBaseRow>
  );
}

export default OrderStatusItem;
