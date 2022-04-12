import React, {ReactComponentElement} from 'react';
import {Box, Link} from '@mui/material';
import {navBarContent, navBarItem} from './NavBarItemStyle';

interface INavBarItemProps {
  component: ReactComponentElement<any>,
  children: React.ReactNode,
  href?: string,
  close?: () => void,
}

function NavBarItem({component, children, href, close}: INavBarItemProps) {
  return (
    <Link
      sx={navBarItem}
      underline="none"
      color={'text.primary'}
      href={href || ''}
      onClick={close}
    >
      <Box sx={navBarContent}>
        {component}
        {children}
      </Box>
    </Link>
  );
}

export default NavBarItem;
