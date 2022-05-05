import React from 'react';
import {Box, Typography} from '@mui/material';
import {pageListHeaders} from './PageListHeadersStyle';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';

interface IPageListHeaders {
  titles: string [],
  sx?: SxProps<Theme>,
}

function PageListHeaders({titles, sx}: IPageListHeaders) {
  return (
    <Box sx={sx ? sx : pageListHeaders}>
      {titles.map((title) => {
        return (<Typography key={title}>
          {title}
        </Typography>);
      })}
    </Box>
  );
}

export default PageListHeaders;
