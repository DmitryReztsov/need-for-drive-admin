import React from 'react';
import {Autocomplete, FormControl, FormLabel, OutlinedInput, TextField} from '@mui/material';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {SerializedError} from '@reduxjs/toolkit';

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
  change: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
  error?: FetchBaseQueryError | SerializedError,
  options: any [],
}

function AutocompleteInput(
  {
    sx, id, value, label, type,
    placeholder, fullWidth, required, autoFocus, clearOnEscape,
    change, error, options,
  }: IAutocompleteInput) {
  return (
    <FormControl fullWidth={fullWidth} sx={{...sx}}>
      <FormLabel htmlFor={id}>
        {label}
      </FormLabel>
      <Autocomplete
        id={id}
        options={options}
        value={value}
        clearOnEscape={clearOnEscape}
        renderInput={(params) => {
          return <TextField
            {...params}
            type={type ? type : 'text'}
            placeholder={placeholder}
            label={label}
            autoFocus={autoFocus}
            required={required}
            onChange={change}
            error={!!error}
          />;
        }}
      />
    </FormControl>
  );
}

export default AutocompleteInput;
