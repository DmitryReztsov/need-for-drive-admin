import React from 'react';
import {Box, Typography} from '@mui/material';
import {pageListHeaders} from './PageListHeadersStyle';

interface IPageListHeaders {
  titles: string [],
}

function PageListHeaders({titles}: IPageListHeaders) {
  return (
    <Box sx={pageListHeaders}>
      {titles.map((title) => {
        return (<Typography key={title}>
          {title}
        </Typography>);
      })}
    </Box>
  );
}

export default PageListHeaders;
