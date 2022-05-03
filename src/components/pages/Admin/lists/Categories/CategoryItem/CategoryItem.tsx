import React from 'react';
import PageBaseRow from '../../../../../page/PageBaseRow/PageBaseRow';
import {Typography} from '@mui/material';
import {ICategory} from '../../../../../../models/ICategory';

interface ICategoryItemProps {
  category: ICategory,
}

function CategoryItem({category}: ICategoryItemProps) {
  const {id, name, description} = category;
  return (
    <PageBaseRow id={id}>
      <Typography>
        {name}
      </Typography>
      <Typography>
        {description}
      </Typography>
    </PageBaseRow>
  );
}

export default CategoryItem;
