import React from 'react';
import {Button, ButtonGroup, FormLabel, OutlinedInput} from '@mui/material';
import {fileInput, fileInputLeftButton, fileInputRightButton} from './FileInputStyle';

function FileInput() {
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
          Выберите файл...
        </Button>
        <OutlinedInput
          id="file"
          type={'file'}
          required
          sx={{display: 'none'}}
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
