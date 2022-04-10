import React from 'react';
import {Box, Stack} from '@mui/material';
import Title from '../Title/Title';
import {navBar, navBarTitle, navBarTitleStyles} from './NavBarStyle';
import {ReactComponent as BlogIcon} from '../../../content/svg/icons/blog.svg';
import {ReactComponent as BlogPostsIcon} from '../../../content/svg/icons/blog-posts.svg';
import {ReactComponent as PostIcon} from '../../../content/svg/icons/post.svg';
import {ReactComponent as OverviewIcon} from '../../../content/svg/icons/overview.svg';
import {ReactComponent as FormsIcon} from '../../../content/svg/icons/forms-n-components.svg';
import {ReactComponent as PersonIcon} from '../../../content/svg/icons/person.svg';
import {ReactComponent as ErrorIcon} from '../../../content/svg/icons/error.svg';
import NavBarItem from './NavBarItem/NavBarItem';

const navItems = [
  {
    icon: <BlogIcon />,
    text: 'Карточка автомобиля',
    href: '/#/admin/car/1',
  },
  {
    icon: <BlogPostsIcon />,
    text: 'Список авто',
    href: '/#/admin/car',
  },
  {
    icon: <PostIcon />,
    text: 'Заказы',
    href: '/#/admin/order',
  },
  {
    icon: <OverviewIcon />,
    text: 'Menu 4',
    href: '/#/admin/',
  },
  {
    icon: <FormsIcon />,
    text: 'Menu 5',
    href: '/#/admin/',
  },
  {
    icon: <PersonIcon />,
    text: 'Menu 6',
    href: '/#/admin/',
  },
  {
    icon: <ErrorIcon />,
    text: 'Menu 7',
    href: '/#/admin/',
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
          return <NavBarItem
            component={item.icon}
            key={item.text}
            href={item.href}
          >
            {item.text}
          </NavBarItem>;
        })}
      </Stack>
    </Box>
  );
}

export default NavBar;
