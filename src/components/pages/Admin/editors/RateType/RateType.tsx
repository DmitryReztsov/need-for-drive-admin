import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../../../hooks/reduxHooks';
import {rateTypeApi} from '../../../../../services/endpoints/rateType';
import {
  clearRateTypeState, setFirstRateTypeState,
} from '../../../../../store/slices/editSlices/rateType/rateTypeSlice';
import {Skeleton} from '@mui/material';
import EditPage from '../../../../editPage/EditPage';
import RateTypeRight from '../RateType/RateTypeRight/RateTypeRight';
import {getPercent} from '../../../../../utils/getPercent';
import RateTypeLeft from './RateTypeLeft/RateTypeLeft';

function RateType() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const [
    putRateType, {isLoading: isPutLoading, isSuccess: isPutSuccess, isError: isPutError},
  ] = rateTypeApi.usePutRateTypeMutation();
  const [
    postRateType, {isLoading: isPostLoading, isSuccess: isPostSuccess, isError: isPostError},
  ] = rateTypeApi.usePostRateTypeMutation();
  const [
    deleteRateType,
    {isLoading: isDeleteLoading, isSuccess: isDeleteSuccess, isError: isDeleteError},
  ] = rateTypeApi.useDeleteRateTypeMutation();
  const rateTypeForm = useAppSelector((state) => state.rateTypeReducer);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('Тип тарифа сохранен');
  const {
    data: rateType, isLoading: isGetLoading, isSuccess: isGetSuccess, error: isGetError,
  } = rateTypeApi.useGetRateTypeQuery(id!, {skip: (id === 'new')});

  useEffect(() => {
    rateType && dispatch(setFirstRateTypeState(rateType));
  }, [isGetSuccess]);

  useEffect(() => {
    if (isPutError || isPostError || isDeleteError) {
      navigate('/admin/error');
    }
  }, [isPutError, isPostError, isDeleteError]);

  useEffect(() => {
    if (isPutSuccess || isPostSuccess || isDeleteSuccess) {
      setShowAlert(true);
      isDeleteSuccess && setMessage('Тип тарифа удален');
      setTimeout(() => {
        navigate('/admin/rateType');
      }, 2000);
    }
  }, [isPutSuccess, isPostSuccess, isDeleteSuccess]);

  useEffect(() => {
    return () => {
      dispatch(clearRateTypeState());
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
      header={'Карточка типа тарифа'}
      subtitle={'Настройка типа тарифа'}
      leftSide={<RateTypeLeft rateType={rateTypeForm!} />}
      rightSide={<RateTypeRight rateType={rateTypeForm!}/>}
      accept={() => id === 'new' ?
        postRateType(rateTypeForm):
        putRateType({id: id!, body: rateTypeForm})}
      acceptLoading={!!(isPutLoading || isPostLoading)}
      isAcceptable={getPercent(rateTypeForm!) === 100}
      remove={() => deleteRateType(id!)}
      removeLoading={!!isDeleteLoading}
      successText={message}
      showAlert={showAlert}
    />
  );
}

export default RateType;
