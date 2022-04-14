import React from 'react';
import {MenuItem, Select, SelectChangeEvent} from '@mui/material';

interface IFilterProps {
  change: (e: SelectChangeEvent<any>) => void,
  value: any,
  id: string,
  data: {value: any, text: string} [],
}

function Filter({change, value, id, data}: IFilterProps) {
  return (
    <Select
      id={id}
      value={value}
      onChange={change}
    >
      {data.map((item, i) => {
        return <MenuItem key={item.text + i} value={item.value}>{item.text}</MenuItem>;
      })}
    </Select>
  );
}

export default Filter;
