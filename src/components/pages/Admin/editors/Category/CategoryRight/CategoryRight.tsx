import React from 'react';
import {ICategory} from '../../../../../../models/ICategory';
import {Box} from '@mui/material';
import TextInput from '../../../../../common/inputs/TextInput/TextInput';
import {setCategoryField} from '../../../../../../store/slices/editSlices/category/categorySlice';
import {useAppDispatch} from '../../../../../../hooks/reduxHooks';
import {categoryRight} from './CategoryRightStyle';

interface ICategoryRight {
  category: ICategory,
}

function CategoryRight({category}: ICategoryRight) {
  const dispatch = useAppDispatch();
  const {name, description} = category;

  return (
    <Box sx={categoryRight}>
      <Box>
        <TextInput
          id='name'
          label={'Название категории*'}
          value={name}
          change={(e) => dispatch(setCategoryField(['name', e.target.value]))}
          required
          placeholder={'Введите название...'}
          autoFocus
          fullWidth
        />
        <TextInput
          id='description'
          label={'Описание категории*'}
          value={description}
          change={(e) => dispatch(setCategoryField(['description', e.target.value]))}
          required
          placeholder={'Введите описание...'}
          fullWidth
        />
      </Box>
    </Box>
  );
}

export default CategoryRight;
