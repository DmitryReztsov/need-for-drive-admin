import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../../../hooks/reduxHooks';
import {cityApi} from '../../../../../services/endpoints/city';
import {
  clearCityState, setFirstCityState,
} from '../../../../../store/slices/editSlices/city/citySlice';
import {Skeleton} from '@mui/material';
import EditPage from '../../../../editPage/EditPage';
import {getPercent} from '../../../../../utils/getPercent';
import CityLeft from './CityLeft/CityLeft';
import CityRight from './CityRight/CityRight';

function City() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const ignoredFields = useAppSelector((state) => state.ignoredFieldsReducer);
  const [
    putCity, {isLoading: isPutLoading, isSuccess: isPutSuccess, isError: isPutError},
  ] = cityApi.usePutCityMutation();
  const [
    postCity, {isLoading: isPostLoading, isSuccess: isPostSuccess, isError: isPostError},
  ] = cityApi.usePostCityMutation();
  const [
    deleteCity, {isLoading: isDeleteLoading, isSuccess: isDeleteSuccess, isError: isDeleteError},
  ] = cityApi.useDeleteCityMutation();
  const cityForm = useAppSelector((state) => state.cityReducer);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('Город сохранен');
  const {
    data: city, isLoading: isGetLoading, isSuccess: isGetSuccess, error: isGetError,
  } = cityApi.useGetCityQuery(id!, {skip: (id === 'new')});

  useEffect(() => {
    city && dispatch(setFirstCityState(city));
  }, [isGetSuccess]);

  useEffect(() => {
    if (isPutError || isPostError || isDeleteError) {
      navigate('/admin/error');
    }
  }, [isPutError, isPostError, isDeleteError]);

  useEffect(() => {
    if (isPutSuccess || isPostSuccess || isDeleteSuccess) {
      setShowAlert(true);
      isDeleteSuccess && setMessage('Город удален');
      setTimeout(() => {
        navigate('/admin/city');
      }, 2000);
    }
  }, [isPutSuccess, isPostSuccess, isDeleteSuccess]);

  useEffect(() => {
    return () => {
      dispatch(clearCityState());
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
      header={'Карточка города'}
      subtitle={'Настройка города'}
      leftSide={<CityLeft city={cityForm!} />}
      rightSide={<CityRight city={cityForm!}/>}
      accept={() => id === 'new' ? postCity(cityForm): putCity({id: id!, body: cityForm})}
      acceptLoading={!!(isPutLoading || isPostLoading)}
      isAcceptable={getPercent(cityForm!, ignoredFields) === 100}
      remove={() => deleteCity(id!)}
      removeLoading={!!isDeleteLoading}
      successText={message}
      showAlert={showAlert}
    />
  );
}

export default City;
