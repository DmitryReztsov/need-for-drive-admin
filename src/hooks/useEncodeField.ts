import {useAppDispatch} from './reduxHooks';
import {IDataField} from '../models/IDataField';

function useEncodeField(setField: (obj: IDataField) => any) {
  const dispatch = useAppDispatch();

  return function(field: string, value: any) {
    switch (field) {
    default: {
      dispatch(setField([field, value]));
    }
    }
  };
}

export default useEncodeField;
