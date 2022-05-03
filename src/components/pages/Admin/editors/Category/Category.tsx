import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../../../hooks/reduxHooks';
import {categoryApi} from '../../../../../services/endpoints/category';
import {
  clearCategoryState, setFirstCategoryState,
} from '../../../../../store/slices/editSlices/category/categorySlice';
import {Skeleton} from '@mui/material';
import EditPage from '../../../../editPage/EditPage';
import CategoryLeft from '../Category/CategoryLeft/CategoryLeft';
import CategoryRight from '../Category/CategoryRight/CategoryRight';
import {getPercent} from '../../../../../utils/getPercent';

function Category() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const [
    putCategory, {isLoading: isPutLoading, isSuccess: isPutSuccess, isError: isPutError},
  ] = categoryApi.usePutCategoryMutation();
  const [
    postCategory, {isLoading: isPostLoading, isSuccess: isPostSuccess, isError: isPostError},
  ] = categoryApi.usePostCategoryMutation();
  const [
    deleteCategory,
    {isLoading: isDeleteLoading, isSuccess: isDeleteSuccess, isError: isDeleteError},
  ] = categoryApi.useDeleteCategoryMutation();
  const categoryForm = useAppSelector((state) => state.categoryReducer);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('Категория сохранена');
  const {
    data: category, isLoading: isGetLoading, isSuccess: isGetSuccess, error: isGetError,
  } = categoryApi.useGetCategoryQuery(id!, {skip: (id === 'new')});

  useEffect(() => {
    category && dispatch(setFirstCategoryState(category));
  }, [isGetSuccess]);

  useEffect(() => {
    if (isPutError || isPostError || isDeleteError) {
      navigate('/admin/error');
    }
  }, [isPutError, isPostError, isDeleteError]);

  useEffect(() => {
    if (isPutSuccess || isPostSuccess || isDeleteSuccess) {
      setShowAlert(true);
      isDeleteSuccess && setMessage('Категория удалена');
      setTimeout(() => {
        navigate('/admin/category');
      }, 2000);
    }
  }, [isPutSuccess, isPostSuccess, isDeleteSuccess]);

  useEffect(() => {
    return () => {
      dispatch(clearCategoryState());
    };
  }, []);

  if (isGetLoading) {
    return <Skeleton variant="rectangular" animation="wave" width={'100%'} height={200} />;
  }

  if (isGetError && !isDeleteSuccess) {
    navigate('/admin/error');
  }

  return (
    <EditPage
      header={'Карточка категории'}
      subtitle={'Настройка категории'}
      leftSide={<CategoryLeft category={categoryForm!} />}
      rightSide={<CategoryRight category={categoryForm!}/>}
      accept={() => id === 'new' ?
        postCategory(categoryForm):
        putCategory({id: id!, body: categoryForm})}
      acceptLoading={!!(isPutLoading || isPostLoading)}
      isAcceptable={getPercent(categoryForm!) === 100}
      remove={() => deleteCategory(id!)}
      removeLoading={!!isDeleteLoading}
      successText={message}
      showAlert={showAlert}
    />
  );
}

export default Category;
