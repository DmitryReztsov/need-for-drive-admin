import React, {useEffect, useState} from 'react';
import {
  Box, Typography,
} from '@mui/material';
import {
  loginForm, loginFormErrorText, loginFormField,
  loginFormFields, loginFormFooter, loginFormLink, loginFormTitle,
} from './LoginFormStyle';
import CustomLink from '../../Link/CustomLink';
import {useNavigate} from 'react-router-dom';
import {deleteStorageTokenData, setStorageTokenData} from '../../../../utils/localStorage';
import {authApi} from '../../../../services/endpoints/auth';
import TextInput from '../../inputs/TextInput/TextInput';
import {LoadingButton} from '@mui/lab';

function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [authLogin, {data, isLoading, isError}] = authApi.useAuthLoginMutation();

  useEffect(() => {
    deleteStorageTokenData();
  }, []);
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
        {isError && <Typography
          color={'error'}
          sx={loginFormErrorText}
        >
          Неправильный логин/пароль
        </Typography>}
        <TextInput
          sx={loginFormField}
          id='email'
          type={'email'}
          label={'Почта'}
          value={username}
          change={(e) => setUsername(e.target.value)}
          required
          error={!!isError}
          placeholder={'Введите Email...'}
          autoFocus
          fullWidth
        />
        <TextInput
          sx={loginFormField}
          id='password'
          type={'password'}
          label={'Пароль'}
          value={password}
          change={(e) => setPassword(e.target.value)}
          required
          error={!!isError}
          placeholder={'Введите пароль...'}
          fullWidth
        />
        <Box sx={loginFormFooter}>
          <CustomLink
            sx={loginFormLink}
          >
            Запросить доступ
          </CustomLink>
          <LoadingButton
            variant="contained"
            color={'primary'}
            onClick={() => authLogin({username, password})}
            loading={isLoading}
          >
            Войти
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginForm;
