import {IFilter} from '../components/pages/Admin/Orders/Orders';
import {filterTimestamp} from '../utils/time';
import {initialState} from '../store/slices/filter/filterSlice';
import {IOrderQueryParams} from '../services/endpoints/order';

const defaultFilter = Object.values(initialState);

export default function useSetParams(filters: IFilter []) {
  const params: IOrderQueryParams = {};
  filters.forEach((filter) => {
    // игнорируем дефолтные значения
    if (defaultFilter.includes(filter.value)) {
      return;
    }
    switch (filter.id) {
    case ('createdAt'): {
      params[`${filter.id}[$gt]`] = filterTimestamp(filter.value);
      break;
    }
    case ('colors'): {
      return params[filter.id] = filter.value;
      break;
    }
    default: {
      return params[`${filter.id}[id]`] = filter.value;
    }
    }
  });
  return params;
}
