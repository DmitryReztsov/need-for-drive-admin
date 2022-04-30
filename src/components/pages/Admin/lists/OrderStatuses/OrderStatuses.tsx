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
    data, isLoading: orderStatusLoading, error: orderStatusError,
  } = orderStatusApi.useGetOrderStatusesQuery({page: page - 1});

  if (orderStatusError) {
    navigate('admin/error');
  }

  return (
    <Page
      header={'Список статусов'}
      page={page}
      setPage={setPage}
      pages={getPages(data?.count)}
      dataLoading={orderStatusLoading}
      array={data?.orderStatuses || []}
      listHeaders={['Статус заказа']}
    >
      {(data?.orderStatuses || [])
        .map((orderStatus) => <OrderStatusItem orderStatus={orderStatus} key={orderStatus.id} />)}
    </Page>
  );
}

export default OrderStatuses;
