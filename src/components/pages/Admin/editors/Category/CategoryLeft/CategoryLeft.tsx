import React from 'react';
import {Box, Typography} from '@mui/material';
import ProgressBar from '../../../../../common/ProgressBar/ProgressBar';
import {getPercent} from '../../../../../../utils/getPercent';
import {ICategory} from '../../../../../../models/ICategory';
import {
  categoryLeft, categoryLeftBar, categoryLeftDescription, categoryLeftName,
} from './CategoryLeftStyle';

interface ICategoryLeft {
  category: ICategory,
}

function CategoryLeft({category}: ICategoryLeft) {
  const {name, description} = category;
  return (
    <Box sx={categoryLeft}>
      <Typography sx={categoryLeftName}>
        {name ? name.toUpperCase() : 'Неизвестная категория'}
      </Typography>
      {description &&
        <Typography sx={categoryLeftDescription}>
          {description}
        </Typography>
      }
      <Box sx={categoryLeftBar}>
        <ProgressBar percent={getPercent(category)} />
      </Box>
    </Box>
  );
}

export default CategoryLeft;
