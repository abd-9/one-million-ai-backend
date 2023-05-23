import { model, Schema, Document } from 'mongoose';
import { IUser } from '@interfaces/users.interface';

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

export const UserModel = model<IUser & Document>('User', UserSchema);
