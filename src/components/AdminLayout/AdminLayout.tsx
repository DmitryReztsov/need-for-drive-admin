import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';
import NavBar from '../common/NavBar/NavBar';
import {Box} from '@mui/material';
import {
  adminLayoutMain, adminLayoutNavBar, adminLayoutStyle, adminLayoutWindow,
} from './AdminLayoutStyle';

function AdminLayout() {
  return (
    <Box sx={adminLayoutStyle}>
      <Box sx={adminLayoutNavBar}>
        <NavBar />
      </Box>
      <Box sx={adminLayoutWindow}>
        <Header />
        <Box component={'main'} sx={adminLayoutMain}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default AdminLayout;
