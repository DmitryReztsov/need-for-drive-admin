import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IDataField} from '../../../../models/IDataField';
import {ICategory} from '../../../../models/ICategory';

export const initialState: ICategory = {
  name: '',
  description: '',
  id: '',
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setFirstCategoryState(state, action: PayloadAction<ICategory>) {
      Object.assign(state, action.payload);
    },
    setCategoryField(state, action: PayloadAction<IDataField>) {
      state[action.payload[0]] = action.payload[1];
    },
    clearCategoryState(state) {
      Object.assign(state, initialState);
    },
  },
});

export default categorySlice.reducer;
export const {setFirstCategoryState, setCategoryField, clearCategoryState} = categorySlice.actions;
