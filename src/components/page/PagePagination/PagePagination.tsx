import React from 'react';
import {Box, Pagination, PaginationItem} from '@mui/material';
import Container from '../../common/containers/Container/Container';
import {pagePagination, pagePaginationBody, pagePaginationContainer} from './PagePaginationStyle';
import {ReactComponent as ArrowLeft} from '../../../content/svg/icons/arrow-left.svg';
import {ReactComponent as ArrowRight} from '../../../content/svg/icons/arrow-right.svg';

function PagePagination() {
  return (
    <Box sx={pagePagination}>
      <Container sx={pagePaginationContainer}>
        <Box sx={pagePaginationBody}>
          <Pagination count={10}
            renderItem={(item) => (
              <PaginationItem
                components={{previous: ArrowLeft, next: ArrowRight}}
                {...item}
              />
            )}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default PagePagination;
