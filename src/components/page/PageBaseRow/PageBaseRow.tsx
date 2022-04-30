import React from 'react';
import {Box, Button} from '@mui/material';
import {pageBaseRow} from './PageBaseRowStyle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useNavigate} from 'react-router-dom';

interface IPageBaseRow {
  children: React.ReactNode,
  id: string,
}

function PageBaseRow({children, id}: IPageBaseRow) {
  const navigate = useNavigate();
  return (
    <Box sx={pageBaseRow} key={id}>
      {children}
      <Button
        startIcon={<MoreVertIcon />}
        color={'secondary'}
        variant={'outlined'}
        onClick={() => navigate(id)}
      >
        Изменить
      </Button>
    </Box>
  );
}

export default PageBaseRow;
