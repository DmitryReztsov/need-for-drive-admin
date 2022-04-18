import React, {useState} from 'react';
import {cityData, nameData, statusData, timeData} from './orderMocks';
import OrderData from './OrderData/OrderData';
import Page from '../../../page/Page';
import {api} from '../../../../services/Api';
import {Box, Skeleton} from '@mui/material';
import {IOrder} from '../../../../models/IOrder';

function Orders() {
  const [date, setDate] = useState<number>(0);
  const [name, setName] = useState<string>('Все модели');
  const [city, setCity] = useState<string>('Все города');
  const [status, setStatus] = useState<string>('Любой');
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const {data, isLoading, error} = api.useGetOrdersQuery(20);

  const filters = [
    {
      id: 'date',
      value: date,
      cb: (e: React.ChangeEvent<HTMLInputElement>) => setDate(+e.target.value),
      data: timeData,
    },
    {
      id: 'name',
      value: name,
      cb: (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value),
      data: nameData,
    },
    {
      id: 'city',
      value: city,
      cb: (e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value),
      data: cityData,
    },
    {
      id: 'status',
      value: status,
      cb: (e: React.ChangeEvent<HTMLInputElement>) => setStatus(e.target.value),
      data: statusData,
    },
  ];

  return (
    <Page
      header={'Заказы'}
      filters={filters}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      pages={data?.length || 1}
    >
      {isLoading ? <Skeleton variant="rectangular" animation="wave" width={'100%'} height={200} /> :
        error ?
          <Box>Возникла ошибка</Box> :
          data ?
            <OrderData orders={data} activeIndex={activeIndex} /> :
            <Box>Заказов нет</Box>
      }
    </Page>
  );
}

export default Orders;
