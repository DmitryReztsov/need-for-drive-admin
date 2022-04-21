import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IInitialState} from './types';

export const initialState: IInitialState = {
  date: 'За все время',
  city: 'Все города',
  point: 'Все пункты',
  car: 'Все модели',
  category: 'Все классы',
  color: 'Любой цвет',
  status: 'Любой статус',
  rate: 'Любой тариф',
  rateType: 'Любой тип тарифа',
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
