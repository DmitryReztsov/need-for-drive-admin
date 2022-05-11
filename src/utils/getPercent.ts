import {validateNumber} from './validators';

const defaultIgnoredFields = ['updatedAt', 'createdAt', 'id'];

export function getPercent(entity: any, ignoreFields: string [] = []): number {
  const ignoredFields = defaultIgnoredFields.concat(...ignoreFields);
  const sortedFields = Object.entries(entity).filter((item) => {
    return !ignoredFields.includes(item[0]);
  });
  const numerator = sortedFields.filter((item: any) => {
    if (Array.isArray(item[1])) return item[1].length;
    if (item[0] === 'number' && !validateNumber(item[1])) return;
    return item[1];
  }).length;
  const denominator = sortedFields.length;
  return Math.round((numerator / denominator) * 100);
}
