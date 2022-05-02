import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Page from '../../../../page/Page';
import {getPages} from '../../../../../utils/getPages';
import {categoryApi} from '../../../../../services/endpoints/category';
import CategoryItem from './RateTypeItem/CategoryItem';

function Categories() {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const {
    data: categories, isLoading: categoryLoading, error: categoryError,
  } = categoryApi.useGetCategoriesQuery({page: page - 1});

  if (categoryError) {
    navigate('/admin/error');
  }

  return (
    <Page
      header={'Типы тарифов'}
      page={page}
      setPage={setPage}
      pages={getPages(categories?.count)}
      dataLoading={categoryLoading}
      array={categories?.data || []}
      listHeaders={['Название', 'Описание']}
    >
      {(categories?.data || [])
        .map((category) => <CategoryItem category={category} key={category.id} />)}
    </Page>
  );
}

export default Categories;
