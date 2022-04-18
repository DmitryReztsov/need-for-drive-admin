import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import Container from '../../../common/containers/Container/Container';
import {
  errorPage, errorPageBody, errorPageButton, errorPageCode, errorPageText, errorPageTitle,
} from './ErrorPageStyle';

function ErrorPage() {
  return (
    <Box sx={errorPage}>
      <Container>
        <Box sx={errorPageBody}>
          <Typography sx={errorPageCode} color={'grey.300'}>
            500
          </Typography>
          <Typography variant={'h1'} sx={errorPageTitle}>
            Что то пошло не так
          </Typography>
          <Typography sx={errorPageText} color={'grey.700'}>
            Попробуйте перезагрузить страницу
          </Typography>
          <Button
            variant="contained"
            color={'secondary'}
            sx={errorPageButton}
            onClick={() => window.history.back()}
          >
            Назад
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default ErrorPage;
