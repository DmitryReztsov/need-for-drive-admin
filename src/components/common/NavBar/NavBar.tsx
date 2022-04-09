import React from 'react';
import {Box, Fade, Stack} from '@mui/material';
import Title from '../Title/Title';
import {navBar, navBarTitle, navBarTitleStyles} from './NavBarStyle';
import {ReactComponent as BlogIcon} from '../../../content/svg/icons/blog-icon.svg';
import {ReactComponent as BlogPostsIcon} from '../../../content/svg/icons/blog-posts-icon.svg';
import {ReactComponent as PostIcon} from '../../../content/svg/icons/post-icon.svg';
import {ReactComponent as OverviewIcon} from '../../../content/svg/icons/overview-icon.svg';
import {ReactComponent as FormsIcon} from '../../../content/svg/icons/forms-n-components-icon.svg';
import {ReactComponent as PersonIcon} from '../../../content/svg/icons/person-icon.svg';
import {ReactComponent as ErrorIcon} from '../../../content/svg/icons/error-icon.svg';
import NavBarItem from './NavBarItem/NavBarItem';

const navItems = [
  {
    icon: <BlogIcon />,
    text: 'Карточка автомобиля',
  },
  {
    icon: <BlogPostsIcon />,
    text: 'Список авто',
  },
  {
    icon: <PostIcon />,
    text: 'Заказы',
  },
  {
    icon: <OverviewIcon />,
    text: 'Menu 4',
  },
  {
    icon: <FormsIcon />,
    text: 'Menu 5',
  },
  {
    icon: <PersonIcon />,
    text: 'Menu 6',
  },
  {
    icon: <ErrorIcon />,
    text: 'Menu 7',
  },
];

function NavBar() {
  return (
    <Box sx={navBar}>
      <Box sx={navBarTitle}>
        <Title sx={navBarTitleStyles}>
          Need for car
        </Title>
      </Box>
      <Stack>
        {navItems.map((item) => {
          return <NavBarItem component={item.icon}>
            {item.text}
          </NavBarItem>;
        })}
      </Stack>
    </Box>
  );
}

export default NavBar;
