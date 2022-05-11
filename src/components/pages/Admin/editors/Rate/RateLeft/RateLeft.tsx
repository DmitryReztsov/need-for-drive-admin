import React from 'react';
import {Box, Typography} from '@mui/material';
import ProgressBar from '../../../../../common/ProgressBar/ProgressBar';
import {getPercent} from '../../../../../../utils/getPercent';
import {IRate} from '../../../../../../models/IRate';
import {
  rateLeft, rateLeftBar, rateLeftPrice, rateLeftName, rateLeftTime,
} from './RateLeftStyle';

interface IRateLeft {
  rate: IRate,
}

function RateLeft({rate}: IRateLeft) {
  const {price, rateTypeId} = rate;
  return (
    <Box sx={rateLeft}>
      <Typography sx={rateLeftName}>
        {rateTypeId ? rateTypeId.name.toUpperCase() : 'Неизвестный тариф'}
      </Typography>
      {!!price &&
        <Typography sx={rateLeftPrice}>
          Стоимость - {price} ₽
        </Typography>
      }
      {rateTypeId &&
      <Typography sx={rateLeftTime}>
        Длительность - {rateTypeId.unit}
      </Typography>
      }
      <Box sx={rateLeftBar}>
        <ProgressBar percent={getPercent(rate)} />
      </Box>
    </Box>
  );
}

export default RateLeft;
