import React from 'react';
import {Box, Stack} from '@mui/material';
import Title from '../Title/Title';
import {navBar, navBarTitle, navBarTitleStyles} from './NavBarStyles';
import {ReactComponent as BlogIcon} from '../../../content/svg/icons/blog-icon.svg';
import {ReactComponent as BlogPostsIcon} from '../../../content/svg/icons/blog-posts-icon.svg';
import NavBarItem from './NavBarItem/NavBarItem';

function NavBar() {
  return (
    <Box sx={navBar}>
      <Box sx={navBarTitle}>
        <Title sx={navBarTitleStyles}>
          Need for car
        </Title>
      </Box>
      <Stack>
        <NavBarItem component={<BlogIcon />}>
          Карточка автомобиля
        </NavBarItem>
        <NavBarItem component={<BlogPostsIcon />}>
          Список авто
        </NavBarItem>
      </Stack>
    </Box>
  );
}

export default NavBar;
