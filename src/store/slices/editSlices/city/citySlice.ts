import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IDataField} from '../../../../models/IDataField';
import {ICity} from '../../../../models/ICity';

export const initialState: ICity = {
  updatedAt: 0,
  createdAt: 0,
  name: '',
  id: '',
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setFirstCityState(state, action: PayloadAction<ICity>) {
      Object.assign(state, action.payload);
    },
    setCityField(state, action: PayloadAction<IDataField>) {
      state[action.payload[0]] = action.payload[1];
    },
    clearCityState(state) {
      Object.assign(state, initialState);
    },
  },
});

export default citySlice.reducer;
export const {setFirstCityState, setCityField, clearCityState} = citySlice.actions;
