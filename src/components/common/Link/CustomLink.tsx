import React from 'react';
import {Link} from '@mui/material';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';
import {linkStyles} from './CustomLinkStyles';

interface ICustomLinkProps {
  children: React.ReactNode,
  sx?: SxProps<Theme>,
  link?: string,
}

function CustomLink({children, sx, link}: ICustomLinkProps) {
  return (
    <Link
      href={link || '#'}
      color="secondary"
      underline="hover"
      sx={{...linkStyles, ...sx}}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
