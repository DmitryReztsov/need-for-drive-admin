import React from 'react';
import {Badge, Box, Input} from '@mui/material';
import Container from '../../Container/Container';
import {
  header, headerBadge, headerBody, headerNotification,
  headerNotificationIcon, headerSearch, headerSearchIcon,
  headerSearchInput,
} from './HeaderStyles';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <Box sx={header}>
      <Container>
        <Box sx={headerBody}>
          <Box sx={headerSearch}>
            <SearchIcon sx={headerSearchIcon} />
            <Input
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
          <Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
