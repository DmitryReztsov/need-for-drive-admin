import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Page from '../../../../page/Page';
import {getPages} from '../../../../../utils/getPages';
import {rateTypeApi} from '../../../../../services/endpoints/rateType';
import RateTypeItem from './RateTypeItem/RateTypeItem';

function RateTypes() {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const {
    data: rateTypes, isLoading: rateTypeLoading, error: rateTypeError,
  } = rateTypeApi.useGetRateTypesQuery({page: page - 1});

  if (rateTypeError) {
    navigate('/admin/error');
  }

  return (
    <Page
      header={'Типы тарифов'}
      page={page}
      setPage={setPage}
      pages={getPages(rateTypes?.count)}
      dataLoading={rateTypeLoading}
      array={rateTypes?.data || []}
      listHeaders={['Название', 'Время']}
    >
      {(rateTypes?.data || [])
        .map((rateType) => <RateTypeItem rateType={rateType} key={rateType.id} />)}
    </Page>
  );
}

export default RateTypes;
