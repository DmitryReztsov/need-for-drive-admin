import React from 'react';
import {editPageLeft} from './EditPageLeftStyle';
import {Box} from '@mui/material';

interface IEditPageLeft {
  children: React.ReactNode,
}

function EditPageLeft({children}: IEditPageLeft) {
  return (
    <Box sx={editPageLeft}>
      {children}
    </Box>
  );
}

export default EditPageLeft;
