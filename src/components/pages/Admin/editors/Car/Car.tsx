import React, {useEffect} from 'react';
import EditPage from '../../../../editPage/EditPage';
import CarLeft from './CarLeft/CarLeft';
import CarRight from './CarRight/CarRight';
import {useNavigate, useParams} from 'react-router-dom';
import {carApi} from '../../../../../services/endpoints/car';
import {Skeleton} from '@mui/material';
import {useAppDispatch, useAppSelector} from '../../../../../hooks/reduxHooks';
import {clearCarState, setFirstCarState} from '../../../../../store/slices/editSlices/car/carSlice';

function Car() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const {data: car, isLoading: isGetLoading, error: isGetError} = carApi.useGetCarQuery(id!);
  const [putCar, {isLoading: isPutLoading, isError: isPutError}] = carApi.usePutCarMutation();
  const [postCar, {isLoading: isPostLoading, isError: isPostError}] = carApi.usePostCarMutation();
  const [
    deleteCar, {isLoading: isDeleteLoading, isError: isDeleteError},
  ] = carApi.useDeleteCarMutation();
  const carForm = useAppSelector((state) => state.carReducer);

  function acceptHandler() {
    id === 'new' ? postCar(carForm) : putCar({id: id!, body: carForm});
  }

  function deleteHandler() {
    deleteCar(id!);
    navigate('/admin/car');
  }

  useEffect(() => {
    if (id !== 'new') {
      car && dispatch(setFirstCarState(car));
    }
  }, [car]);

  useEffect(() => {
    return () => {
      dispatch(clearCarState());
    };
  }, []);

  if (isGetLoading) {
    return <Skeleton variant="rectangular" animation="wave" width={'100%'} height={200} />;
  }

  if ((isGetError || isPutError) && (id !== 'new')) {
    navigate('/admin/error');
  }

  return (
    <EditPage
      header={'Карточка автомобиля'}
      subtitle={'Настройка автомобиля'}
      leftSide={<CarLeft car={carForm!} />}
      rightSide={<CarRight car={carForm!}/>}
      accept={acceptHandler}
      remove={deleteHandler}
    />
  );
}

export default Car;
