import {useEffect, useRef} from 'react';
import {useAppDispatch} from './reduxHooks';

export function useFirstRender(entity: any, action: any) {
  const dispatch = useAppDispatch();
  const firstCityUpdate = useRef(true);

  useEffect(() => {
    if (!entity) return;
    if (firstCityUpdate.current) {
      firstCityUpdate.current = false;
      return;
    }
    dispatch(action);
  }, [entity]);
}
