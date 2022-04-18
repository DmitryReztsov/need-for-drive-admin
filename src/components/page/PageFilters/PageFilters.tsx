import React from 'react';
import {Box, Button} from '@mui/material';
import {
  pageFilters,
  pageFiltersBody,
  pageFiltersBox,
  pageFiltersButtons,
  pageFiltersContainer,
} from './PageFiltersStyle';
import Container from '../../common/containers/Container/Container';
import Filter from '../../common/inputs/Filter/Filter';

interface IPageFiltersProps {
  filters: any,
}

function PageFilters({filters}: IPageFiltersProps) {
  return (
    <Box sx={pageFilters}>
      <Container sx={pageFiltersContainer}>
        <Box sx={pageFiltersBody}>
          <Box sx={pageFiltersBox}>
            {filters.map((filter: any) => {
              return <Filter
                key={filter.id}
                id={filter.id}
                value={filter.value}
                change={filter.cb}
                data={filter.data}
              />;
            })}
          </Box>
          <Box sx={pageFiltersButtons}>
            <Button
              variant="contained"
              color={'error'}
              // sx={pageFiltersButton}
            >
              Сбросить
            </Button>
            <Button
              variant="contained"
              color={'secondary'}
              // sx={pageFiltersButton}
            >
              Применить
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default PageFilters;
