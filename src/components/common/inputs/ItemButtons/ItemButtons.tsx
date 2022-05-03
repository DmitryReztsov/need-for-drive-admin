import React from 'react';
import {Button, ButtonGroup} from '@mui/material';
import {Check} from '@mui/icons-material';
import ClearIcon from '@mui/icons-material/Clear';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {itemButtons} from './ItemButtonsStyle';
import {useNavigate} from 'react-router-dom';

interface IItemButtons {
  id: string,
}

function ItemButtons({id}: IItemButtons) {
  const navigate = useNavigate();
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
        color={'secondary'}
        onClick={() => navigate(id)}
      >
        Изменить
      </Button>
    </ButtonGroup>
  );
}

export default ItemButtons;
