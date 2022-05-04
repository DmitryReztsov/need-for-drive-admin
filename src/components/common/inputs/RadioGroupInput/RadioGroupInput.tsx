import React from 'react';
import {
  Radio,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  FormControl,
} from '@mui/material';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';

interface ICheckBoxGroup {
  sx?: SxProps<Theme>,
  items: string [],
  toggleRadio: (e: React.MouseEvent<HTMLLabelElement>) => void,
  value: string,
  fullWidth?: boolean,
  id: string,
  label: string,
}

function RadioGroupInput(
  {sx, items, toggleRadio, value, fullWidth, id, label}: ICheckBoxGroup,
) {
  return (
    <FormControl fullWidth={fullWidth} sx={{...sx}}>
      <FormLabel htmlFor={id}>
        {label}
      </FormLabel>
      <RadioGroup
        value={value}
        name={id}
      >
        {!!items.length && items.map((item, i) => {
          return (
            <FormControlLabel
              key={item + i}
              value={item}
              control={<Radio />}
              label={item}
              onClick={toggleRadio}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioGroupInput;
