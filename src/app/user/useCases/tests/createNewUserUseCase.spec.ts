import { Result } from '../../../../lib';
import { CreateNewUserUseCase } from '../CreateNewUserUseCase';
import { User } from '../../../../domain/user/entities/User';
import { FakeUserRepo } from './fakes/FakeUserRepo';

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
