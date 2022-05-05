import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import useSetParams from '../../../../../hooks/useSetParams';
import Page from '../../../../page/Page';
import {useAppDispatch, useAppSelector} from '../../../../../hooks/reduxHooks';
import {
  clearFilters, initialState, setFilter,
} from '../../../../../store/slices/filter/filterSlice';
import {carApi} from '../../../../../services/endpoints/car';
import {categoryApi} from '../../../../../services/endpoints/category';
import {IOrderQueryParams} from '../../../../../services/endpoints/order';
import {IFilter} from '../../../../../models/IFilter';
import CarItem from './CarItem/CarItem';
import {getPages} from '../../../../../utils/getPages';
import {carsHeaders} from './CarsStyle';
import {useMediaQuery} from '@mui/material';

function Cars() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [queryParams, setQueryParams] = useState<Void<IOrderQueryParams>>();
  const [page, setPage] = useState<number>(1);
  const {
    data: cars, isLoading: carLoading, error: carError,
  } = carApi.useGetCarsQuery({page: page - 1, ...queryParams});
  const {data: categories} = categoryApi.useGetCategoriesQuery({});
  const {categoryId, colors} = useAppSelector((state) => state.filterReducer);
  const match = useMediaQuery('(max-width:1280px)');
  const listHeaders = !match ?
    ['Название / тип / описание', 'Запас топлива / номер', 'Цвета', 'Цена мин / макс', ''] :
    [];

  const filters: IFilter [] = [
    {
      id: 'categoryId',
      value: categoryId,
      all: initialState.categoryId,
      cb: (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter(['categoryId', e.target.value]));
      },
      data: categories?.data || [],
    },
    {
      id: 'colors',
      value: colors,
      all: initialState.colors,
      cb: (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter(['colors', e.target.value]));
      },
      data: ['Белый', 'Черный', 'Красный', 'Синий', 'Зеленый', 'Оранжевый'],
    },
  ];

  function applyFilters() {
    setQueryParams(useSetParams(filters));
    setPage(1);
  }

  function resetFilters() {
    dispatch(clearFilters());
    setQueryParams();
    setPage(1);
  }

  if (carError) {
    navigate('/admin/error');
  }

  useEffect(() => {
    return () => {
      dispatch(clearFilters());
    };
  }, []);

  return (
    <Page
      header={'Список авто'}
      filters={filters}
      page={page}
      setPage={setPage}
      pages={getPages(cars?.count)}
      apply={applyFilters}
      reset={resetFilters}
      dataLoading={carLoading}
      array={cars?.data || []}
      listHeaders={listHeaders}
      headersStyle={carsHeaders}
    >
      {(cars?.data || []).map((car) => <CarItem car={car} key={car.id} />)}
    </Page>
  );
}

export default Cars;
