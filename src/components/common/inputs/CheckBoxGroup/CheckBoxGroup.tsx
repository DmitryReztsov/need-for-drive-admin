import React from 'react';
import {Checkbox, FormControlLabel, FormGroup} from '@mui/material';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';

interface ICheckBoxGroup {
  sx?: SxProps<Theme>,
  items: string [],
}

function CheckBoxGroup({sx, items}: ICheckBoxGroup) {
  return (
    <FormGroup sx={{...sx}}>
      {items.length && items.map((item) => {
        return <FormControlLabel
          key={item}
          control={<Checkbox defaultChecked />}
          label={item}
        />;
      })}
    </FormGroup>
  );
}

export default CheckBoxGroup;
