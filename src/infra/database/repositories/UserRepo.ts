import { AbstractRepository, EntityRepository, getCustomRepository } from 'typeorm';
import { IUserRepo } from '../../../domain/user/repo/IUserRepo';
import { User } from '../../../domain/user/entities/User';
import { UserDbEntity } from '../entity';
import { UserMapper } from '../mappers';

// TODO: export not needed?
@EntityRepository(UserDbEntity)
export class UserRepository extends AbstractRepository<UserDbEntity> implements IUserRepo {
    async add(user: User): Promise<User> {
        const newUser = this.repository.create(UserMapper.toDatabase(user));
        await this.repository.save(newUser);

        return UserMapper.toEntity(newUser);
    }
    async exists(user: User): Promise<boolean> {
        const count = this.repository.count({ name: user.props.name });
        return !!count;
    }
}

export const getUserRepository = () => getCustomRepository(UserRepository);
