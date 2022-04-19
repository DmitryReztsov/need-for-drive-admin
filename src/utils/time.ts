export function formatDate(timestamp: number) : string {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

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
