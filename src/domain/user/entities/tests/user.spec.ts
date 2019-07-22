import { Result } from '../../../../ioc/interfaces';

import { User } from '../User';

let userOrError: Result<User> | null;

describe('User', () => {
    beforeEach(() => {
        userOrError = null;
    });

    it('Creation should work correctly', () => {
        userOrError = User.create({
            name: 'TestName',
        });

        expect(userOrError.error).toBeNull();
    });
});
