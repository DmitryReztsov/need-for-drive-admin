import React from 'react';
import {IRate} from '../../../../../../models/IRate';
import {Box} from '@mui/material';
import TextInput from '../../../../../common/inputs/TextInput/TextInput';
import {setRateField} from '../../../../../../store/slices/editSlices/rate/rateSlice';
import {useAppDispatch} from '../../../../../../hooks/reduxHooks';
import {rateRight} from './RateRightStyle';
import AutocompleteInput from '../../../../../common/inputs/AutocompleteInput/AutocompleteInput';
import {rateTypeApi} from '../../../../../../services/endpoints/rateType';

interface IRateRight {
  rate: IRate,
}

function RateRight({rate}: IRateRight) {
  const dispatch = useAppDispatch();
  const {data: rateTypes} = rateTypeApi.useGetRateTypesQuery({limit: 0});
  const {rateTypeId, price} = rate;

  return (
    <Box sx={rateRight}>
      <Box>
        <TextInput
          id='price'
          label={'Стоимость тарифа*'}
          value={price}
          change={(e) => dispatch(setRateField(['price', e.target.value]))}
          required
          placeholder={'Введите стоимость...'}
          autoFocus
          fullWidth
        />
        <AutocompleteInput
          id="rateTypeId"
          label={'Тип тарифа*'}
          value={rateTypeId}
          options={(rateTypes?.data || [])}
          action={setRateField}
          required
          clearOnEscape
          fullWidth
        />
      </Box>
    </Box>
  );
}

export default RateRight;
