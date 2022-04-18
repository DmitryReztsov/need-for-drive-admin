import {IToken} from '../models/IToken';

export function setStorageTokenData(data: IToken) {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      localStorage.setItem(key, data[key]);
    }
  }
}

export function deleteStorageTokenData() {
  localStorage.clear();
}

export function getToken() {
  return localStorage.getItem('access_token');
}
