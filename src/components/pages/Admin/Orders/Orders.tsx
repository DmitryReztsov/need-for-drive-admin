import React, {useEffect, useState} from 'react';
import OrderData from './OrderData/OrderData';
import Page from '../../../page/Page';
import {api} from '../../../../services/Api';
import {IOrder} from '../../../../models/IOrder';
import useFilter from '../../../../hooks/useFilter';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../../hooks/reduxHooks';
import {initialState, setFilter, clearFilters} from '../../../../store/slices/filter/filterSlice';

export interface IFilter {
  id: string,
  value: string,
  all: string,
  cb: (e: React.ChangeEvent<HTMLInputElement>) => void,
  data: any [],
}

function Orders() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {data: orders, isLoading: orderLoading, error: orderError} = api.useGetOrdersQuery(100);
  const {data: cars} = api.useGetCarsQuery(10);
  const {data: cities} = api.useGetCitiesQuery();
  const {data: orderStatuses} = api.useGetOrderStatusesQuery();
  const {date, car, city, status} = useAppSelector((state) => state.filterReducer);
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [filteredArray, setFilteredArray] = useState<IOrder[]>([]);

  const filters: IFilter [] = [
    {
      id: 'createdAt',
      value: date,
      all: initialState.date,
      cb: (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter(['date', e.target.value]));
      },
      data: ['За последний месяц', 'За неделю'],
    },
    {
      id: 'carId',
      value: car,
      all: initialState.car,
      cb: (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter(['car', e.target.value]));
      },
      data: cars || [],
    },
    {
      id: 'cityId',
      value: city,
      all: initialState.city,
      cb: (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter(['city', e.target.value]));
      },
      data: cities || [],
    },
    {
      id: 'orderStatusId',
      value: status,
      all: initialState.status,
      cb: (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter(['status', e.target.value]));
      },
      data: orderStatuses || [],
    },
  ];

  function applyFilters() {
    orders && setFilteredArray(useFilter(orders, filters));
    setActiveIndex(1);
  }

  function resetFilters() {
    dispatch(clearFilters());
  }

  useEffect(() => {
    orders && setFilteredArray(useFilter(orders, filters));
    setActiveIndex(1);
  }, [orders]);

  if (orderError) {
    navigate('admin/error');
  }

  useEffect(() => {
    return () => {
      dispatch(clearFilters());
    };
  }, []);

  return (
    <Page
      header={'Заказы'}
      filters={filters}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      pages={Math.ceil(filteredArray?.length / 5) || 1}
      apply={applyFilters}
      reset={resetFilters}
      dataLoading={orderLoading}
      filteredArray={filteredArray}
    >
      <OrderData orders={filteredArray} activeIndex={activeIndex} />
    </Page>
  );
}

export default Orders;
