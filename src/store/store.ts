import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {api} from '../services/Api';
import filterReducer from './slices/filter/filterSlice';
import carReducer from './slices/editSlices/car/carSlice';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  filterReducer,
  carReducer,
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
