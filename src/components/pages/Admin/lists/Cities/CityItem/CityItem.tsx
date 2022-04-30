import {ICity} from '../../../../../../models/ICity';
import {Typography} from '@mui/material';
import React from 'react';
import PageBaseRow from '../../../../../page/PageBaseRow/PageBaseRow';

interface ICityItemProps {
  city: ICity,
}

function CityItem({city}: ICityItemProps) {
  const {id, name} = city;
  return (
    <PageBaseRow id={id}>
      <Typography>
        {name}
      </Typography>
    </PageBaseRow>
  );
}

export default CityItem;
