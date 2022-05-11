import React from 'react';
import {Box, Button} from '@mui/material';
import {
  editPageRightButtons, editPageRightButtonsGroup,
} from './EditPageRightButtonsStyle';
import {useParams} from 'react-router-dom';
import {LoadingButton} from '@mui/lab';
import {useAppSelector} from '../../../../hooks/reduxHooks';

interface IEditPageRightButtonsProps {
  accept: (e: React.MouseEvent<HTMLButtonElement>) => void,
  remove: (e: React.MouseEvent<HTMLButtonElement>) => void,
  acceptLoading: boolean,
  removeLoading: boolean,
  isAcceptable: boolean,
}

function EditPageRightButtons(
  {
    accept, remove, acceptLoading, removeLoading, isAcceptable,
  }: IEditPageRightButtonsProps,
) {
  const {id} = useParams();
  const ignoredFields = useAppSelector((state) => state.ignoredFieldsReducer);
  return (
    <Box sx={editPageRightButtons}>
      <Box sx={editPageRightButtonsGroup}>
        <LoadingButton
          variant="contained"
          onClick={accept}
          loading={acceptLoading}
          disabled={!isAcceptable}
        >
          Сохранить
        </LoadingButton>
        <Button
          variant="contained"
          color={'secondary'}
          onClick={() => window.history.back()}
        >
          Отменить
        </Button>
      </Box>
      <LoadingButton
        variant="contained"
        color={'error'}
        onClick={remove}
        disabled={id === 'new'}
        loading={removeLoading}
      >
        Удалить
      </LoadingButton>
    </Box>
  );
}

export default EditPageRightButtons;
