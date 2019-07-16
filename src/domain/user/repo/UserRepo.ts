import { BaseRepo } from './BaseRepo';
import { User } from '../entities/User';

export interface IUserRepo extends BaseRepo<User> {
    add(t: User): Promise<User>;
}
