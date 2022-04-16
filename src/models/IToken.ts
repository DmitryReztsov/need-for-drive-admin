export interface IToken {
  [key: string]: any,
  access_token: string,
  expires_in: number,
  refresh_token: string,
  token_type: string,
  user_id: string,
}
