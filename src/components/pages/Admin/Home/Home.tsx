import React from 'react';
import {Box, Typography} from '@mui/material';
import {home, homeBody, homeText, homeTitle} from './HomeStyle';
import Container from '../../../common/containers/Container/Container';

function Home() {
  return (
    <Box sx={home}>
      <Container>
        <Box sx={homeBody}>
          <Typography variant={'h1'} sx={homeTitle}>
            Добро пожаловать в Need for car!
          </Typography>
          <Typography sx={homeText}>
            Выбери раздел в меню слева для начала работы
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
