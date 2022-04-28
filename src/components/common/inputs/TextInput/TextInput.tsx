import React from 'react';
import {Box, Button, FormControl, FormLabel, OutlinedInput} from '@mui/material';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {SerializedError} from '@reduxjs/toolkit';
import AddIcon from '@mui/icons-material/Add';
import {button, container, input} from './TextInputStyle';

interface ITextInput {
  sx?: SxProps<Theme>,
  id: string,
  value: any,
  label?: string,
  type?: string,
  placeholder?: string,
  fullWidth?: boolean,
  required?: boolean,
  autoFocus?: boolean,
  addButton?: boolean,
  multiline?: boolean,
  change: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
  error?: FetchBaseQueryError | SerializedError,
}

function TextInput(
  {
    sx, id, value, label, type,
    placeholder, fullWidth, required, autoFocus,
    addButton, multiline, change, error,
  }: ITextInput) {
  return (
    <FormControl fullWidth={fullWidth} sx={{...sx}}>
      <FormLabel htmlFor={id}>
        {label}
      </FormLabel>
      <Box sx={container}>
        <OutlinedInput
          sx={input}
          id={id}
          type={type ? type : 'text'}
          value={value}
          placeholder={placeholder}
          required={required}
          autoFocus={autoFocus}
          multiline={multiline}
          onChange={change}
          error={!!error}
        />
        {addButton &&
        <Button
          sx={button}
          variant={'outlined'}
        >
          <AddIcon/>
        </Button>}
      </Box>
    </FormControl>
  );
}

export default TextInput;
