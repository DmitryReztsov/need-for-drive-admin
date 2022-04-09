import React from 'react';
import {Box} from '@mui/material';
import {pageFilters, pageFiltersBody, pageFiltersContainer} from './PageFiltersStyle';
import Container from '../../common/containers/Container/Container';

interface IPageFiltersProps {
  children: React.ReactNode,
}

function PageFilters({children}: IPageFiltersProps) {
  return (
    <Box sx={pageFilters}>
      <Container sx={pageFiltersContainer}>
        <Box sx={pageFiltersBody}>
          {children}
        </Box>
      </Container>
    </Box>
  );
}

export default PageFilters;
