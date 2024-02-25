import { User } from '../../models/backend/user';

export { User, Employee, Recruiter } from '../../models/backend/user';

export interface EmailPasswordCredentials {
  email: string;
  password: string;
}

export type UserCreateRequest = Omit<User, 'uid' | 'email' | 'created'>;
