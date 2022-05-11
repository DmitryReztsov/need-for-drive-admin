import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IDataField} from '../../../../models/IDataField';
import {IPoint} from '../../../../models/IPoint';

export const initialState: IPoint = {
  name: '',
  address: '',
  cityId: null,
  id: '',
};

export const pointSlice = createSlice({
  name: 'point',
  initialState,
  reducers: {
    setFirstPointState(state, action: PayloadAction<IPoint>) {
      Object.assign(state, action.payload);
    },
    setPointField(state, action: PayloadAction<IDataField>) {
      state[action.payload[0]] = action.payload[1];
    },
    clearPointState(state) {
      Object.assign(state, initialState);
    },
  },
});

export default pointSlice.reducer;
export const {setFirstPointState, setPointField, clearPointState} = pointSlice.actions;
