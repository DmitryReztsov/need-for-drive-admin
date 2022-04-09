import React from 'react';
import {Box, Typography} from '@mui/material';
import Container from '../../Container/Container';
import {
  footer, footerBody, footerCopyright, footerMenu,
} from './FooterStyle';
import CustomLink from '../Link/CustomLink';

function Footer() {
  return (
    <Box component={'footer'} sx={footer}>
      <Container>
        <Box sx={footerBody}>
          <Box sx={footerMenu}>
            <CustomLink href={'/#/admin'}>
              Главная страница
            </CustomLink>
            <CustomLink>
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
