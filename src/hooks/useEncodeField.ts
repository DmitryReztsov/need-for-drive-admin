import {useAppDispatch} from './reduxHooks';
import {IDataField} from '../models/IDataField';
import {PayloadAction} from '@reduxjs/toolkit';

function useEncodeField(setField:(state: any, action: PayloadAction<IDataField>) => any) {
  const dispatch = useAppDispatch();

  return function (field: string, value: any) {
    switch (field) {

      default: {
        dispatch(setField(field, value));
      }
    }
  };
}

export default useEncodeField;
