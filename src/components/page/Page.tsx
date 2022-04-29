import React, {Dispatch, SetStateAction} from 'react';
import {Box, Skeleton} from '@mui/material';
import Container from '../common/containers/Container/Container';
import PageHeader from './PageHeader/PageHeader';
import PageContent from './PageContent/PageContent';
import PageFilters from './PageFilters/PageFilters';
import PageData from './PageData/PageData';
import PagePagination from './PagePagination/PagePagination';
import {pageStyle} from './PageStyle';

interface IPageProps {
  children: React.ReactNode,
  filters?: any [],
  header: string,
  page: number,
  setPage: Dispatch<SetStateAction<number>>,
  pages: number,
  apply?: () => void,
  reset?: () => void,
  dataLoading: boolean,
  array: any [],
}

function Page({
  children, filters, header,
  page, setPage, pages,
  apply, reset, dataLoading, array,
}: IPageProps) {
  return (
    <Box sx={pageStyle}>
      <Container>
        <PageHeader>
          {header}
        </PageHeader>
        <PageContent>
          {filters &&
            <PageFilters
              filters={filters}
              apply={apply!}
              reset={reset!}
            />
          }
          <PageData>
            {dataLoading ?
              <Skeleton variant="rectangular" animation="wave" width={'100%'} height={200} /> :
              array?.length ?
                children :
                <Box>По заданным условиям записей не найдено</Box>
            }
          </PageData>
          {(pages !== 1) &&
            <PagePagination
              page={page}
              setPage={setPage}
              pages={pages}
            />
          }
        </PageContent>
      </Container>
    </Box>
  );
}

export default Page;
