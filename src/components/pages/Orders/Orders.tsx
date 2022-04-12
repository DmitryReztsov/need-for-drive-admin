import React, {useState} from 'react';
import {Box, Button} from '@mui/material';
import {orders, pageFiltersBox, pageFiltersButton} from './OrdersStyle';
import Container from '../../common/containers/Container/Container';
import PageHeader from '../../page/PageHeader/PageHeader';
import PageContent from '../../page/PageContent/PageContent';
import PageFilters from '../../page/PageFilters/PageFilters';
import PagePagination from '../../page/PagePagination/PagePagination';
import PageData from '../../page/PageData/PageData';
import Filter from '../../common/inputs/Filter/Filter';
import {cityData, nameData, order, statusData, timeData} from './orderMocks';
import OrderData from './OrderData/OrderData';

function Orders() {
  const [date, setDate] = useState<number>(0);
  const [name, setName] = useState<string>('Все модели');
  const [city, setCity] = useState<string>('Все города');
  const [status, setStatus] = useState<string>('Любой');
  return (
    <Box sx={orders}>
      <Container>
        <PageHeader>
          Заказы
        </PageHeader>
        <PageContent>
          <PageFilters>
            <Box sx={pageFiltersBox}>
              <Filter
                id={'date'}
                value={date}
                change={(e) => setDate(+e.target.value)}
                data={timeData}
              />
              <Filter
                id={'name'}
                value={name}
                change={(e) => setName(e.target.value)}
                data={nameData}
              />
              <Filter
                id={'city'}
                value={city}
                change={(e) => setCity(e.target.value)}
                data={cityData}
              />
              <Filter
                id={'status'}
                value={status}
                change={(e) => setStatus(e.target.value)}
                data={statusData}
              />
            </Box>
            <Button
              variant="contained"
              color={'secondary'}
              sx={pageFiltersButton}
            >
              Применить
            </Button>
          </PageFilters>
          <PageData>
            <OrderData order={order} />
          </PageData>
          <PagePagination />
        </PageContent>
      </Container>
    </Box>
  );
}

export default Orders;
