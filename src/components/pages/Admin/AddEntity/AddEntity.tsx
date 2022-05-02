import React from 'react';
import Container from '../../../common/containers/Container/Container';
import PageHeader from '../../../page/PageHeader/PageHeader';
import {Box, Paper} from '@mui/material';
import {addEntity, addEntityBody} from './AddEntityStyle';
import {entityList} from './entityList';
import {useNavigate} from 'react-router-dom';

function AddEntity() {
  const navigate = useNavigate();
  return (
    <Box sx={addEntity}>
      <Container>
        <PageHeader>
          Новая сущность
        </PageHeader>
        <Box sx={addEntityBody}>
          {entityList.map(({text, entity}) => {
            return (
              <Paper
                key={text}
                onClick={() => navigate(`/admin/${entity}/new`)}
              >
                {text}
              </Paper>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

export default AddEntity;
