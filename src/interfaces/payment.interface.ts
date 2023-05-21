import { Subscriber } from './users.interface';

export interface IPayment {
  _id?: String;
  active: Boolean;
  subscriber?: Subscriber;
  experiationTime: Date;
  amount: Number;
  transactionId: String;
}
