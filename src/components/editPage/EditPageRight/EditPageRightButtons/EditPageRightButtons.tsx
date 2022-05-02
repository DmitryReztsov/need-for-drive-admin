import React from 'react';
import {Box, Button} from '@mui/material';
import {
  editPageRightButtons, editPageRightButtonsGroup,
} from './EditPageRightButtonsStyle';
import {useParams} from 'react-router-dom';

interface IEditPageRightButtonsProps {
  accept: (e: React.MouseEvent<HTMLButtonElement>) => void,
  remove: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

function EditPageRightButtons({accept, remove}: IEditPageRightButtonsProps) {
  const {id} = useParams();
  return (
    <Box sx={editPageRightButtons}>
      <Box sx={editPageRightButtonsGroup}>
        <Button
          variant="contained"
          onClick={accept}
        >
          Сохранить
        </Button>
        <Button
          variant="contained"
          color={'secondary'}
          onClick={() => window.history.back()}
        >
          Отменить
        </Button>
      </Box>
      <Button
        variant="contained"
        color={'error'}
        onClick={remove}
        disabled={id === 'new'}
      >
        Удалить
      </Button>
    </Box>
  );
}

export default EditPageRightButtons;
