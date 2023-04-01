import fs from 'fs/promises';
import { format } from 'date-fns';
import path from 'path';
const filename = path.join(__dirname, '../logs', 'logs.log');
export const logEvents = async (message: string) => {
  const date = `${format(new Date(), 'dd-MM-yyyy\t HH:mm:ss ')}`;
  const content = `${date}------${message}\n`;
  try {
    await fs.appendFile(filename, content);
  } catch (error) {
    console.log(error);
  }
};
