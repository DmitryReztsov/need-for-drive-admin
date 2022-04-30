import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Page from '../../../../page/Page';
import {getPages} from '../../../../../utils/getPages';
import {IPointQueryParams, pointApi} from '../../../../../services/endpoints/points';
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
    data, isLoading: pointLoading, error: pointError,
  } = pointApi.useGetPointsQuery({page: page - 1, ...queryParams});
  const {data: dataCities} = cityApi.useGetCitiesQuery({});
  const {cityId} = useAppSelector((state) => state.filterReducer);

  const filters: IFilter [] = [
    {
      id: 'cityId',
      value: cityId,
      all: initialState.cityId,
      cb: (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter(['cityId', e.target.value]));
      },
      data: dataCities?.cities || [],
    },
  ];

  function applyFilters() {
    setQueryParams(useSetParams(filters));
    setPage(1);
  }

  if (pointError) {
    navigate('admin/error');
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
      pages={getPages(data?.count)}
      apply={applyFilters}
      reset={() => dispatch(clearFilters())}
      dataLoading={pointLoading}
      array={data?.points || []}
      listHeaders={['Название', 'Город', 'Улица']}
    >
      {(data?.points || []).map((point) => <PointItem point={point} key={point.id} />)}
    </Page>
  );
}

export default Points;
