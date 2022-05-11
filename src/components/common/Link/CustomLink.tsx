import React from 'react';
import {Link} from '@mui/material';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';
import {linkStyles} from './CustomLinkStyle';
import {HASH_PATH} from '../../../utils/config';

interface ICustomLinkProps {
  children: React.ReactNode,
  sx?: SxProps<Theme>,
  href?: string,
  externalHref?: string,
  click?: (e: React.MouseEvent) => void,
}

function CustomLink({children, sx, href, externalHref, click}: ICustomLinkProps) {
  return (
    <Link
      href={externalHref ? externalHref : href ? (HASH_PATH + href) : ''}
      color="primary"
      underline="hover"
      sx={{...linkStyles, ...sx}}
      onClick={click}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
