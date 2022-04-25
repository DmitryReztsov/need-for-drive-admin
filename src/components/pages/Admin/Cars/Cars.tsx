import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import useSetParams from '../../../../hooks/useSetParams';
import Page from '../../../page/Page';
import {IFilter} from '../Orders/Orders';
import {useAppDispatch, useAppSelector} from '../../../../hooks/reduxHooks';
import {clearFilters, initialState, setFilter} from '../../../../store/slices/filter/filterSlice';
import {carApi} from '../../../../services/endpoints/car';
import {categoryApi} from '../../../../services/endpoints/category';
import {IOrderQueryParams, orderApi} from '../../../../services/endpoints/order';
import CarData from './CarData/CarData';

function Cars() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [queryParams, setQueryParams] = useState<Void<IOrderQueryParams>>();
  const [page, setPage] = useState<number>(1);
  const {
    data, isLoading: carLoading, error: carError,
  } = carApi.useGetCarsQuery({page, ...queryParams});
  const {data: categories} = categoryApi.useGetCategoriesQuery();
  const {categoryId, colors} = useAppSelector((state) => state.filterReducer);


  const filters: IFilter [] = [
    {
      id: 'categoryId',
      value: categoryId,
      all: initialState.categoryId,
      cb: (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter(['categoryId', e.target.value]));
      },
      data: categories || [],
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
  }

  if (carError) {
    navigate('admin/error');
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
      pages={Math.trunc((data?.count || 1) / 5)}
      apply={applyFilters}
      reset={resetFilters}
      dataLoading={carLoading}
      array={data?.cars || []}
    >
      <CarData cars={data?.cars || []}/>
    </Page>
  );
}

export default Cars;
