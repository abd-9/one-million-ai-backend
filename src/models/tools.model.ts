import { model, Schema, Document, SchemaTypes } from 'mongoose';
import { Tool } from '@interfaces/tool.interface';

const ToolSchema: Schema = new Schema({
  url: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
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
    ref: 'Payment',
    required: false,
  },
});

export const ToolModel = model<Tool & Document>('Tool', ToolSchema);
