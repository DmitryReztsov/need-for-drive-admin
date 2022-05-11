import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Page from '../../../../page/Page';
import {getPages} from '../../../../../utils/getPages';
import {orderStatusApi} from '../../../../../services/endpoints/orderStatus';
import OrderStatusItem from './OrderStatusItem/OrderStatusItem';

function OrderStatuses() {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const {
    data: orderStatuses, isLoading: orderStatusLoading, error: orderStatusError,
  } = orderStatusApi.useGetOrderStatusesQuery({page: page - 1});

  if (orderStatusError) {
    navigate('/admin/error');
  }

  return (
    <Page
      header={'Список статусов'}
      page={page}
      setPage={setPage}
      pages={getPages(orderStatuses?.count)}
      dataLoading={orderStatusLoading}
      array={orderStatuses?.data || []}
      listHeaders={['Статус заказа']}
    >
      {(orderStatuses?.data || [])
        .map((orderStatus) => <OrderStatusItem orderStatus={orderStatus} key={orderStatus.id} />)}
    </Page>
  );
}

export default OrderStatuses;
