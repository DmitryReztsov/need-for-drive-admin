import React from 'react';
import {Box, Button} from '@mui/material';
import {editPageRightButtons, editPageRightButtonsGroup} from './EditPageRightButtonsStyle';

function EditPageRightButtons() {
  return (
    <Box sx={editPageRightButtons}>
      <Box sx={editPageRightButtonsGroup}>
        <Button
          variant="contained"
        >
          Сохранить
        </Button>
        <Button
          variant="contained"
          color={'secondary'}
        >
          Отменить
        </Button>
      </Box>
      <Button
        variant="contained"
        color={'error'}
      >
        Удалить
      </Button>
    </Box>
  );
}

export default EditPageRightButtons;
