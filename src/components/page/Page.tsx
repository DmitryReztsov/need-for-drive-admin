import React, {Dispatch, SetStateAction} from 'react';
import {Box} from '@mui/material';
import Container from '../common/containers/Container/Container';
import PageHeader from './PageHeader/PageHeader';
import PageContent from './PageContent/PageContent';
import PageFilters from './PageFilters/PageFilters';
import PageData from './PageData/PageData';
import PagePagination from './PagePagination/PagePagination';
import {page} from './PageStyle';

interface IPageProps {
  children: React.ReactNode,
  filters: any,
  header: string,
  activeIndex: number,
  setActiveIndex: Dispatch<SetStateAction<number>>,
  pages: number,
}

function Page({children, filters, header, activeIndex, setActiveIndex, pages}: IPageProps) {
  return (
    <Box sx={page}>
      <Container>
        <PageHeader>
          {header}
        </PageHeader>
        <PageContent>
          <PageFilters filters={filters} />
          <PageData>
            {children}
          </PageData>
          <PagePagination
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            pages={pages}
          />
        </PageContent>
      </Container>
    </Box>
  );
}

export default Page;
