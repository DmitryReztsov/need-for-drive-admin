import React from 'react';
import {Box} from '@mui/material';
import {container} from './ContainerStyle';

interface IContainerProps {
  children: React.ReactNode,
}

function Container({children}: IContainerProps) {
  return (
    <Box sx={container}>
      {children}
    </Box>
  );
}

export default Container;
