import React, {useEffect, useState} from 'react';
import EditPage from '../../../../editPage/EditPage';
import CarLeft from './CarLeft/CarLeft';
import CarRight from './CarRight/CarRight';
import {useNavigate, useParams} from 'react-router-dom';
import {carApi} from '../../../../../services/endpoints/car';
import {Skeleton} from '@mui/material';
import {useAppDispatch, useAppSelector} from '../../../../../hooks/reduxHooks';
import {clearCarState, setFirstCarState} from '../../../../../store/slices/editSlices/car/carSlice';
import {getPercent} from '../../../../../utils/getPercent';

function Car() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const [
    putCar, {isLoading: isPutLoading, isSuccess: isPutSuccess, isError: isPutError},
  ] = carApi.usePutCarMutation();
  const [
    postCar, {isLoading: isPostLoading, isSuccess: isPostSuccess, isError: isPostError},
  ] = carApi.usePostCarMutation();
  const [
    deleteCar, {isLoading: isDeleteLoading, isSuccess: isDeleteSuccess, isError: isDeleteError},
  ] = carApi.useDeleteCarMutation();
  const carForm = useAppSelector((state) => state.carReducer);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('Машина сохранена');
  const {
    data: car, isLoading: isGetLoading, isSuccess: isGetSuccess, error: isGetError,
  } = carApi.useGetCarQuery(id!, {skip: (id === 'new')});

  useEffect(() => {
    car && dispatch(setFirstCarState(car));
  }, [isGetSuccess]);

  useEffect(() => {
    if (isPutError || isPostError || isDeleteError) {
      navigate('/admin/error');
    }
  }, [isPutError, isPostError, isDeleteError]);

  useEffect(() => {
    if (isPutSuccess || isPostSuccess || isDeleteSuccess) {
      setShowAlert(true);
      isDeleteSuccess && setMessage('Машина удалена');
      setTimeout(() => {
        navigate('/admin/car');
      }, 2000);
    }
  }, [isPutSuccess, isPostSuccess, isDeleteSuccess]);

  useEffect(() => {
    return () => {
      dispatch(clearCarState());
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
      header={'Карточка автомобиля'}
      subtitle={'Настройка автомобиля'}
      leftSide={<CarLeft car={carForm!} />}
      rightSide={<CarRight car={carForm!}/>}
      accept={() => id === 'new' ? postCar(carForm): putCar({id: id!, body: carForm})}
      acceptLoading={!!(isPutLoading || isPostLoading)}
      isAcceptable={getPercent(carForm!) === 100}
      remove={() => deleteCar(id!)}
      removeLoading={!!isDeleteLoading}
      successText={message}
      showAlert={showAlert}
    />
  );
}

export default Car;
