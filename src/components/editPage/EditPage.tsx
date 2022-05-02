import React from 'react';
import {Box, Skeleton} from '@mui/material';
import {editorBody, editPage} from './EditPageStyle';
import Container from '../common/containers/Container/Container';
import PageHeader from '../page/PageHeader/PageHeader';
import EditPageRight from './EditPageRight/EditPageRight';
import EditPageLeft from './EditPageLeft/EditPageLeft';

interface IEditPageProps {
  leftSide: JSX.Element,
  rightSide: JSX.Element,
  header: string,
  subtitle: string,
  accept: (e: React.MouseEvent<HTMLButtonElement>) => void,
  remove: (e: React.MouseEvent<HTMLButtonElement>) => void,
  acceptLoading: boolean,
  removeLoading: boolean,
}

function EditPage(
  {
    leftSide, rightSide, header, subtitle, accept, remove,
    acceptLoading, removeLoading,
  }: IEditPageProps,
) {
  return (
    <Box sx={editPage}>
      <Container>
        <PageHeader>
          {header}
        </PageHeader>
        <Box sx={editorBody}>
          <EditPageLeft>
            {leftSide}
          </EditPageLeft>
          <EditPageRight
            subtitle={subtitle}
            accept={accept}
            remove={remove}
            acceptLoading={acceptLoading}
            removeLoading={removeLoading}
          >
            {rightSide}
          </EditPageRight>
        </Box>
      </Container>
    </Box>
  );
}

export default EditPage;
