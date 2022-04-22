import React, {useEffect, useState} from 'react';
import {
  Box, Button, FormControl, FormLabel, OutlinedInput, Typography,
} from '@mui/material';
import {
  loginForm, loginFormButton, loginFormErrorText, loginFormField,
  loginFormFields, loginFormFooter, loginFormLink, loginFormTitle,
} from './LoginFormStyle';
import CustomLink from '../../Link/CustomLink';
import {useNavigate} from 'react-router-dom';
import {setStorageTokenData} from '../../../../utils/localStorage';
import {authApi} from '../../../../services/endpoints/auth';

function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [authLogin, {data, error}] = authApi.useAuthLoginMutation();

  async function clickHandler() {
    await authLogin({username, password});
  }

  useEffect(() => {
    if (data) {
      setStorageTokenData(data);
      navigate('/admin');
    }
  }, [data]);
  return (
    <Box component="form" sx={loginForm}>
      <Box sx={loginFormTitle}>
        <Typography variant={'h3'}>Вход</Typography>
      </Box>
      <Box sx={loginFormFields}>
        {error && <Typography
          color={'error'}
          sx={loginFormErrorText}
        >
          Неправильный логин/пароль
        </Typography>}
        <FormControl sx={loginFormField} fullWidth>
          <FormLabel htmlFor="email">Почта</FormLabel>
          <OutlinedInput
            id="email"
            type={'email'}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            error={!!error}
            placeholder={'Введите Email...'}
            color={'secondary'}
            fullWidth
            autoFocus
          />
        </FormControl>
        <FormControl sx={loginFormField} fullWidth>
          <FormLabel htmlFor="password">Пароль</FormLabel>
          <OutlinedInput
            id="password"
            type={'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            error={!!error}
            placeholder={'Введите пароль...'}
            fullWidth
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
            onClick={clickHandler}
          >
            Войти
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginForm;
