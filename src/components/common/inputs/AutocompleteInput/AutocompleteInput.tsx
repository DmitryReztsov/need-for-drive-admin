import React, {useState} from 'react';
import {
  Autocomplete, FormControl, FormHelperText, FormLabel,
  TextField, Typography,
} from '@mui/material';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';
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
  error?: any,
  options: any [],
  action: (payload: IDataField) => any,
  optionKey?: string,
  loading?: boolean,
  helperText?: string,
}

function AutocompleteInput(
  {
    sx, id, value, label, type,
    placeholder, fullWidth, required, autoFocus, clearOnEscape,
    error, options, action, optionKey = 'name', loading, helperText,
  }: IAutocompleteInput) {
  const dispatch = useAppDispatch();
  return (
    <FormControl fullWidth={fullWidth} sx={{...sx}} error={!!error}>
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
              onMouseDown={() => {
                dispatch(action([id, option]));
              }}
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
      {!!error && helperText &&
      <FormHelperText error>
        {helperText}
      </FormHelperText>
      }
    </FormControl>
  );
}

export default AutocompleteInput;
