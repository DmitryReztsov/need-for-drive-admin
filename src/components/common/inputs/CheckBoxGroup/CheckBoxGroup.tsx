import React from 'react';
import {Checkbox, FormControlLabel, FormGroup} from '@mui/material';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';

interface ICheckBoxGroup {
  sx?: SxProps<Theme>,
  items: string [],
  toggleCheckbox?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

function CheckBoxGroup({sx, items, toggleCheckbox}: ICheckBoxGroup) {
  return (
    <FormGroup sx={{...sx}}>
      {items.length ? items.map((item, i) => {
        return <FormControlLabel
          key={item + i}
          control={<Checkbox defaultChecked onChange={toggleCheckbox} value={item} />}
          label={item}
        />;
      }) :
        null
      }
    </FormGroup>
  );
}

export default CheckBoxGroup;
