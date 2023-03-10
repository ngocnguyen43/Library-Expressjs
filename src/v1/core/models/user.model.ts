import { Schema, model } from 'mongoose';

const DOCUMENT_NAME = 'User';
const COLLECTION_NAME = 'Users';
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
  },
  {
    collection: COLLECTION_NAME,
    timestamp: true,
  },
);
export default model(DOCUMENT_NAME, UserSchema);
