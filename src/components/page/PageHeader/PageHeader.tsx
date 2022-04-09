import React from 'react';
import {Box, Typography} from '@mui/material';
import {pageHeader, pageHeaderText} from './PageHeaderStyle';

interface IPageHeaderProps {
  children: React.ReactNode,
}

function PageHeader({children}: IPageHeaderProps) {
  return (
    <Box sx={pageHeader}>
      <Typography variant={'h1'} sx={pageHeaderText}>
        {children}
      </Typography>
    </Box>
  );
}

export default PageHeader;
