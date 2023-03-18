import { Schema, model, Types } from 'mongoose';
const DOCUMENT_NAME = 'Issues';
const COLLECTION_NAME = 'Issues';
const IssueSchema = new Schema(
  {
    book_info: {
      id: {
        type: Types.ObjectId,
        ref: 'Books',
      },
      title: String,
      author: String,
      ISBN: String,
      category: String,
      stock: Number,
      issueDate: { type: Date, default: Date.now() },
      returnDate: { type: Date, default: Date.now() + 7 * 24 * 60 * 60 * 1000 },
      isRenewed: { type: Boolean, default: false },
    },

    user_id: {
      id: {
        type: Types.ObjectId,
        ref: 'Users',
      },

      username: String,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  },
);
export default model(DOCUMENT_NAME, IssueSchema);
