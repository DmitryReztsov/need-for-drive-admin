import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Page from '../../../../page/Page';
import {getPages} from '../../../../../utils/getPages';
import {IPointQueryParams, pointApi} from '../../../../../services/endpoints/point';
import PointItem from './PointItem/PointItem';
import {
  clearFilters, initialState, setFilter,
} from '../../../../../store/slices/filter/filterSlice';
import {useAppDispatch, useAppSelector} from '../../../../../hooks/reduxHooks';
import {IFilter} from '../../../../../models/IFilter';
import {cityApi} from '../../../../../services/endpoints/city';
import useSetParams from '../../../../../hooks/useSetParams';

function Points() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const [queryParams, setQueryParams] = useState<Void<IPointQueryParams>>();
  const {
    data: points, isLoading: pointLoading, error: pointError,
  } = pointApi.useGetPointsQuery({page: page - 1, ...queryParams});
  const {data: cities} = cityApi.useGetCitiesQuery({});
  const {cityId} = useAppSelector((state) => state.filterReducer);

  const filters: IFilter [] = [
    {
      id: 'cityId',
      value: cityId,
      all: initialState.cityId,
      cb: (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter(['cityId', e.target.value]));
      },
      data: cities?.data || [],
    },
  ];

  function applyFilters() {
    setQueryParams(useSetParams(filters));
    setPage(1);
  }

  if (pointError) {
    navigate('/admin/error');
  }

  useEffect(() => {
    return () => {
      dispatch(clearFilters());
    };
  }, []);
  return (
    <Page
      header={'Список пунктов выдачи'}
      filters={filters}
      page={page}
      setPage={setPage}
      pages={getPages(points?.count)}
      apply={applyFilters}
      reset={() => dispatch(clearFilters())}
      dataLoading={pointLoading}
      array={points?.data || []}
      listHeaders={['Название', 'Город', 'Улица']}
    >
      {(points?.data || []).map((point) => <PointItem point={point} key={point.id} />)}
    </Page>
  );
}

export default Points;
