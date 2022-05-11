export function validateNumber(value: string): boolean {
  const regexp = /\D\d\d\d\D\D/;
  return !!value.match(regexp);
}
