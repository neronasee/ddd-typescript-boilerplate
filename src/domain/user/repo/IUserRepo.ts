import { IBaseRepo } from '../../core/IBaseRepo';
import { User } from '../entities/User';

export interface IUserRepo extends IBaseRepo<User> {
    add(t: User): Promise<User>;
}
