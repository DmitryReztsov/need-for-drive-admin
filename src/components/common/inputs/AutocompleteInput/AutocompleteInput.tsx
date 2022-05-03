import React from 'react';
import {
  Autocomplete, FormControl, FormLabel,
  TextField, Typography,
} from '@mui/material';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {SerializedError} from '@reduxjs/toolkit';
import {IDataField} from '../../../../models/IDataField';
import {useAppDispatch} from '../../../../hooks/reduxHooks';
import {autocompleteInput, autocompleteInputLi} from './AutocompleteInputStyle';

interface IAutocompleteInput {
  sx?: SxProps<Theme>,
  id: string,
  value: any,
  label?: string,
  type?: string,
  placeholder?: string,
  fullWidth?: boolean,
  required?: boolean,
  autoFocus?: boolean,
  clearOnEscape?: boolean,
  error?: FetchBaseQueryError | SerializedError,
  options: any [],
  action: (payload: IDataField) => any,
  optionKey?: string,
  loading?: boolean,
}

function AutocompleteInput(
  {
    sx, id, value, label, type,
    placeholder, fullWidth, required, autoFocus, clearOnEscape,
    error, options, action, optionKey = 'name', loading,
  }: IAutocompleteInput) {
  const dispatch = useAppDispatch();
  return (
    <FormControl fullWidth={fullWidth} sx={{...sx}}>
      <FormLabel htmlFor={id}>
        {label}
      </FormLabel>
      <Autocomplete
        sx={autocompleteInput}
        id={id}
        options={options}
        value={value}
        clearOnEscape={clearOnEscape}
        loading={loading}
        isOptionEqualToValue={(option, value) => option[optionKey] === value[optionKey]}
        getOptionLabel={(option) => option ? option[optionKey].toString() : ''}
        renderOption={({}, option) => {
          return (
            <Typography
              component="li"
              key={option.id}
              onClick={() => dispatch(action([id, option]))}
              noWrap
              sx={autocompleteInputLi}
            >
              {option ? option[optionKey] : ''}
            </Typography>
          );
        }}
        renderInput={(params) => {
          return <TextField
            {...params}
            type={type ? type : 'text'}
            placeholder={placeholder}
            label={label}
            autoFocus={autoFocus}
            required={required}
            error={!!error}
          />;
        }}
      />
    </FormControl>
  );
}

export default AutocompleteInput;
