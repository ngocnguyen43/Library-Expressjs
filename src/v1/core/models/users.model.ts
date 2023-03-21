import { Schema, Types, model } from 'mongoose';

const DOCUMENT_NAME = 'User';
const COLLECTION_NAME = 'Users';
export interface IUser {
  name: string;
  email: string;
  password?: string;
  status?: string;
  roles?: [string];
}
const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
    roles: {
      type: Array,
      default: [],
    },
    bookIssues: [{ type: Types.ObjectId, ref: 'Issues' }],
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  },
);
export default model(DOCUMENT_NAME, UserSchema);
