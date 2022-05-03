import React from 'react';
import {Box} from '@mui/material';
import TextInput from '../../../../../common/inputs/TextInput/TextInput';
import {useAppDispatch} from '../../../../../../hooks/reduxHooks';
import {orderStatusRight} from './OrderStatusRightStyle';
import {IOrderStatus} from '../../../../../../models/IOrderStatus';
import {
  setOrderStatusField,
} from '../../../../../../store/slices/editSlices/orderStatus/orderStatusSlice';

interface IOrderStatusRight {
  orderStatus: IOrderStatus,
}

function OrderStatusRight({orderStatus}: IOrderStatusRight) {
  const dispatch = useAppDispatch();
  const {name} = orderStatus;

  return (
    <Box sx={orderStatusRight}>
      <Box>
        <TextInput
          id='name'
          label={'Название статуса*'}
          value={name}
          change={(e) => dispatch(setOrderStatusField(['name', e.target.value]))}
          required
          placeholder={'Введите статус...'}
          autoFocus
          fullWidth
        />
      </Box>
    </Box>
  );
}

export default OrderStatusRight;
