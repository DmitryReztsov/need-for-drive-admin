import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IInitialState} from './types';

export const initialState: IInitialState = {
  createdAt: 'За все время',
  cityId: 'Все города',
  pointId: 'Все пункты',
  carId: 'Все модели',
  categoryId: 'Все классы',
  colors: 'Любой цвет',
  orderStatusId: 'Любой статус',
  rateId: 'Любой тариф',
  rateTypeId: 'Любой тип тарифа',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string []>) {
      state[action.payload[0]] = action.payload[1];
    },
    clearFilters(state) {
      Object.assign(state, initialState);
    },
  },
});

export default filterSlice.reducer;
export const {setFilter, clearFilters} = filterSlice.actions;
