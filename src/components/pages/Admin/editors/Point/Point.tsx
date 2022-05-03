import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../../../hooks/reduxHooks';
import {
  clearPointState, setFirstPointState,
} from '../../../../../store/slices/editSlices/point/pointSlice';
import {Skeleton} from '@mui/material';
import EditPage from '../../../../editPage/EditPage';
import PointLeft from '../Point/PointLeft/PointLeft';
import PointRight from '../Point/PointRight/PointRight';
import {getPercent} from '../../../../../utils/getPercent';
import {pointApi} from '../../../../../services/endpoints/point';

function Point() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const [
    putPoint, {isLoading: isPutLoading, isSuccess: isPutSuccess, isError: isPutError},
  ] = pointApi.usePutPointMutation();
  const [
    postPoint, {isLoading: isPostLoading, isSuccess: isPostSuccess, isError: isPostError},
  ] = pointApi.usePostPointMutation();
  const [
    deletePoint,
    {isLoading: isDeleteLoading, isSuccess: isDeleteSuccess, isError: isDeleteError},
  ] = pointApi.useDeletePointMutation();
  const pointForm = useAppSelector((state) => state.pointReducer);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('Пункт выдачи сохранен');
  const {
    data: point, isLoading: isGetLoading, isSuccess: isGetSuccess, error: isGetError,
  } = pointApi.useGetPointQuery(id!, {skip: (id === 'new')});

  useEffect(() => {
    point && dispatch(setFirstPointState(point));
  }, [isGetSuccess]);

  useEffect(() => {
    if (isPutError || isPostError || isDeleteError) {
      navigate('/admin/error');
    }
  }, [isPutError, isPostError, isDeleteError]);

  useEffect(() => {
    if (isPutSuccess || isPostSuccess || isDeleteSuccess) {
      setShowAlert(true);
      isDeleteSuccess && setMessage('Пункт выдачи удален');
      setTimeout(() => {
        navigate('/admin/point');
      }, 2000);
    }
  }, [isPutSuccess, isPostSuccess, isDeleteSuccess]);

  useEffect(() => {
    return () => {
      dispatch(clearPointState());
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
      header={'Карточка пункта выдачи'}
      subtitle={'Настройка пункта выдачи'}
      leftSide={<PointLeft point={pointForm!} />}
      rightSide={<PointRight point={pointForm!}/>}
      accept={() => id === 'new' ?
        postPoint(pointForm):
        putPoint({id: id!, body: pointForm})}
      acceptLoading={!!(isPutLoading || isPostLoading)}
      isAcceptable={getPercent(pointForm!) === 100}
      remove={() => deletePoint(id!)}
      removeLoading={!!isDeleteLoading}
      successText={message}
      showAlert={showAlert}
    />
  );
}

export default Point;
