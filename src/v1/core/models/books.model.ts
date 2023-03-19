import { Schema, model } from 'mongoose';

const DOCUMENT_NAME = 'Books';
const COLLECTION_NAME = 'Books';
export interface IBook {
  title: string;
  ISBN: string;
  author: string;
  description: string;
  category: string;
  stock: number;
}
// const category = [
//   'Science',
//   'Biology',
//   'Physics',
//   'Chemistry',
//   'Novel',
//   'Travel',
//   'Cooking',
//   'Philosophy',
//   'Mathematics',
//   'Ethics',
//   'Technology',
// ];
const BookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
    },
    ISBN: {
      type: String,
    },
    author: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    stock: {
      type: Number,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  },
);
export default model(DOCUMENT_NAME, BookSchema);
