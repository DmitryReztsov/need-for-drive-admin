import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICar} from '../../../../models/ICar';
import {IDataField} from '../../../../models/IDataField';

export const initialState: ICar = {
  updatedAt: 0,
  createdAt: 0,
  description: '',
  priceMin: 0,
  priceMax: 0,
  name: '',
  number: '',
  categoryId: null,
  thumbnail: null,
  tank: 50,
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
      state[action.payload.key] = action.payload.value;
    },
    clearCarState(state) {
      Object.assign(state, initialState);
    },
  },
});

export default carSlice.reducer;
export const {setFirstCarState, setCarField, clearCarState} = carSlice.actions;
