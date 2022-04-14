import React from 'react';
import {Link} from '@mui/material';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';
import {linkStyles} from './CustomLinkStyle';
import {hashPath} from '../../../utils/config';

interface ICustomLinkProps {
  children: React.ReactNode,
  sx?: SxProps<Theme>,
  href?: string,
}

function CustomLink({children, sx, href}: ICustomLinkProps) {
  return (
    <Link
      href={href ? (hashPath + href) : ''}
      color="secondary"
      underline="hover"
      sx={{...linkStyles, ...sx}}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
