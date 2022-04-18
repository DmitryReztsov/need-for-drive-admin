import React, {useEffect, useState} from 'react';
import {cityData, nameData, ordersArray, statusData, timeData} from './orderMocks';
import OrderData from './OrderData/OrderData';
import Page from '../../../page/Page';
import {api} from '../../../../services/Api';

function Orders() {
  const [date, setDate] = useState<number>(0);
  const [name, setName] = useState<string>('Все модели');
  const [city, setCity] = useState<string>('Все города');
  const [status, setStatus] = useState<string>('Любой');
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const {data, isLoading, error} = api.useGetRateQuery('6259003d73b61100181028d9');
  let order = ordersArray[0];

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

  useEffect(() => {
    order = ordersArray[activeIndex - 1];
  }, [activeIndex]);
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <Page
      header={'Заказы'}
      filters={filters}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      pages={ordersArray.length}
    >
      <OrderData order={order} />
    </Page>
  );
}

export default Orders;
