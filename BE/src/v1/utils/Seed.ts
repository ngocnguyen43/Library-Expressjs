/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { faker } from '@faker-js/faker';
import booksModel from '../core/models/books.model';
const category = [
  'Science',
  'Biology',
  'Physics',
  'Chemistry',
  'Novel',
  'Travel',
  'Cooking',
  'Philosophy',
  'Mathematics',
  'Ethics',
  'Technology',
];

const author = [];
for (let i = 0; i < 11; i++) {
  author.push(faker.name.findName());
}
export async function seed(limit) {
  for (let i = 0; i < 11; i++) {
    author.push(faker.name.findName());
  }
  for (let i = 0; i < limit; i++) {
    const index1 = Math.floor(Math.random() * Math.floor(11));
    const index2 = Math.floor(Math.random() * Math.floor(11));
    try {
      const book = new booksModel({
        title: faker.lorem.words(),
        ISBN: faker.datatype.uuid(),
        stock: 10,
        author: author[index2],
        description: faker.lorem.paragraphs(3),
        category: category[index1],
      });
      await book.save();
    } catch (err) {
      console.log('Error at creating books');
    }
  }
}
