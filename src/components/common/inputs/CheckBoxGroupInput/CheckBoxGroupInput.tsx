import React from 'react';
import {
  Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel,
} from '@mui/material';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';

interface ICheckBox {
  value: boolean,
  id: string,
  label: string,
}

interface ICheckBoxGroupInput {
  sx?: SxProps<Theme>,
  items: ICheckBox [],
  toggleCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void,
  fullWidth?: boolean,
  label?: string,
}

function CheckBoxGroupInput({sx, items, toggleCheckbox, fullWidth, label}: ICheckBoxGroupInput) {
  return (
    <FormControl fullWidth={fullWidth} sx={{...sx}}>
      {label && <FormLabel>
        {label}
      </FormLabel>}
      <FormGroup>
        {!!items.length && items.map((item) => {
          return <FormControlLabel
            key={item.id}
            control={
              <Checkbox
                id={item.id}
                checked={item.value}
                onChange={toggleCheckbox}
                value={item.value}
              />
            }
            label={item.label}
          />;
        })
        }
      </FormGroup>
    </FormControl>
  );
}

export default CheckBoxGroupInput;
