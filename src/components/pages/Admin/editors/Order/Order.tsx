import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../../../hooks/reduxHooks';
import {orderApi} from '../../../../../services/endpoints/order';
import {
  clearOrderState, setFirstOrderState,
} from '../../../../../store/slices/editSlices/order/orderSlice';
import {Skeleton} from '@mui/material';
import EditPage from '../../../../editPage/EditPage';
import OrderRight from '../Order/OrderRight/OrderRight';
import {getPercent} from '../../../../../utils/getPercent';
import OrderLeft from './OrderLeft/OrderLeft';
import {
  clearIgnoredFields, setNewIgnoredFields,
} from '../../../../../store/slices/ignoredFields/ignoredFieldsSlice';

function Order() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const ignoredFields = useAppSelector((state) => state.ignoredFieldsReducer);
  const [
    putOrder, {isLoading: isPutLoading, isSuccess: isPutSuccess, isError: isPutError},
  ] = orderApi.usePutOrderMutation();
  const [
    postOrder, {isLoading: isPostLoading, isSuccess: isPostSuccess, isError: isPostError},
  ] = orderApi.usePostOrderMutation();
  const [
    deleteOrder, {isLoading: isDeleteLoading, isSuccess: isDeleteSuccess, isError: isDeleteError},
  ] = orderApi.useDeleteOrderMutation();
  const orderForm = useAppSelector((state) => state.orderReducer);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('Заказ сохранен');
  const {
    data: order, isLoading: isGetLoading, isSuccess: isGetSuccess, error: isGetError,
  } = orderApi.useGetOrderQuery(id!, {skip: (id === 'new')});

  useEffect(() => {
    order && dispatch(setFirstOrderState(order));
  }, [isGetSuccess]);

  useEffect(() => {
    if (isPutError || isPostError || isDeleteError) {
      navigate('/admin/error');
    }
  }, [isPutError, isPostError, isDeleteError]);

  useEffect(() => {
    if (isPutSuccess || isPostSuccess || isDeleteSuccess) {
      setShowAlert(true);
      isDeleteSuccess && setMessage('Заказ удален');
      setTimeout(() => {
        navigate('/admin/order');
      }, 2000);
    }
  }, [isPutSuccess, isPostSuccess, isDeleteSuccess]);

  useEffect(() => {
    dispatch(setNewIgnoredFields(
      ['isFullTank', 'isNeedChildChair', 'isRightWheel', 'categoryId'],
    ));
    return () => {
      dispatch(clearOrderState());
      dispatch(clearIgnoredFields());
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
      header={'Карточка заказа'}
      subtitle={'Настройка заказа'}
      leftSide={<OrderLeft order={orderForm!} />}
      rightSide={<OrderRight order={orderForm!}/>}
      accept={() => id === 'new' ? postOrder(orderForm): putOrder({id: id!, body: orderForm})}
      acceptLoading={!!(isPutLoading || isPostLoading)}
      isAcceptable={getPercent(orderForm!, ignoredFields) === 100}
      remove={() => deleteOrder(id!)}
      removeLoading={!!isDeleteLoading}
      successText={message}
      showAlert={showAlert}
    />
  );
}

export default Order;
