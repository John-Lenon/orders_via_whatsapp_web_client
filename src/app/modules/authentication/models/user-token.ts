export interface UserToken {
  authenticated: boolean;
  expiration: Date;
  token: string;
}
