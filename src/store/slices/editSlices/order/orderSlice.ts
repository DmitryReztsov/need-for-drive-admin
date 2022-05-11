import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IOrder} from '../../../../models/IOrder';
import {IDataField} from '../../../../models/IDataField';
import {MINUTE} from '../../../../utils/time';

export const initialState: IOrder = {
  updatedAt: Date.now(),
  createdAt: Date.now(),
  orderStatusId: null,
  cityId: null,
  pointId: null,
  carId: null,
  categoryId: null,
  rateTypeId: null,
  color: '',
  dateFrom: Date.now(),
  dateTo: Date.now() + 10 * MINUTE,
  rateId: null,
  price: 0,
  isFullTank: false,
  isNeedChildChair: false,
  isRightWheel: false,
  id: '',
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setFirstOrderState(state, action: PayloadAction<IOrder>) {
      Object.assign(state, action.payload);
    },
    setOrderField(state, action: PayloadAction<IDataField>) {
      state[action.payload[0]] = action.payload[1];
    },
    clearOrderState(state) {
      Object.assign(state, initialState);
    },
  },
});

export default orderSlice.reducer;
export const {setFirstOrderState, setOrderField, clearOrderState} = orderSlice.actions;
