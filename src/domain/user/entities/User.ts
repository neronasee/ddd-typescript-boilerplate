import { AggregateRoot, Entity, Result } from '../../core';

interface UserProps {
    name: string;
}

export class User extends AggregateRoot<UserProps> {
    private constructor(props: UserProps) {
        super(props);
    }

    public static create(props: UserProps): Result<User> {
        return Result.ok<User>(new User(props));
    }

    protected equalsCore(object: Entity<UserProps>): boolean {
        return this.getHashCode() === object.getHashCode();
    }

    protected getHashCodeCore(): string {
        return this.props.name;
    }
}
