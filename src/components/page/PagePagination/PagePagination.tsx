import React, {Dispatch, SetStateAction} from 'react';
import {Box, Pagination, PaginationItem} from '@mui/material';
import Container from '../../common/containers/Container/Container';
import {pagePagination, pagePaginationBody, pagePaginationContainer} from './PagePaginationStyle';
import {ReactComponent as ArrowLeft} from '../../../content/svg/icons/arrow-left.svg';
import {ReactComponent as ArrowRight} from '../../../content/svg/icons/arrow-right.svg';

interface IPagePaginationProps {
  activeIndex: number,
  setActiveIndex: Dispatch<SetStateAction<number>>,
  pages: number,
}

function PagePagination({activeIndex, setActiveIndex, pages}: IPagePaginationProps) {
  return (
    <Box sx={pagePagination}>
      <Container sx={pagePaginationContainer}>
        <Box sx={pagePaginationBody}>
          <Pagination
            count={pages}
            page={activeIndex}
            onChange={(e, value) => setActiveIndex(+value)}
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
