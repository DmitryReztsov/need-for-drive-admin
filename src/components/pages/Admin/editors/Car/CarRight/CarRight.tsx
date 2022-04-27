import React from 'react';
import {ICar} from '../../../../../../models/ICar';
import {
  Autocomplete, Box, FormControl,
  FormLabel, OutlinedInput, TextField,
} from '@mui/material';
import {carRightRow} from './CarRightStyle';
import {categoryApi} from '../../../../../../services/endpoints/category';

interface ICarRight {
  car: ICar,
}

function CarRight({car}: ICarRight) {
  const {data: categories} = categoryApi.useGetCategoriesQuery();
  const {
    id, priceMin, priceMax, name, description,
    number, categoryId: {name: categoryName},
    thumbnail: {path}, tank, colors,
  } = car;
  return (
    <Box>
      <Box sx={carRightRow}>
        <FormControl>
          <FormLabel htmlFor="name">
            Модель автомобиля
          </FormLabel>
          <OutlinedInput
            id="name"
            value={name}
            placeholder={'Введите название машины...'}
            required
            fullWidth
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="name">
            Тип автомобиля
          </FormLabel>
          <Autocomplete
            id="categoryName"
            options={(categories || []).map((category) => category.name)}
            value={categoryName}
            renderInput={(params) => {
              return <TextField
                {...params}
                label="Тип автомобиля"
                required
                fullWidth
              />;
            }}
            freeSolo
          />
        </FormControl>
      </Box>
    </Box>
  );
}

export default CarRight;
