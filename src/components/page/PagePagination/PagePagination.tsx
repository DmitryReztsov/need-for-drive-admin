import React from 'react';
import {Box, Pagination} from '@mui/material';
import Container from '../../common/containers/Container/Container';
import {pagePagination, pagePaginationBody, pagePaginationContainer} from './PagePaginationStyle';

function PagePagination() {
  return (
    <Box sx={pagePagination}>
      <Container sx={pagePaginationContainer}>
        <Box sx={pagePaginationBody}>
          <Pagination count={10} />
        </Box>
      </Container>
    </Box>
  );
}

export default PagePagination;
