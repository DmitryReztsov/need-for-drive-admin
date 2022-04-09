import React from 'react';
import {Box, Typography} from '@mui/material';
import {home, homeBody} from './HomeStyle';
import Container from '../../Container/Container';

function Home() {
  return (
    <Box sx={home}>
      <Container>
        <Box sx={homeBody}>
          <Typography variant={'h1'}>
            Добро пожаловать в Need for car!
          </Typography>
          <Typography>
            Выбери раздел в меню слева для начала работы
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
