import { Payment } from './payment.interface';
import { User } from './users.interface';

export interface Tool {
  _id?: String;
  url: String;
  imageUrl: String;
  active: Boolean;
  visitsCount: Number;
  higet?: Number;
  width?: Number;
  pixels?: Number;
  user?: User;
  description?: String;
  Payment?: Payment;
}
