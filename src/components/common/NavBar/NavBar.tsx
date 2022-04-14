import React from 'react';
import {Box, Stack} from '@mui/material';
import Title from '../Title/Title';
import {navBar, navBarTitle, navBarTitleStyles} from './NavBarStyle';
import NavBarItem from './NavBarItem/NavBarItem';
import {navItems} from './navBarItems';


interface INavBarProps {
  close?: () => void,
}

function NavBar({close}: INavBarProps) {
  return (
    <Box sx={navBar}>
      <Box sx={navBarTitle}>
        <Title sx={navBarTitleStyles}>
          Need for car
        </Title>
      </Box>
      <Stack>
        {navItems.map((item) => {
          return <NavBarItem
            component={<item.icon />}
            key={item.text}
            href={item.href}
            close={close}
          >
            {item.text}
          </NavBarItem>;
        })}
      </Stack>
    </Box>
  );
}

export default NavBar;
