const ignoreFields = ['updatedAt', 'createdAt', 'id'];

export function getPercent(entity: any): number {
  const sortedFields = Object.entries(entity).filter((item) => {
    return !ignoreFields.includes(item[0]);
  });
  const sortedArray = sortedFields.map((item) => item[1]);
  const numerator = sortedArray.filter((value: any) => {
    if (Array.isArray(value)) return value.length;
    return value;
  }).length;
  const denominator = sortedArray.length;
  return Math.round((numerator / denominator) * 100);
}
