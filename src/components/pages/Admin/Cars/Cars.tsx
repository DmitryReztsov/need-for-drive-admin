import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import useFilter from '../../../../hooks/useFilter';
import Page from '../../../page/Page';
import {IFilter} from '../Orders/Orders';
import {useAppDispatch, useAppSelector} from '../../../../hooks/reduxHooks';
import {clearFilters, initialState, setFilter} from '../../../../store/slices/filter/filterSlice';
import CarData from './Car/CarData/CarData';
import {ICar} from '../../../../models/ICar';
import {carApi} from '../../../../services/endpoints/car';
import {categoryApi} from '../../../../services/endpoints/category';

function Cars() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {data: cars, isLoading: carLoading, error: carError} = carApi.useGetCarsQuery();
  const {data: categories} = categoryApi.useGetCategoriesQuery();
  const {category, color} = useAppSelector((state) => state.filterReducer);
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [filteredArray, setFilteredArray] = useState<ICar[]>([]);

  const filters: IFilter [] = [
    {
      id: 'categoryId',
      value: category,
      all: initialState.category,
      cb: (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter(['category', e.target.value]));
      },
      data: categories || [],
    },
    {
      id: 'color',
      value: color,
      all: initialState.color,
      cb: (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter(['color', e.target.value]));
      },
      data: ['Белый', 'Черный', 'Красный', 'Синий', 'Зеленый', 'Оранжевый'],
    },
  ];

  function applyFilters() {
    cars && setFilteredArray(useFilter(cars, filters));
    setActiveIndex(1);
  }

  function resetFilters() {
    dispatch(clearFilters());
  }

  useEffect(() => {
    cars && setFilteredArray(useFilter(cars, filters));
    setActiveIndex(1);
  }, [cars]);

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
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      pages={Math.ceil(filteredArray?.length / 5) || 1}
      apply={applyFilters}
      reset={resetFilters}
      dataLoading={carLoading}
      filteredArray={filteredArray}
    >
      <CarData cars={filteredArray} activeIndex={activeIndex} />
    </Page>
  );
}

export default Cars;
