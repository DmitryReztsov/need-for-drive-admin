import React from 'react';
import {Alert, AlertColor, Snackbar} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import {snack, snackAlert} from './SnackStyle';

interface ISnack {
  show: boolean,
  severity?: AlertColor,
  text: string,
}

function Snack({show, severity = 'success', text}: ISnack) {
  return (
    <Snackbar
      open={show}
      sx={snack}
    >
      <Alert
        severity={severity}
        sx={snackAlert}
        icon={<DoneIcon />}
      >
        Успех! {text}
      </Alert>
    </Snackbar>
  );
}

export default Snack;
