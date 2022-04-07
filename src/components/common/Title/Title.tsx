import React from 'react';
import {Box, Typography} from '@mui/material';
import {ReactComponent as Logo} from '../../../content/svg/logo.svg';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';

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
