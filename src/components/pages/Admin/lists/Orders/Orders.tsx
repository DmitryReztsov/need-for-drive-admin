import React, {useEffect, useState} from 'react';
import Page from '../../../../page/Page';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../../../hooks/reduxHooks';
import {
  initialState, setFilter, clearFilters,
} from '../../../../../store/slices/filter/filterSlice';
import {IOrderQueryParams, orderApi} from '../../../../../services/endpoints/order';
import {carApi} from '../../../../../services/endpoints/car';
import {cityApi} from '../../../../../services/endpoints/city';
import {orderStatusApi} from '../../../../../services/endpoints/orderStatus';
import useSetParams from '../../../../../hooks/useSetParams';
import {IFilter} from '../../../../../models/IFilter';
import OrderItem from './OrderItem/OrderItem';
import {getPages} from '../../../../../utils/getPages';

function Orders() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {data: cars} = carApi.useGetCarsQuery({limit: 0});
  const {data: dataCities} = cityApi.useGetCitiesQuery({});
  const {data: orderStatuses} = orderStatusApi.useGetOrderStatusesQuery();
  const {
    createdAt, carId, cityId, orderStatusId,
  } = useAppSelector((state) => state.filterReducer);
  const [page, setPage] = useState<number>(1);
  const [queryParams, setQueryParams] = useState<Void<IOrderQueryParams>>();
  const {
    data, isLoading: orderLoading, error: orderError,
  } = orderApi.useGetOrdersQuery({page: page - 1, ...queryParams});

  const filters: IFilter [] = [
    {
      id: 'createdAt',
      value: createdAt,
      all: initialState.createdAt,
      cb: (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter(['createdAt', e.target.value]));
      },
      data: ['За последний месяц', 'За неделю'],
    },
    {
      id: 'carId',
      value: carId,
      all: initialState.carId,
      cb: (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter(['carId', e.target.value]));
      },
      data: cars?.cars || [],
    },
    {
      id: 'cityId',
      value: cityId,
      all: initialState.cityId,
      cb: (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter(['cityId', e.target.value]));
      },
      data: dataCities?.cities || [],
    },
    {
      id: 'orderStatusId',
      value: orderStatusId,
      all: initialState.orderStatusId,
      cb: (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter(['orderStatusId', e.target.value]));
      },
      data: orderStatuses || [],
    },
  ];

  function applyFilters() {
    setQueryParams(useSetParams(filters));
    setPage(1);
  }

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
      page={page}
      setPage={setPage}
      pages={getPages(data?.count)}
      apply={applyFilters}
      reset={() => dispatch(clearFilters())}
      dataLoading={orderLoading}
      array={data?.orders || []}
    >
      {(data?.orders || []).map((order) => <OrderItem order={order} key={order.id} />)}
    </Page>
  );
}

export default Orders;
