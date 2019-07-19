import { BaseRepo } from '../../core/IBaseRepo';
import { User } from '../entities/User';

export interface IUserRepo extends BaseRepo<User> {
    add(t: User): Promise<User>;
}
