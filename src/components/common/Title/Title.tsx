import React from 'react';
import {Box, Typography} from '@mui/material';
import {title} from './TitleStyle';
import {ReactComponent as Logo} from '../../../content/svg/logo.svg';

function Title() {
  return (
    <Box sx={title}>
      <Logo />
      <Typography variant={'h2'}>Need for drive</Typography>
    </Box>
  );
}

export default Title;
