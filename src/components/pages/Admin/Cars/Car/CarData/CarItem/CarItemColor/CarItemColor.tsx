import React from 'react';
import {Box, Checkbox, FormControlLabel, Typography} from '@mui/material';
import {carItemColor, carItemColorContainer} from './CarItemColorStyle';

interface ICarItemColor {
  colors: string [],
}

function CarItemColor({colors}: ICarItemColor) {
  return (
    <Box sx={carItemColor}>
      <Box sx={carItemColorContainer}>
        {colors.map((color, i) => {
          return (
            <FormControlLabel
              key={color + i}
              control={
                <Checkbox
                  onClick={(e) => e.preventDefault()}
                  checked
                />
              }
              label={color}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default CarItemColor;
