import { Schema, model, Types } from 'mongoose';
const DOCUMENT_NAME = 'Activity';
const COLLECTION_NAME = 'Activities';

const activitySchema = new Schema(
  {
    info: {
      id: {
        type: Types.ObjectId,
        ref: 'Books',
      },
      title: String,
    },

    category: String,

    time: {
      id: {
        type: Types.ObjectId,
        ref: 'Issue',
      },
      returnDate: Date,
      issueDate: Date,
    },

    user_id: {
      id: {
        type: Types.ObjectId,
        ref: 'Users',
      },
      email: String,
    },

    entryTime: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    collection: COLLECTION_NAME,
  },
);
export default model(DOCUMENT_NAME, activitySchema);
