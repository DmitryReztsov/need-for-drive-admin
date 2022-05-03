import React from 'react';
import {ICity} from '../../../../../../models/ICity';
import {Box} from '@mui/material';
import TextInput from '../../../../../common/inputs/TextInput/TextInput';
import {setCityField} from '../../../../../../store/slices/editSlices/city/citySlice';
import {useAppDispatch} from '../../../../../../hooks/reduxHooks';
import {cityRight} from './CityRightStyle';

interface ICityRight {
  city: ICity,
}

function CityRight({city}: ICityRight) {
  const dispatch = useAppDispatch();
  const {name} = city;

  return (
    <Box sx={cityRight}>
      <Box>
        <TextInput
          id='name'
          label={'Название города*'}
          value={name}
          change={(e) => dispatch(setCityField(['name', e.target.value]))}
          required
          placeholder={'Введите город...'}
          autoFocus
          fullWidth
        />
      </Box>
    </Box>
  );
}

export default CityRight;
