import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';
import {Box, SwipeableDrawer, useMediaQuery} from '@mui/material';
import {
  adminLayoutMain, adminLayoutNavBar, adminLayoutStyle, adminLayoutWindow,
} from './AdminLayoutStyle';
import NavBar from '../common/Navbar/NavBar';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';

function AdminLayout() {
  const [opened, setOpened] = useState<boolean>(false);
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <Box sx={adminLayoutStyle}>
      {matches ?
        <SwipeableDrawer
          open={opened}
          anchor={'left'}
          onClose={() => setOpened(false)}
          onOpen={() => setOpened(true)}
        >
          <Box sx={adminLayoutNavBar}>
            <NavBar close={() => setOpened(false)} />
          </Box>
        </SwipeableDrawer> :
        <Box sx={adminLayoutNavBar}>
          <NavBar />
        </Box>
      }
      <Box sx={adminLayoutWindow}>
        <Header openMenu={() => setOpened(true)} />
        <Box component={'main'} sx={adminLayoutMain}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default AdminLayout;
