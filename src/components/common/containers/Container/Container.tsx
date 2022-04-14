import React from 'react';
import {Box} from '@mui/material';
import {container} from './ContainerStyle';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';

interface IContainerProps {
  children: React.ReactNode,
  sx?: SxProps<Theme>,
}

function Container({children, sx}: IContainerProps) {
  return (
    <Box sx={{...container, ...sx}}>
      {children}
    </Box>
  );
}

export default Container;
