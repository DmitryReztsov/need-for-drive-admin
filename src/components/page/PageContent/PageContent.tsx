import React from 'react';
import {Box} from '@mui/material';
import {pageContent} from './PageContentStyle';

interface IPageHeaderProps {
  children: React.ReactNode,
}

function PageContent({children}: IPageHeaderProps) {
  return (
    <Box sx={pageContent}>
      {children}
    </Box>
  );
}

export default PageContent;
