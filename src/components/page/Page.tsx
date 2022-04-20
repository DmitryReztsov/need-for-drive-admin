import React, {Dispatch, SetStateAction} from 'react';
import {Box, Skeleton} from '@mui/material';
import Container from '../common/containers/Container/Container';
import PageHeader from './PageHeader/PageHeader';
import PageContent from './PageContent/PageContent';
import PageFilters from './PageFilters/PageFilters';
import PageData from './PageData/PageData';
import PagePagination from './PagePagination/PagePagination';
import {page} from './PageStyle';
import OrderData from '../pages/Admin/Orders/OrderData/OrderData';

interface IPageProps {
  children: React.ReactNode,
  filters: any [],
  header: string,
  activeIndex: number,
  setActiveIndex: Dispatch<SetStateAction<number>>,
  pages: number,
  apply: () => void,
  reset: () => void,
  dataLoading: boolean,
  filteredArray: any [],
}

function Page({
  children, filters, header,
  activeIndex, setActiveIndex, pages,
  apply, reset, dataLoading, filteredArray,
}: IPageProps) {
  return (
    <Box sx={page}>
      <Container>
        <PageHeader>
          {header}
        </PageHeader>
        <PageContent>
          <PageFilters
            filters={filters}
            apply={apply}
            reset={reset}
          />
          <PageData>
            {dataLoading ?
              <Skeleton variant="rectangular" animation="wave" width={'100%'} height={200} /> :
              filteredArray?.length ?
                children :
                <Box>По заданным условиям записей не найдено</Box>
            }
          </PageData>
          {(pages !== 1) &&
            <PagePagination
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              pages={pages}
            />
          }
        </PageContent>
      </Container>
    </Box>
  );
}

export default Page;
