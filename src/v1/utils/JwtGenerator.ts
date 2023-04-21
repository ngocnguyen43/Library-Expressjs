import { JwtPayload, sign, verify } from 'jsonwebtoken';
import { UnauthorizedException } from '../core/exceptions/AuthException';
export const JwtGenerator = (userId: string, email: string, role: string): string => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const token: string = sign({ userId, email, role }, 'minhngoc');
  return token;
};
export const JwtDecode = (token: string, role: string) => {
  try {
    console.log(token);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const user = verify(token, 'minhngoc') as JwtPayload;
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
    throw new UnauthorizedException('Unauthorized');
  }
};
