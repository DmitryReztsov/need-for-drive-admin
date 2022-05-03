import React from 'react';
import {IRateType} from '../../../../../../models/IRateType';
import {Box} from '@mui/material';
import TextInput from '../../../../../common/inputs/TextInput/TextInput';
import {setRateTypeField} from '../../../../../../store/slices/editSlices/rateType/rateTypeSlice';
import {useAppDispatch} from '../../../../../../hooks/reduxHooks';
import {rateTypeRight} from './RateTypeRightStyle';

interface IRateTypeRight {
  rateType: IRateType,
}

function RateTypeRight({rateType}: IRateTypeRight) {
  const dispatch = useAppDispatch();
  const {name, unit} = rateType;

  return (
    <Box sx={rateTypeRight}>
      <Box>
        <TextInput
          id='name'
          label={'Название типа тарифа*'}
          value={name}
          change={(e) => dispatch(setRateTypeField(['name', e.target.value]))}
          required
          placeholder={'Введите название...'}
          autoFocus
          fullWidth
        />
        <TextInput
          id='unit'
          label={'Длительность тарифа*'}
          value={unit}
          change={(e) => dispatch(setRateTypeField(['unit', e.target.value]))}
          required
          placeholder={'Введите длительность...'}
          fullWidth
        />
      </Box>
    </Box>
  );
}

export default RateTypeRight;
