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
import {ACCEPT_ORDER_ID, DENY_ORDER_ID} from '../../../../../utils/config';

function Orders() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const {data: cars} = carApi.useGetCarsQuery({limit: 0});
  const {data: cities} = cityApi.useGetCitiesQuery({});
  const {data: orderStatuses} = orderStatusApi.useGetOrderStatusesQuery({});
  const {
    createdAt, carId, cityId, orderStatusId,
  } = useAppSelector((state) => state.filterReducer);
  const [page, setPage] = useState<number>(1);
  const [queryParams, setQueryParams] = useState<Void<IOrderQueryParams>>();
  const [
    putOrder, {isLoading: isPutLoading, isSuccess: isPutSuccess, isError: isPutError},
  ] = orderApi.usePutOrderMutation();
  const {
    data: orders, isLoading: orderLoading, error: orderError,
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
      data: cars?.data || [],
    },
    {
      id: 'cityId',
      value: cityId,
      all: initialState.cityId,
      cb: (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter(['cityId', e.target.value]));
      },
      data: cities?.data || [],
    },
    {
      id: 'orderStatusId',
      value: orderStatusId,
      all: initialState.orderStatusId,
      cb: (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter(['orderStatusId', e.target.value]));
      },
      data: orderStatuses?.data || [],
    },
  ];

  function applyFilters() {
    setQueryParams(useSetParams(filters));
    setPage(1);
  }

  useEffect(() => {
    return () => {
      dispatch(clearFilters());
    };
  }, []);

  useEffect(() => {
    if (isPutSuccess) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  }, [isPutSuccess]);

  if (orderError) {
    navigate('/admin/error');
  }
  if (isPutError) {
    navigate('/admin/error');
  }
  return (
    <Page
      header={'Заказы'}
      filters={filters}
      page={page}
      setPage={setPage}
      pages={getPages(orders?.count)}
      apply={applyFilters}
      reset={() => dispatch(clearFilters())}
      dataLoading={orderLoading}
      array={orders?.data || []}
      showAlert={showAlert}
      alertText={'Статус заказ обновлен'}
    >
      {(orders?.data || []).map((order) => {
        return (
          <OrderItem
            order={order}
            key={order.id}
            accept={
              () => putOrder({id: order.id, body: {...order, orderStatusId: {id: ACCEPT_ORDER_ID}}})
            }
            deny={
              () => putOrder({id: order.id, body: {...order, orderStatusId: {id: DENY_ORDER_ID}}})
            }
            loading={isPutLoading}
          />
        );
      })}
    </Page>
  );
}

export default Orders;
