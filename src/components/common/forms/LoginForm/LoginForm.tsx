import React from 'react';
import {
  Box, Button, FormControl, FormLabel, OutlinedInput, Typography,
} from '@mui/material';
import {
  loginForm, loginFormButton, loginFormField,
  loginFormFields, loginFormFooter, loginFormLink, loginFormTitle,
} from './LoginFormStyle';
import CustomLink from '../../Link/CustomLink';
import {useNavigate} from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  return (
    <Box component="form" sx={loginForm}>
      <Box sx={loginFormTitle}>
        <Typography variant={'h3'}>Вход</Typography>
      </Box>
      <Box sx={loginFormFields}>
        <FormControl sx={loginFormField} fullWidth>
          <FormLabel htmlFor="email">Почта</FormLabel>
          <OutlinedInput
            id="email"
            type={'email'}
            required
            placeholder={'Введите Email...'}
            color={'secondary'}
          />
        </FormControl>
        <FormControl sx={loginFormField} fullWidth>
          <FormLabel htmlFor="password">Пароль</FormLabel>
          <OutlinedInput
            id="password"
            type={'password'}
            required
            placeholder={'Введите пароль...'}
          />
        </FormControl>
        <Box sx={loginFormFooter}>
          <CustomLink
            sx={loginFormLink}
          >
            Запросить доступ
          </CustomLink>
          <Button
            variant="contained"
            color={'secondary'}
            sx={loginFormButton}
            onClick={() => navigate('/admin')}
          >
            Войти
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginForm;
