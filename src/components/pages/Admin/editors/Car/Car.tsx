import React from 'react';
import EditPage from '../../../../editPage/EditPage';
import CarLeft from './CarLeft/CarLeft';
import CarRight from './CarRight/CarRight';
import {useNavigate, useParams} from 'react-router-dom';
import {carApi} from '../../../../../services/endpoints/car';
import {Skeleton} from '@mui/material';

function Car() {
  const navigate = useNavigate();
  const {id} = useParams();
  const {data: car, isLoading, error} = carApi.useGetCarQuery(id!);

  if (error) {
    navigate('admin/error');
  }

  if (isLoading) {
    return <Skeleton variant="rectangular" animation="wave" width={'100%'} height={200} />;
  }

  return (
    <EditPage
      header={'Карточка автомобиля'}
      subtitle={'Настройка автомобиля'}
      leftSide={<CarLeft car={car!} />}
      rightSide={<CarRight car={car!}/>}
    />
  );
}

export default Car;
