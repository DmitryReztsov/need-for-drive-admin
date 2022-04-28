import React, {useState} from 'react';
import {ICar} from '../../../../../../models/ICar';
import {Box} from '@mui/material';
import {carRight, colorPicker} from './CarRightStyle';
import {categoryApi} from '../../../../../../services/endpoints/category';
import TextInput from '../../../../../common/inputs/TextInput/TextInput';
import AutocompleteInput from '../../../../../common/inputs/AutocompleteInput/AutocompleteInput';
import CheckBoxGroup from '../../../../../common/inputs/CheckBoxGroup/CheckBoxGroup';

interface ICarRight {
  car: ICar,
}

function CarRight({car}: ICarRight) {
  const {data: categories} = categoryApi.useGetCategoriesQuery();
  const [color, setColor] = useState<string>('');
  const {
    priceMin, priceMax, name, description,
    number, categoryId: {name: categoryName},
    tank, colors,
  } = car;
  return (
    <Box sx={carRight}>
      <Box>
        <TextInput
          id='name'
          label={'Модель автомобиля'}
          value={name}
          change={(e) => console.log(e.target.value)}
          required
          placeholder={'Введите модель...'}
          autoFocus
          fullWidth
        />
        <AutocompleteInput
          id="categoryName"
          label={'Тип автомобиля'}
          value={categoryName}
          change={(e) => console.log(e.target.value)}
          options={(categories || []).map((category) => category.name)}
          required
          clearOnEscape
          fullWidth
        />
      </Box>
      <Box>
        <TextInput
          id='priceMin'
          label={'Минимальная цена'}
          value={priceMin}
          change={(e) => console.log(e.target.value)}
          required
          placeholder={'Введите мин. цену...'}
          fullWidth
        />
        <TextInput
          id="priceMax"
          label={'Максимальная цена'}
          value={priceMax}
          change={(e) => console.log(e.target.value)}
          required
          placeholder={'Введите макс. цену..'}
          fullWidth
        />
      </Box>
      <Box>
        <TextInput
          id='number'
          label={'Номер авто'}
          value={number}
          change={(e) => console.log(e.target.value)}
          required
          placeholder={'Введите номер...'}
          fullWidth
        />
        <TextInput
          id="tank"
          label={'Запас топлива'}
          value={tank}
          change={(e) => console.log(e.target.value)}
          required
          placeholder={'Введите оставшееся топливо...'}
          fullWidth
        />
      </Box>
      <Box>
        <Box sx={colorPicker}>
          <TextInput
            id="color"
            label={'Доступные цвета'}
            value={color}
            change={(e) => setColor(e.target.value)}
            required
            placeholder={'Введите новый цвет...'}
            fullWidth
            addButton
          />
          <CheckBoxGroup items={colors || []} />
        </Box>
        <TextInput
          id="description"
          label={'Описание'}
          value={description}
          change={(e) => console.log(e.target.value)}
          required
          placeholder={'Введите описание...'}
          fullWidth
          multiline
        />
      </Box>
    </Box>
  );
}

export default CarRight;
