import React from 'react';
import {Button, ButtonGroup} from '@mui/material';
import {Check} from '@mui/icons-material';
import ClearIcon from '@mui/icons-material/Clear';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {itemButtons} from './ItemButtonsStyle';

function ItemButtons() {
  return (
    <ButtonGroup variant="outlined" sx={itemButtons}>
      <Button
        startIcon={<Check color={'primary'} />}
        color={'secondary'}>
        Готово
      </Button>
      <Button
        startIcon={<ClearIcon color={'error'} />}
        color={'secondary'}>
        Отмена
      </Button>
      <Button
        startIcon={<MoreVertIcon />}
        color={'secondary'}>
        Изменить
      </Button>
    </ButtonGroup>
  );
}

export default ItemButtons;
