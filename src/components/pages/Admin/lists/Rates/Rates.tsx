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
import {IPointQueryParams} from '../../../../../services/endpoints/points';

function Rates() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const [queryParams, setQueryParams] = useState<Void<IPointQueryParams>>();
  const {
    data, isLoading: rateLoading, error: rateError,
  } = rateApi.useGetRatesQuery({page: page - 1, ...queryParams});
  const {data: dataRateTypes} = rateTypeApi.useGetRateTypesQuery({});
  const {rateTypeId} = useAppSelector((state) => state.filterReducer);

  const filters: IFilter [] = [
    {
      id: 'rateTypeId',
      value: rateTypeId,
      all: initialState.rateTypeId,
      cb: (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter(['rateTypeId', e.target.value]));
      },
      data: dataRateTypes?.rateTypes || [],
    },
  ];

  function applyFilters() {
    setQueryParams(useSetParams(filters));
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
    navigate('admin/error');
  }

  return (
    <Page
      header={'Тарифы'}
      filters={filters}
      page={page}
      setPage={setPage}
      pages={getPages(data?.count)}
      apply={applyFilters}
      reset={() => dispatch(clearFilters())}
      dataLoading={rateLoading}
      array={data?.rates || []}
      listHeaders={['Тип тарифа', 'Стоимость']}
    >
      {(data?.rates || [])
        .map((rate) => <RateItem rate={rate} key={rate.id} />)}
    </Page>
  );
}

export default Rates;
