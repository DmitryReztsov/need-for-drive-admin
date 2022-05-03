import React from 'react';
import {Box, Typography} from '@mui/material';
import ProgressBar from '../../../../../common/ProgressBar/ProgressBar';
import {getPercent} from '../../../../../../utils/getPercent';
import {ICity} from '../../../../../../models/ICity';
import {cityLeft, cityLeftBar, cityLeftName} from './CityLeftStyle';

interface ICityLeft {
  city: ICity,
}

function CityLeft({city}: ICityLeft) {
  const {name} = city;
  return (
    <Box sx={cityLeft}>
      <Typography sx={cityLeftName}>
        {name ? name.toUpperCase() : 'Неизвестный город'}
      </Typography>
      <Box sx={cityLeftBar}>
        <ProgressBar percent={getPercent(city)} />
      </Box>
    </Box>
  );
}

export default CityLeft;
