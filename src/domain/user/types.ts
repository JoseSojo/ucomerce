export interface User {
  id: number;
  email: string;
  createdAt?: Date
  updatedAt?: Date
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  }

export type CreateUserDto = Omit<User, 'id' | 'createdAt' | 'updatedAt'>