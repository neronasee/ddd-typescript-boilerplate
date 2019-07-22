import { BaseFakeRepo } from '../testHelpers';
import { User } from '../../../../../domain/user/entities/User';
import { IUserRepo } from '../../../../../ioc/interfaces';

export class FakeUserRepo extends BaseFakeRepo<User> implements IUserRepo {
    protected compareFakeItems(a: User, b: User): boolean {
        return a.equals(b);
    }
    public async exists(user: User): Promise<boolean> {
        const found = this._items.filter(i => this.compareFakeItems(i, user));
        return found.length !== 0;
    }
    public async add(user: User): Promise<User> {
        const alreadyExists = await this.exists(user);

        if (alreadyExists) {
            this._items = this._items.map(el => (this.compareFakeItems(el, user) ? user : el));
        } else {
            this._items.push(user);
        }

        return user;
    }
}
