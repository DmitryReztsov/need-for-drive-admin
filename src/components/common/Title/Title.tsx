import React from 'react';
import {Box, Typography} from '@mui/material';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';
import {Logo} from '../../../content/svg/Icons';

interface ITitleProps {
  sx?: SxProps<Theme>,
  children: React.ReactNode,
}

function Title({sx, children}: ITitleProps) {
  return (
    <Box sx={sx}>
      <Logo />
      <Typography variant={'h2'}>{children}</Typography>
    </Box>
  );
}

export default Title;
