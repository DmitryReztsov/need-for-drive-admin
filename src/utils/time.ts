export const SECOND = 1000;
export const MINUTE = 60 * SECOND;
export const HOUR = 60 * MINUTE;
export const DAY = 24 * HOUR;
export const WEEK = 7 * DAY;
export const MONTH = 30 * DAY;

export function filterTimestamp(value: string) {
  switch (value) {
  case ('За все время'): {
    return 0;
    break;
  }
  case ('За последний месяц'): {
    return Date.now() - MONTH;
    break;
  }
  case ('За неделю'): {
    return Date.now() - WEEK;
    break;
  }
  default: return 0;
  }
}
