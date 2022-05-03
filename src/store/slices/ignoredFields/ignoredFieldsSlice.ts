import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const initialState = ['updatedAt', 'createdAt', 'id'];

export const ignoredFieldsSlice = createSlice({
  name: 'ignoredFields',
  initialState,
  reducers: {
    setNewIgnoredFields(state, action: PayloadAction<string []>) {
      return state.concat(...action.payload);
    },
    clearIgnoredFields(state) {
      return initialState.slice();
    },
  },
});

export default ignoredFieldsSlice.reducer;
export const {setNewIgnoredFields, clearIgnoredFields} = ignoredFieldsSlice.actions;
