import React, {useState} from 'react';
import {ICar} from '../../../../../../models/ICar';
import {Box} from '@mui/material';
import {carRight, colorPicker} from './CarRightStyle';
import {categoryApi} from '../../../../../../services/endpoints/category';
import TextInput from '../../../../../common/inputs/TextInput/TextInput';
import AutocompleteInput from '../../../../../common/inputs/AutocompleteInput/AutocompleteInput';
import CheckBoxGroup from '../../../../../common/inputs/CheckBoxGroup/CheckBoxGroup';
import {setCarField} from '../../../../../../store/slices/editSlices/car/carSlice';
import {useAppDispatch} from '../../../../../../hooks/reduxHooks';
import {validateNumber} from '../../../../../../utils/validators';

interface ICarRight {
  car: ICar,
}

function CarRight({car}: ICarRight) {
  const dispatch = useAppDispatch();
  const {data: categories} = categoryApi.useGetCategoriesQuery({limit: 0});
  const [color, setColor] = useState<string>('');
  const {
    priceMin, priceMax, name, description,
    number, categoryId, tank, colors,
  } = car;

  function toggleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.checked ?
      dispatch(setCarField(['colors', colors
        .concat(e.target.value)])) :
      dispatch(setCarField(['colors', colors
        .filter((color) => color !== e.target.value)]));
  }

  return (
    <Box sx={carRight}>
      <Box>
        <TextInput
          id='name'
          label={'Модель автомобиля*'}
          value={name}
          change={(e) => dispatch(setCarField(['name', e.target.value]))}
          required
          placeholder={'Введите модель...'}
          autoFocus
          fullWidth
        />
        <AutocompleteInput
          id="categoryId"
          label={'Тип автомобиля*'}
          value={categoryId}
          options={(categories?.data || [])}
          action={setCarField}
          required
          clearOnEscape
          fullWidth
          helperText={'Выберите категорию авто...'}
        />
      </Box>
      <Box>
        <TextInput
          id='priceMin'
          label={'Минимальная цена*'}
          type={'number'}
          value={priceMin}
          change={(e) => {
            dispatch(setCarField(['priceMin', +e.target.value]));
            if (priceMax <= +e.target.value) {
              dispatch(setCarField(['priceMax', +e.target.value]));
            }
          }}
          required
          placeholder={'Введите мин. цену...'}
          fullWidth
          error={!priceMin}
          helperText={'Цена не может быть 0...'}
        />
        <TextInput
          id="priceMax"
          label={'Максимальная цена*'}
          type={'number'}
          value={priceMax}
          change={(e) => {
            dispatch(setCarField(['priceMax', +e.target.value]));
            if (priceMin >= +e.target.value) {
              dispatch(setCarField(['priceMin', +e.target.value]));
            }
          }}
          required
          placeholder={'Введите макс. цену..'}
          fullWidth
          error={!priceMin}
          helperText={'Цена не может быть 0...'}
        />
      </Box>
      <Box>
        <TextInput
          id='number'
          label={'Номер авто (в формате X123YZ)*'}
          value={number}
          change={(e) => {
            (e.target.value.length <= 6) &&
            dispatch(setCarField(['number', e.target.value.toUpperCase()]));
          }}
          required
          error={(number.length === 6) && !validateNumber(number)}
          placeholder={'Введите номер...'}
          helperText={'Неверный формат'}
          fullWidth
        />
        <TextInput
          id="tank"
          label={'Запас топлива*'}
          type={'number'}
          value={tank}
          change={(e) => {
            dispatch(setCarField(['tank', +e.target.value <= 100 ? +e.target.value : 100]));
          }}
          required
          placeholder={'Введите оставшееся топливо...'}
          fullWidth
        />
      </Box>
      <Box>
        <Box sx={colorPicker}>
          <TextInput
            id="color"
            label={'Доступные цвета*'}
            value={color}
            change={(e) => {
              setColor(e.target.value);
            }}
            required
            placeholder={'Введите новый цвет...'}
            fullWidth
            addButton
            error={color.length <= 1 && color.length !== 0}
            helperText={'Имя цвета не может быть длиной менее 2 символов'}
            clickButton={() => {
              (color.length >= 2) && dispatch(setCarField(['colors', colors.concat(color)]));
            }}
          />
          <CheckBoxGroup items={colors || []} toggleCheckbox={toggleCheckbox} />
        </Box>
        <TextInput
          id="description"
          label={'Описание*'}
          value={description}
          change={(e) => dispatch(setCarField(['description', e.target.value]))}
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
