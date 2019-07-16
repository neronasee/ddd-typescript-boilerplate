import { Result } from '../../../core';
import { CreateNewUserUseCase } from '../createNewUser';
import { User } from '../../entities/User';
import { FakeUserRepo } from './fakes';

let useCase: CreateNewUserUseCase;
let fakeUserRepo: FakeUserRepo;
let result: Result<User>;

describe('CreateNewUserUseCase', () => {
    beforeEach(() => {
        fakeUserRepo = new FakeUserRepo();

        useCase = new CreateNewUserUseCase(fakeUserRepo);
    });

    it('Should add user to users collection', async () => {
        let errorOccured = false;

        try {
            result = await useCase.execute({ name: 'Test Name' });
        } catch (error) {
            errorOccured = true;
        }

        expect(result.error).toBeNull();
        expect(errorOccured).toBeFalsy();
    });
});
