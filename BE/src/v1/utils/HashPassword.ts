import * as bcrypt from 'bcrypt';
export const HashPassword = (plain: string): Promise<string> => {
  return bcrypt.hash(plain, 10);
};
