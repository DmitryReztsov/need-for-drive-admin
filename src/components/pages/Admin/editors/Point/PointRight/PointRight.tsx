import React from 'react';
import {IPoint} from '../../../../../../models/IPoint';
import {Box} from '@mui/material';
import TextInput from '../../../../../common/inputs/TextInput/TextInput';
import {setPointField} from '../../../../../../store/slices/editSlices/point/pointSlice';
import {useAppDispatch} from '../../../../../../hooks/reduxHooks';
import {pointRight} from './PointRightStyle';
import AutocompleteInput from '../../../../../common/inputs/AutocompleteInput/AutocompleteInput';
import {cityApi} from '../../../../../../services/endpoints/city';

interface IPointRight {
  point: IPoint,
}

function PointRight({point}: IPointRight) {
  const dispatch = useAppDispatch();
  const {data: cities} = cityApi.useGetCitiesQuery({limit: 0});
  const {cityId, name, address} = point;

  return (
    <Box sx={pointRight}>
      <Box>
        <AutocompleteInput
          id="cityId"
          label={'Город*'}
          value={cityId}
          options={(cities?.data || [])}
          action={setPointField}
          required
          clearOnEscape
          fullWidth
          autoFocus
          placeholder={'Выберите город...'}
        />
        <TextInput
          id='address'
          label={'Адрес пункта*'}
          value={address}
          change={(e) => dispatch(setPointField(['address', e.target.value]))}
          required
          placeholder={'Введите адрес...'}
          fullWidth
        />
      </Box>
      <Box>
        <TextInput
          id='name'
          label={'Название пункта*'}
          value={name}
          change={(e) => dispatch(setPointField(['name', e.target.value]))}
          required
          placeholder={'Введите название...'}
          autoFocus
          fullWidth
        />
      </Box>
    </Box>
  );
}

export default PointRight;
