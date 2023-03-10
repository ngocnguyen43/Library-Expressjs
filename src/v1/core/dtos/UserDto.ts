export interface UserDTO {
  name: string;
  email: string;
  password?: string;
  status: string;
  roles: string[];
}
