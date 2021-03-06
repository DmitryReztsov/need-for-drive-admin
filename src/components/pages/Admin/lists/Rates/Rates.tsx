import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {rateApi} from '../../../../../services/endpoints/rate';
import Page from '../../../../page/Page';
import {getPages} from '../../../../../utils/getPages';
import RateItem from './RateItem/RateItem';
import {useAppDispatch, useAppSelector} from '../../../../../hooks/reduxHooks';
import {IFilter} from '../../../../../models/IFilter';
import {
  clearFilters, initialState, setFilter,
} from '../../../../../store/slices/filter/filterSlice';
import useSetParams from '../../../../../hooks/useSetParams';
import {rateTypeApi} from '../../../../../services/endpoints/rateType';
import {IPointQueryParams} from '../../../../../services/endpoints/point';

function Rates() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const [queryParams, setQueryParams] = useState<Void<IPointQueryParams>>();
  const {
    data: rates, isLoading: rateLoading, error: rateError,
  } = rateApi.useGetRatesQuery({page: page - 1, ...queryParams});
  const {data: rateTypes} = rateTypeApi.useGetRateTypesQuery({});
  const {rateTypeId} = useAppSelector((state) => state.filterReducer);

  const filters: IFilter [] = [
    {
      id: 'rateTypeId',
      value: rateTypeId,
      all: initialState.rateTypeId,
      cb: (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter(['rateTypeId', e.target.value]));
      },
      data: rateTypes?.data || [],
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

  if (rateError) {
    navigate('admin/error');
  }

  useEffect(() => {
    return () => {
      dispatch(clearFilters());
    };
  }, []);

  if (rateError) {
    navigate('/admin/error');
  }

  return (
    <Page
      header={'Тарифы'}
      filters={filters}
      page={page}
      setPage={setPage}
      pages={getPages(rates?.count)}
      apply={applyFilters}
      reset={resetFilters}
      dataLoading={rateLoading}
      array={rates?.data || []}
      listHeaders={['Тип тарифа', 'Стоимость']}
    >
      {(rates?.data || [])
        .map((rate) => <RateItem rate={rate} key={rate.id} />)}
    </Page>
  );
}

export default Rates;
