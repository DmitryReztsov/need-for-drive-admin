import React from 'react';
import {Avatar, Badge, Box, FormLabel, Input, MenuItem, Select, useMediaQuery} from '@mui/material';
import Container from '../containers/Container/Container';
import {
  header, headerAvatar, headerBadge, headerBody, headerBurgerIcon, headerNotification,
  headerNotificationIcon, headerProfile, headerSearch, headerSearchIcon,
  headerSearchInput, headerSelect,
} from './HeaderStyle';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import avatar from '../../../content/png/avatar.png';
import {useNavigate} from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {deleteStorageTokenData, getToken} from '../../../utils/localStorage';
import {authApi} from '../../../services/endpoints/auth';

interface IHeaderProps {
  openMenu: () => void,
}

function Header({openMenu}: IHeaderProps) {
  const navigate = useNavigate();
  const matches = useMediaQuery('(max-width:600px)');
  const [authLogout, {}] = authApi.useAuthLogoutMutation();
  function clickHandler() {
    navigate('/');
    authLogout(getToken()!);
    deleteStorageTokenData();
  }
  return (
    <Box component={'header'} sx={header}>
      <Container>
        <Box sx={headerBody}>
          {matches && <MenuIcon onClick={openMenu} sx={headerBurgerIcon} />}
          <Box sx={headerSearch}>
            {!matches && <FormLabel htmlFor="search" sx={headerSearchIcon}>
              <SearchIcon />
            </FormLabel>}
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
              IconComponent={ArrowDropDownIcon}
            >
              <MenuItem value={'Admin'}>
                Admin
              </MenuItem>
              <MenuItem
                value={'Выйти'}
                onClick={clickHandler}
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
