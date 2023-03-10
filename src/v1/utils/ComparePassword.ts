import * as bcrypt from 'bcrypt';
export const ComparePassword = (plain: string, hashed: string): Promise<boolean> => {
  return bcrypt.compare(plain, hashed);
};
