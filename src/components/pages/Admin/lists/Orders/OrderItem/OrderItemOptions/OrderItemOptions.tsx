import React from 'react';
import {Checkbox, FormControlLabel, FormGroup} from '@mui/material';
import {orderItemOptions} from './OrderItemOptionsStyle';

interface ICarItemColor {
  options: boolean [],
}

const labels = ['Полный бак', 'Детское кресло', 'Правый руль'];

function OrderItemOptions({options}: ICarItemColor) {
  return (
    <FormGroup sx={orderItemOptions}>
      {options.map((option, i) => {
        return (
          <FormControlLabel
            // добавлен false чтобы закрыть предупреждение компилятора
            key={i}
            control={
              <Checkbox
                onClick={(e) => e.preventDefault()}
                disabled={!option}
                checked={option || false}
              />
            }
            label={labels[i]}
          />
        );
      })}
    </FormGroup>
  );
}

export default OrderItemOptions;
