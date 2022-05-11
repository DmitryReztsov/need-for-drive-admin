import React from 'react';
import {Box} from '@mui/material';
import {editPageRightContainer} from './EditPageRightContainerStyle';

interface IEditPageRightContainer {
  children: React.ReactNode,
}

function EditPageRightContainer({children}: IEditPageRightContainer) {
  return (
    <Box sx={editPageRightContainer}>
      {children}
    </Box>
  );
}

export default EditPageRightContainer;
