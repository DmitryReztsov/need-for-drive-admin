import {DEFAULT_PARAMS} from '../services/Api';

export function getPages(count: number | undefined) {
  if (!count) return 1;
  return Math.ceil((count || 1) / DEFAULT_PARAMS.LIMIT);
}
