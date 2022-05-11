import React from 'react';
import PageBaseRow from '../../../../../page/PageBaseRow/PageBaseRow';
import {Typography} from '@mui/material';
import {IPoint} from '../../../../../../models/IPoint';

interface IPointProps {
  point: IPoint,
}

function PointItem({point}: IPointProps) {
  const {id, name, cityId, address} = point;
  return (
    <PageBaseRow id={id}>
      <Typography>
        {name || 'Неизвестный пункт'}
      </Typography>
      <Typography>
        {cityId ? cityId?.name : 'Неизвестный город'}
      </Typography>
      <Typography>
        {address || 'Неизвестный адрес'}
      </Typography>
    </PageBaseRow>
  );
}

export default PointItem;
