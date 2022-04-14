import React from 'react';
import Container from '../../common/containers/Container/Container';
import {Box} from '@mui/material';
import {pageData, pageDataBody, pageDataContainer} from './PageDataStyle';

interface IPageDataProps {
  children: React.ReactNode,
}

function PageData({children}: IPageDataProps) {
  return (
    <Box sx={pageData}>
      <Container sx={pageDataContainer}>
        <Box sx={pageDataBody}>
          {children}
        </Box>
      </Container>
    </Box>
  );
}

export default PageData;
