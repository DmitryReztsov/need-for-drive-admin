import React from 'react';
import {Box, Typography} from '@mui/material';
import {editPageRight, editPageRightSubtitle} from './EditPageRightStyle';
import EditPageRightContainer from './EditPageRightContainer/EditPageRightContainer';
import EditPageRightButtons from './EditPageRightButtons/EditPageRightButtons';

interface IEditPageRight {
  children: React.ReactNode,
  subtitle: string,
}

function EditPageRight({children, subtitle}: IEditPageRight) {
  return (
    <Box sx={editPageRight}>
      <EditPageRightContainer>
        <Typography sx={editPageRightSubtitle}>
          {subtitle}
        </Typography>
        <Box>
          {children}
        </Box>
        <EditPageRightButtons />
      </EditPageRightContainer>
    </Box>
  );
}

export default EditPageRight;
