import React from 'react';
import {Button, ButtonGroup, CircularProgress} from '@mui/material';
import {Check} from '@mui/icons-material';
import ClearIcon from '@mui/icons-material/Clear';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {itemButtons, itemButtonsLoading} from './OrderItemButtonsStyle';
import {useNavigate} from 'react-router-dom';
import {IOrder} from '../../../../../../../models/IOrder';

interface IOrderItemButtons {
  order: IOrder,
  accept: (e: React.MouseEvent<HTMLButtonElement>) => void,
  deny: (e: React.MouseEvent<HTMLButtonElement>) => void,
  loading: boolean,
}

function OrderItemButtons({order, accept, deny, loading}: IOrderItemButtons) {
  const {id} = order;
  const navigate = useNavigate();
  return (
    <ButtonGroup variant="outlined" sx={itemButtons}>
      <Button
        startIcon={<Check color={'primary'} />}
        color={'secondary'}
        onClick={accept}
        disabled={loading}
      >
        {loading ? <CircularProgress size={15} /> : 'Готово'}
      </Button>
      <Button
        startIcon={<ClearIcon color={'error'} />}
        color={'secondary'}
        onClick={deny}
        disabled={loading}
      >
        {loading ? <CircularProgress size={15} /> : 'Отмена'}
      </Button>
      <Button
        startIcon={<MoreVertIcon />}
        color={'secondary'}
        onClick={() => navigate(id)}
        disabled={loading}
      >
        {loading ? <CircularProgress size={15} /> : 'Изменить'}
      </Button>
    </ButtonGroup>
  );
}

export default OrderItemButtons;
