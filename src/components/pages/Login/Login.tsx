import React from 'react';
import Title from '../../common/Title/Title';
import LoginForm from '../../common/forms/LoginForm/LoginForm';
import {Box} from '@mui/material';
import {login, loginBody, loginFormContainer, loginTitle} from './LoginStyle';

function Login() {
  return (
    <Box sx={login}>
      <Box sx={loginBody}>
        <Box sx={loginTitle}>
          <Title />
        </Box>
        <Box sx={loginFormContainer}>
          <LoginForm />
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
