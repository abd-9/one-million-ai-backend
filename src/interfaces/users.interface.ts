import { ILink } from './link.interface';

export interface IUser {
  _id?: string;
  email: string;
  password: string;
}

export interface Subscriber extends IUser {
  tools: [ILink];
}
