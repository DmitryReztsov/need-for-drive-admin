import React from 'react';
import {Box, Pagination} from '@mui/material';
import {orders} from './OrdersStyle';
import Container from '../../common/containers/Container/Container';
import PageHeader from '../../page/PageHeader/PageHeader';
import PageContent from '../../page/PageContent/PageContent';
import PageFilters from '../../page/PageFilters/PageFilters';
import PagePagination from '../../page/PagePagination/PagePagination';
import PageData from '../../page/PageData/PageData';

function Orders() {
  return (
    <Box sx={orders}>
      <Container>
        <PageHeader>
          Заказы
        </PageHeader>
        <PageContent>
          <PageFilters>
            Filters
          </PageFilters>
          <PageData>
            Data
          </PageData>
          <PagePagination />
        </PageContent>
      </Container>
    </Box>
  );
}

export default Orders;
