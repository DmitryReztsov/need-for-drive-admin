import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IDataField} from '../../../../models/IDataField';
import {IOrderStatus} from '../../../../models/IOrderStatus';

export const initialState: IOrderStatus = {
  name: '',
  id: '',
};

export const orderStatusSlice = createSlice({
  name: 'orderStatus',
  initialState,
  reducers: {
    setFirstOrderStatusState(state, action: PayloadAction<IOrderStatus>) {
      Object.assign(state, action.payload);
    },
    setOrderStatusField(state, action: PayloadAction<IDataField>) {
      state[action.payload[0]] = action.payload[1];
    },
    clearOrderStatusState(state) {
      Object.assign(state, initialState);
    },
  },
});

export default orderStatusSlice.reducer;
export const {
  setFirstOrderStatusState, setOrderStatusField, clearOrderStatusState,
} = orderStatusSlice.actions;
