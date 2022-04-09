import React from 'react';
import {Outlet} from 'react-router-dom';
import {Box} from '@mui/material';
import {
  adminLayoutMain, adminLayoutNavBar, adminLayoutStyle, adminLayoutWindow,
} from './AdminLayoutStyle';
import NavBar from '../common/Navbar/NavBar';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';

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
