import { model, Schema, Document, SchemaTypes } from 'mongoose';
import { LINK_STATUS, LINK_TYPES, ILink as ILink } from '@/interfaces/link.interface';

const LinkSchema: Schema = new Schema({
  url: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  type: {
    type: LINK_TYPES,
    required: true,
    default: LINK_TYPES.TOOL,
  },
  stuats: {
    type: LINK_STATUS,
    required: true,
    default: LINK_STATUS.PENDING,
  },
  active: {
    type: Boolean,
    default: false,
  },
  visitsCount: {
    type: Number,
    default: false,
  },
  higet: {
    type: Number,
    required: false,
  },
  width: {
    type: Number,
    required: false,
  },
  pixels: {
    type: Number,
    required: true,
    default: 1,
  },
  description: {
    type: String,
    required: false,
  },
  user: {
    type: SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  },
  payment: {
    type: SchemaTypes.ObjectId,
    ref: 'IPayment',
    required: false,
  },
});

export const LinkModel = model<ILink & Document>('Link', LinkSchema);
