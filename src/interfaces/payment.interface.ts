import { Subscriber } from './users.interface';

export interface Payment {
  _id?: String;
  active: Boolean;
  subscriber?: Subscriber;
  experiationTime: Date;
  amount: Number;
  transactionId: String;
}
