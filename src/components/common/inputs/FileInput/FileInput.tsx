import React from 'react';
import {Button, ButtonGroup, FormLabel, OutlinedInput} from '@mui/material';
import {fileInput, fileInputLeftButton, fileInputRightButton} from './FileInputStyle';

interface IFileInput {
  change: (e:React.ChangeEvent<HTMLInputElement>) => void,
  accept?: string,
  placeholder?: string,
}

function FileInput({change, accept, placeholder}: IFileInput) {
  return (
    <FormLabel
      htmlFor="file"
      sx={fileInput}
    >
      <ButtonGroup
        variant="outlined"
      >
        <Button
          variant="outlined"
          component="span"
          sx={fileInputLeftButton}
        >
          {placeholder || 'Выберите файл...'}
        </Button>
        <OutlinedInput
          id="file"
          type={'file'}
          inputProps={{accept}}
          required
          sx={{display: 'none'}}
          onChange={change}
        />
        <Button
          variant="outlined"
          component="span"
          sx={fileInputRightButton}
        >
          Обзор
        </Button>
      </ButtonGroup>
    </FormLabel>
  );
}

export default FileInput;
