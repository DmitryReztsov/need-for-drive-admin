import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IDataField} from '../../../../models/IDataField';
import {IRateType} from '../../../../models/IRateType';

export const initialState: IRateType = {
  unit: '',
  name: '',
  id: '',
};

export const rateTypeSlice = createSlice({
  name: 'rateType',
  initialState,
  reducers: {
    setFirstRateTypeState(state, action: PayloadAction<IRateType>) {
      Object.assign(state, action.payload);
    },
    setRateTypeField(state, action: PayloadAction<IDataField>) {
      state[action.payload[0]] = action.payload[1];
    },
    clearRateTypeState(state) {
      Object.assign(state, initialState);
    },
  },
});

export default rateTypeSlice.reducer;
export const {setFirstRateTypeState, setRateTypeField, clearRateTypeState} = rateTypeSlice.actions;
