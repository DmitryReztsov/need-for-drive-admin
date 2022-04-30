import React from 'react';
import PageBaseRow from '../../../../../page/PageBaseRow/PageBaseRow';
import {Typography} from '@mui/material';
import {IRate} from '../../../../../../models/IRate';

interface IRateItemProps {
  rate: IRate,
}

function RateItem({rate}: IRateItemProps) {
  const {id, price, rateTypeId} = rate;
  return (
    <PageBaseRow id={id}>
      <Typography>
        {rateTypeId ? rateTypeId.name : 'Неизвестный тип тарифа'}
      </Typography>
      <Typography>
        {price} ₽
      </Typography>

    </PageBaseRow>
  );
}

export default RateItem;
