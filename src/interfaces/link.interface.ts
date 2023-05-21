import { IPayment } from './payment.interface';
import { IUser } from './users.interface';

export interface ILink {
  _id?: String;
  url: String;
  imageUrl: String;
  active: Boolean;
  visitsCount: Number;
  higet?: Number;
  width?: Number;
  pixels?: Number;
  user?: IUser;
  description?: String;
  IPayment?: IPayment;
  type: LINK_TYPES;
  status: LINK_STATUS;
}

export enum LINK_TYPES {
  BLOG = 1,
  TOOL = 2,
  COURSE = 3,
  PLUGIN = 4,
}

export enum LINK_STATUS {
  PENDING = 1,
  APPROVED = 2,
  REJECTED = 3,
}
