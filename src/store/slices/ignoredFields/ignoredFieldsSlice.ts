import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const initialState: string [] = [];

export const ignoredFieldsSlice = createSlice({
  name: 'ignoredFields',
  initialState,
  reducers: {
    setNewIgnoredFields(state, action: PayloadAction<string []>) {
      return action.payload.slice();
    },
    clearIgnoredFields(state) {
      return initialState;
    },
  },
});

export default ignoredFieldsSlice.reducer;
export const {setNewIgnoredFields, clearIgnoredFields} = ignoredFieldsSlice.actions;
