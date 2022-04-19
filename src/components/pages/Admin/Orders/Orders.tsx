import React, {useEffect, useState} from 'react';
import OrderData from './OrderData/OrderData';
import Page from '../../../page/Page';
import {api} from '../../../../services/Api';
import {Box, Skeleton} from '@mui/material';
import {IOrder} from '../../../../models/IOrder';
import useFilter from '../../../../hooks/useFilter';

export interface IFilter {
  id: string,
  value: string,
  all: string,
  cb: (e: React.ChangeEvent<HTMLInputElement>) => void,
  data: any [],
}

function Orders() {
  const {data: orders, isLoading: orderLoading, error: orderError} = api.useGetOrdersQuery(20);
  const {data: cars} = api.useGetCarsQuery(10);
  const {data: cities} = api.useGetCitiesQuery();
  const {data: orderStatuses} = api.useGetOrderStatusesQuery();
  const [date, setDate] = useState<string>('За все время');
  const [car, setCar] = useState<string>('Все модели');
  const [city, setCity] = useState<string>('Все города');
  const [status, setStatus] = useState<string>('Любой');
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [filteredArray, setFilteredArray] = useState<IOrder[]>([]);

  const filters: IFilter [] = [
    {
      id: 'createdAt',
      value: date,
      all: 'За все время',
      cb: (e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value),
      data: ['За последний месяц', 'За неделю'],
    },
    {
      id: 'carId',
      value: car,
      all: 'Все модели',
      cb: (e: React.ChangeEvent<HTMLInputElement>) => setCar(e.target.value),
      data: cars || [],
    },
    {
      id: 'cityId',
      value: city,
      all: 'Все города',
      cb: (e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value),
      data: cities || [],
    },
    {
      id: 'orderStatusId',
      value: status,
      all: 'Любой',
      cb: (e: React.ChangeEvent<HTMLInputElement>) => setStatus(e.target.value),
      data: orderStatuses || [],
    },
  ];

  useEffect(() => {
    console.log(date, car, city, status, orders);
    orders && setFilteredArray(useFilter(orders, filters));
    setActiveIndex(1);
  }, [date, car, city, status, orders]);
  return (
    <Page
      header={'Заказы'}
      filters={filters}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      pages={filteredArray?.length || 1}
    >
      {orderLoading ?
        <Skeleton variant="rectangular" animation="wave" width={'100%'} height={200} /> :
        orderError ?
          <Box>Возникла ошибка</Box> :
          orders ?
            <OrderData orders={filteredArray} activeIndex={activeIndex} /> :
            <Box>Заказов нет</Box>
      }
    </Page>
  );
}

export default Orders;
