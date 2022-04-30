import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {cityApi} from '../../../../../services/endpoints/city';
import Page from '../../../../page/Page';
import CityItem from './CityItem/CityItem';
import {getPages} from '../../../../../utils/getPages';


function Cities() {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const {
    data, isLoading: cityLoading, error: cityError,
  } = cityApi.useGetCitiesQuery({page: page - 1});

  if (cityError) {
    navigate('admin/error');
  }

  return (
    <Page
      header={'Список городов'}
      page={page}
      setPage={setPage}
      pages={getPages(data?.count)}
      dataLoading={cityLoading}
      array={data?.cities || []}
      listHeaders={['Город']}
    >
      {(data?.cities || []).map((city) => <CityItem city={city} key={city.id} />)}
    </Page>
  );
}

export default Cities;
