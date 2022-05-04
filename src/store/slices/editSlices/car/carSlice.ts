import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICar} from '../../../../models/ICar';
import {IDataField} from '../../../../models/IDataField';

export const initialState: ICar = {
  updatedAt: Date.now(),
  createdAt: Date.now(),
  description: '',
  priceMin: 1000,
  priceMax: 5000,
  name: '',
  number: '',
  categoryId: null,
  thumbnail: null,
  tank: 0,
  colors: [],
  id: '',
};

export const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    setFirstCarState(state, action: PayloadAction<ICar>) {
      Object.assign(state, action.payload);
    },
    setCarField(state, action: PayloadAction<IDataField>) {
      state[action.payload[0]] = action.payload[1];
    },
    clearCarState(state) {
      Object.assign(state, initialState);
    },
  },
});

export default carSlice.reducer;
export const {setFirstCarState, setCarField, clearCarState} = carSlice.actions;
