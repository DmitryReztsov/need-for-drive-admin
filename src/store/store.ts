import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {api} from '../services/Api';
import filterReducer from './slices/filter/filterSlice';
import carReducer from './slices/editSlices/car/carSlice';
import cityReducer from './slices/editSlices/city/citySlice';
import orderStatusReducer from './slices/editSlices/orderStatus/orderStatusSlice';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  filterReducer,
  carReducer,
  cityReducer,
  orderStatusReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
