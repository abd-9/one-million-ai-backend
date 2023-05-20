import { Tool } from './tool.interface';

export interface User {
  _id?: string;
  email: string;
  password: string;
}

export interface Subscriber extends User {
  tools: [Tool];
}
