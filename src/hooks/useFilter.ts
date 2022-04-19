import {IFilter} from '../components/pages/Admin/Orders/Orders';
import {filterTimestamp, MONTH} from '../utils/time';

const defaultFilter = ['За все время', 'Все модели', 'Все города', 'Любой'];

export default function useFilter(array: any [], filters: IFilter []) {
  let resultArray: any [] = array.slice();
  filters.forEach((filter) => {
    resultArray = resultArray.filter((elem) => {
      // игнорируем дефолтные значения
      if (defaultFilter.includes(filter.value)) {
        return true;
      }
      if (!elem[filter.id]) return;
      switch (filter.id) {
      case ('createdAt'): {
        return elem[filter.id] >= filterTimestamp(filter.value);
        break;
      }
      case ('color'): {
        return elem[filter.id] === filter.value;
        break;
      }
      default: {
        return elem[filter.id].id === filter.value;
      }
      }
    });
  });
  return resultArray;
}
