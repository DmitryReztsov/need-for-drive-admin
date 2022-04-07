import React, {ReactComponentElement} from 'react';
import {Box, Link} from '@mui/material';
import {navBarContent, navBarItem} from './NavBarItemStyle';

interface INavBarItemProps {
  component: ReactComponentElement<any>,
  children: React.ReactNode
}

function NavBarItem({component, children}: INavBarItemProps) {
  return (
    <Link
      sx={navBarItem}
      underline="none"
      color={'text.primary'}
    >
      <Box sx={navBarContent}>
        {component}
        {children}
      </Box>
    </Link>
  );
}

export default NavBarItem;
