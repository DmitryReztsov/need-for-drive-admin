import React from 'react';
import {Box, Typography} from '@mui/material';
import Container from '../containers/Container/Container';
import {
  footer, footerBody, footerCopyright, footerMenu,
} from './FooterStyle';
import CustomLink from '../Link/CustomLink';
import {deleteStorageTokenData, getToken} from '../../../utils/localStorage';
import {authApi} from '../../../services/endpoints/auth';

function Footer() {
  const [authLogout, {}] = authApi.useAuthLogoutMutation();

  function clickHandler() {
    authLogout(getToken()!);
    deleteStorageTokenData();
  }

  return (
    <Box component={'footer'} sx={footer}>
      <Container>
        <Box sx={footerBody}>
          <Box sx={footerMenu}>
            <CustomLink href={'admin'}>
              Главная страница
            </CustomLink>
            <CustomLink click={clickHandler}>
              Ссылка
            </CustomLink>
          </Box>
          <Typography sx={footerCopyright}>
            Copyright © 2020 Simbirsoft
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
