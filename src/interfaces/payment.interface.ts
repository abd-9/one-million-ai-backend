import { Subscriber } from './users.interface';

export interface IPayment {
  _id?: String;
  active: Boolean;
  subscriber?: Subscriber;
  createdDate: Date;
  amount: Number;
  transactionId: String;
}
