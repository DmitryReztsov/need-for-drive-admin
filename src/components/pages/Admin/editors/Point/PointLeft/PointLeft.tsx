import React from 'react';
import {Box, Typography} from '@mui/material';
import ProgressBar from '../../../../../common/ProgressBar/ProgressBar';
import {getPercent} from '../../../../../../utils/getPercent';
import {IPoint} from '../../../../../../models/IPoint';
import {
  pointLeft, pointLeftBar, pointLeftPrice, pointLeftName, pointLeftTime,
} from './PointLeftStyle';

interface IPointLeft {
  point: IPoint,
}

function PointLeft({point}: IPointLeft) {
  const {name, address, cityId} = point;
  return (
    <Box sx={pointLeft}>
      <Typography sx={pointLeftName}>
        {name ? name.toUpperCase() : 'Без названия'}
      </Typography>
      {cityId &&
        <Typography sx={pointLeftPrice}>
          Город: {cityId.name}
        </Typography>
      }
      {address &&
      <Typography sx={pointLeftTime}>
        Адрес: {address}
      </Typography>
      }
      <Box sx={pointLeftBar}>
        <ProgressBar percent={getPercent(point)} />
      </Box>
    </Box>
  );
}

export default PointLeft;
