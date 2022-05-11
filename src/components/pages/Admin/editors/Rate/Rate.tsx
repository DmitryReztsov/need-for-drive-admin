import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../../../hooks/reduxHooks';
import {rateApi} from '../../../../../services/endpoints/rate';
import {
  clearRateState, setFirstRateState,
} from '../../../../../store/slices/editSlices/rate/rateSlice';
import {Skeleton} from '@mui/material';
import EditPage from '../../../../editPage/EditPage';
import RateRight from '../Rate/RateRight/RateRight';
import {getPercent} from '../../../../../utils/getPercent';
import RateLeft from './RateLeft/RateLeft';

function Rate() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const ignoredFields = useAppSelector((state) => state.ignoredFieldsReducer);
  const [
    putRate, {isLoading: isPutLoading, isSuccess: isPutSuccess, isError: isPutError},
  ] = rateApi.usePutRateMutation();
  const [
    postRate, {isLoading: isPostLoading, isSuccess: isPostSuccess, isError: isPostError},
  ] = rateApi.usePostRateMutation();
  const [
    deleteRate,
    {isLoading: isDeleteLoading, isSuccess: isDeleteSuccess, isError: isDeleteError},
  ] = rateApi.useDeleteRateMutation();
  const rateForm = useAppSelector((state) => state.rateReducer);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('Тариф сохранен');
  const {
    data: rate, isLoading: isGetLoading, isSuccess: isGetSuccess, error: isGetError,
  } = rateApi.useGetRateQuery(id!, {skip: (id === 'new')});

  useEffect(() => {
    rate && dispatch(setFirstRateState(rate));
  }, [isGetSuccess]);

  useEffect(() => {
    if (isPutError || isPostError || isDeleteError) {
      navigate('/admin/error');
    }
  }, [isPutError, isPostError, isDeleteError]);

  useEffect(() => {
    if (isPutSuccess || isPostSuccess || isDeleteSuccess) {
      setShowAlert(true);
      isDeleteSuccess && setMessage('Тариф удален');
      setTimeout(() => {
        navigate('/admin/rate');
      }, 2000);
    }
  }, [isPutSuccess, isPostSuccess, isDeleteSuccess]);

  useEffect(() => {
    return () => {
      dispatch(clearRateState());
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
      header={'Карточка тарифа'}
      subtitle={'Настройка тарифа'}
      leftSide={<RateLeft rate={rateForm!} />}
      rightSide={<RateRight rate={rateForm!}/>}
      accept={() => id === 'new' ?
        postRate(rateForm):
        putRate({id: id!, body: rateForm})}
      acceptLoading={!!(isPutLoading || isPostLoading)}
      isAcceptable={getPercent(rateForm!, ignoredFields) === 100}
      remove={() => deleteRate(id!)}
      removeLoading={!!isDeleteLoading}
      successText={message}
      showAlert={showAlert}
    />
  );
}

export default Rate;
