import React, {useEffect} from 'react';
import EditPage from '../../../../editPage/EditPage';
import CarLeft from './CarLeft/CarLeft';
import CarRight from './CarRight/CarRight';
import {useNavigate, useParams} from 'react-router-dom';
import {carApi} from '../../../../../services/endpoints/car';
import {Skeleton} from '@mui/material';
import {useAppDispatch, useAppSelector} from '../../../../../hooks/reduxHooks';
import {setFirstCarState} from '../../../../../store/slices/editSlices/car/carSlice';

function Car() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const {data: car, isLoading, error} = carApi.useGetCarQuery(id!);
  const carForm = useAppSelector((state) => state.carReducer);

  useEffect(() => {
    car && dispatch(setFirstCarState(car));
  }, [car]);

  if (isLoading) {
    return <Skeleton variant="rectangular" animation="wave" width={'100%'} height={200} />;
  }

  if (error) {
    navigate('admin/error');
  }

  return (
    <EditPage
      header={'Карточка автомобиля'}
      subtitle={'Настройка автомобиля'}
      leftSide={<CarLeft car={carForm!} />}
      rightSide={<CarRight car={carForm!}/>}
    />
  );
}

export default Car;
