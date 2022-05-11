import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IDataField} from '../../../../models/IDataField';
import {IRate} from '../../../../models/IRate';

export const initialState: IRate = {
  updatedAt: Date.now(),
  createdAt: Date.now(),
  price: 0,
  rateTypeId: null,
  id: '',
};

export const rateSlice = createSlice({
  name: 'rate',
  initialState,
  reducers: {
    setFirstRateState(state, action: PayloadAction<IRate>) {
      Object.assign(state, action.payload);
    },
    setRateField(state, action: PayloadAction<IDataField>) {
      state[action.payload[0]] = action.payload[1];
    },
    clearRateState(state) {
      Object.assign(state, initialState);
    },
  },
});

export default rateSlice.reducer;
export const {setFirstRateState, setRateField, clearRateState} = rateSlice.actions;
