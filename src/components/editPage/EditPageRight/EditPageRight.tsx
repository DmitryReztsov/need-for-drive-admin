import React from 'react';
import {Box, Typography} from '@mui/material';
import {editPageRight, editPageRightFields, editPageRightSubtitle} from './EditPageRightStyle';
import EditPageRightContainer from './EditPageRightContainer/EditPageRightContainer';
import EditPageRightButtons from './EditPageRightButtons/EditPageRightButtons';

interface IEditPageRight {
  children: React.ReactNode,
  subtitle: string,
  accept: (e: React.MouseEvent<HTMLButtonElement>) => void,
  remove: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

function EditPageRight({children, subtitle, accept, remove}: IEditPageRight) {
  return (
    <Box sx={editPageRight}>
      <EditPageRightContainer>
        <Typography sx={editPageRightSubtitle}>
          {subtitle}
        </Typography>
        <Box sx={editPageRightFields}>
          {children}
        </Box>
        <EditPageRightButtons
          accept={accept}
          remove={remove}
        />
      </EditPageRightContainer>
    </Box>
  );
}

export default EditPageRight;
