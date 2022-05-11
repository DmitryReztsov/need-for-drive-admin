import React from 'react';
import {FormControl, FormLabel, TextField} from '@mui/material';
import {DateTimePicker} from '@mui/lab';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';
import {IDataField} from '../../../../models/IDataField';
import {useAppDispatch} from '../../../../hooks/reduxHooks';

interface IDateInput {
  sx?: SxProps<Theme>,
  id: string,
  value: any,
  label?: string,
  fullWidth?: boolean,
  required?: boolean,
  action: (payload: IDataField) => any,
  loading?: boolean,
  minDate?: number,
}

function DateInput({sx, id, value, label, fullWidth, required, action, minDate}: IDateInput) {
  const dispatch = useAppDispatch();
  return (
    <FormControl fullWidth={fullWidth} sx={{...sx}}>
      <FormLabel htmlFor={id}>
        {label}
      </FormLabel>
      <DateTimePicker
        value={value}
        minDate={minDate}
        inputFormat={'dd.MM.yyyy k:mm'}
        onChange={(newValue) => dispatch(action([id, +newValue]))}
        renderInput={(params) => <TextField id={id} required={required} {...params} />}
      />
    </FormControl>

  );
}

export default DateInput;
