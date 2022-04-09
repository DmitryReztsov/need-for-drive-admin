import React from 'react';
import {Avatar, Badge, Box, FormLabel, Input, MenuItem, Select} from '@mui/material';
import Container from '../containers/Container/Container';
import {
  header, headerAvatar, headerBadge, headerBody, headerNotification,
  headerNotificationIcon, headerProfile, headerSearch, headerSearchIcon,
  headerSearchInput, headerSelect,
} from './HeaderStyle';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import avatar from '../../../content/png/avatar.png';
import {useNavigate} from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <Box component={'header'} sx={header}>
      <Container>
        <Box sx={headerBody}>
          <Box sx={headerSearch}>
            <FormLabel htmlFor="search" sx={headerSearchIcon}>
              <SearchIcon />
            </FormLabel>
            <Input
              id={'search'}
              type={'search'}
              sx={headerSearchInput}
              placeholder={'Поиск...'}
            />
          </Box>
          <Box sx={headerNotification}>
            <Badge
              color="error"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              badgeContent={2}
              sx={headerBadge}
            >
              <NotificationsIcon sx={headerNotificationIcon} />
            </Badge>
          </Box>
          <Box sx={headerProfile}>
            <Avatar sx={headerAvatar} alt="avatar" src={avatar} />
            <Select
              sx={headerSelect}
              defaultValue={'Admin'}
            >
              <MenuItem value={'Admin'}>
                Admin
              </MenuItem>
              <MenuItem
                value={'Выйти'}
                onClick={() => navigate('/')}
              >
                Выйти
              </MenuItem>
            </Select>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
