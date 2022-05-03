import React from 'react';
import {Box, Typography} from '@mui/material';
import ProgressBar from '../../../../../common/ProgressBar/ProgressBar';
import {getPercent} from '../../../../../../utils/getPercent';
import {IRateType} from '../../../../../../models/IRateType';
import {
  rateTypeLeft, rateTypeLeftBar, rateTypeLeftTime, rateTypeLeftName,
} from './RateTypeLeftStyle';

interface IRateTypeLeft {
  rateType: IRateType,
}

function RateTypeLeft({rateType}: IRateTypeLeft) {
  const {name, unit} = rateType;
  return (
    <Box sx={rateTypeLeft}>
      <Typography sx={rateTypeLeftName}>
        {name ? name.toUpperCase() : 'Неизвестный тип тарифа'}
      </Typography>
      {unit &&
        <Typography sx={rateTypeLeftTime}>
          Доступное время - {unit}
        </Typography>
      }
      <Box sx={rateTypeLeftBar}>
        <ProgressBar percent={getPercent(rateType)} />
      </Box>
    </Box>
  );
}

export default RateTypeLeft;
