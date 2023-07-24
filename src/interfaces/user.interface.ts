import ITokenData from './tokenData.interface';

export default interface IUser extends ITokenData {
  id?: number;
  level: number;
  password?: string;
  token?: string;
}
