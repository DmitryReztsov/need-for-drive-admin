import React from 'react';
import {MenuItem, Select, SelectChangeEvent} from '@mui/material';
import {filter} from './FilterStyle';

type IFilterDataType = {[key: string]: any} | string | number;

interface IFilterProps<T> {
  id: string,
  value: string | number,
  all: string,
  data: T [],
  change: (e: SelectChangeEvent<any>) => void,
}

function Filter<T extends IFilterDataType>({id, value, all, data, change}: IFilterProps<T>) {
  return (
    <Select
      id={id}
      value={value}
      onChange={change}
      defaultValue={all}
      sx={filter}
    >
      <MenuItem
        key={all}
        value={all}
      >
        {all}
      </MenuItem>
      {data.map((item) => {
        return (typeof item === 'string' || typeof item === 'number') ?
          <MenuItem key={item} value={item}>{item.toString()}</MenuItem> :
          <MenuItem key={item.id} value={item.id}>{item.address || item.name}</MenuItem>;
      })}
    </Select>
  );
}

export default Filter;
