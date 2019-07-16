import { User } from '../../../domain/user/entities/User';

export class UserMapper {
    public static toEntity(raw: any): User {
        const { name } = raw;

        return User.create({ name }).getValue();
    }

    public static toDatabase(user: User): any {
        const {
            props: { name },
        } = user;

        return { name };
    }
}
