import React from 'react';
import PageBaseRow from '../../../../../page/PageBaseRow/PageBaseRow';
import {Typography} from '@mui/material';
import {IRateType} from '../../../../../../models/IRateType';

interface IRateTypeItemProps {
  rateType: IRateType,
}

function RateTypeItem({rateType}: IRateTypeItemProps) {
  const {id, name, unit} = rateType;
  return (
    <PageBaseRow id={id}>
      <Typography>
        {name}
      </Typography>
      <Typography>
        {unit}
      </Typography>
    </PageBaseRow>
  );
}

export default RateTypeItem;
