import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../../../hooks/reduxHooks';
import {orderStatusApi} from '../../../../../services/endpoints/orderStatus';
import {
  clearOrderStatusState, setFirstOrderStatusState,
} from '../../../../../store/slices/editSlices/orderStatus/orderStatusSlice';
import {Skeleton} from '@mui/material';
import EditPage from '../../../../editPage/EditPage';
import {getPercent} from '../../../../../utils/getPercent';
import OrderStatusLeft from './OrderStatusLeft/OrderStatusLeft';
import OrderStatusRight from './OrderStatusRight/OrderStatusRight';

function OrderStatus() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const [
    putOrderStatus, {isLoading: isPutLoading, isSuccess: isPutSuccess, isError: isPutError},
  ] = orderStatusApi.usePutOrderStatusMutation();
  const [
    postOrderStatus, {isLoading: isPostLoading, isSuccess: isPostSuccess, isError: isPostError},
  ] = orderStatusApi.usePostOrderStatusMutation();
  const [
    deleteOrderStatus,
    {isLoading: isDeleteLoading, isSuccess: isDeleteSuccess, isError: isDeleteError},
  ] = orderStatusApi.useDeleteOrderStatusMutation();
  const orderStatusForm = useAppSelector((state) => state.orderStatusReducer);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('Статус сохранен');
  const {
    data: orderStatus, isLoading: isGetLoading, isSuccess: isGetSuccess, error: isGetError,
  } = orderStatusApi.useGetOrderStatusQuery(id!, {skip: (id === 'new')});

  useEffect(() => {
    orderStatus && dispatch(setFirstOrderStatusState(orderStatus));
  }, [isGetSuccess]);

  useEffect(() => {
    if (isPutError || isPostError || isDeleteError) {
      navigate('/admin/error');
    }
  }, [isPutError, isPostError, isDeleteError]);

  useEffect(() => {
    if (isPutSuccess || isPostSuccess || isDeleteSuccess) {
      setShowAlert(true);
      isDeleteSuccess && setMessage('Статус удален');
      setTimeout(() => {
        navigate('/admin/orderStatus');
      }, 2000);
    }
  }, [isPutSuccess, isPostSuccess, isDeleteSuccess]);

  useEffect(() => {
    return () => {
      dispatch(clearOrderStatusState());
    };
  }, []);

  if (isGetLoading) {
    return <Skeleton variant="rectangular" animation="wave" width={'100%'} height={200} />;
  }

  if (isGetError && !isDeleteSuccess) {
    navigate('/admin/error');
  }

  return (
    <EditPage
      header={'Карточка статуса'}
      subtitle={'Настройка статуса'}
      leftSide={<OrderStatusLeft orderStatus={orderStatusForm!} />}
      rightSide={<OrderStatusRight orderStatus={orderStatusForm!}/>}
      accept={() => id === 'new' ?
        postOrderStatus(orderStatusForm):
        putOrderStatus({id: id!, body: orderStatusForm})}
      acceptLoading={!!(isPutLoading || isPostLoading)}
      isAcceptable={getPercent(orderStatusForm!) === 100}
      remove={() => deleteOrderStatus(id!)}
      removeLoading={!!isDeleteLoading}
      successText={message}
      showAlert={showAlert}
    />
  );
}

export default OrderStatus;
