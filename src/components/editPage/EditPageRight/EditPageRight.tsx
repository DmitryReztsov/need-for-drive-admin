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
  acceptLoading: boolean,
  removeLoading: boolean,
}

function EditPageRight(
  {
    children, subtitle, accept, remove, acceptLoading, removeLoading,
  }: IEditPageRight) {
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
          acceptLoading={acceptLoading}
          removeLoading={removeLoading}
        />
      </EditPageRightContainer>
    </Box>
  );
}

export default EditPageRight;
