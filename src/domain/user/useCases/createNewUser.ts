import { UseCase, Result } from '../../core';
import { User } from '../entities/User';
import { IUserRepo } from '../repo/UserRepo';
import { injectable, inject } from 'inversify';
import { TYPES } from '../../../ioc/types';

export interface CreateNewUserUseCaseDTO {
    name: string;
}

@injectable()
export class CreateNewUserUseCase implements UseCase<CreateNewUserUseCaseDTO, Result<User>> {
    private userRepo: IUserRepo;

    constructor(@inject(TYPES.UserRepository) userRepo: IUserRepo) {
        this.userRepo = userRepo;
    }

    public async execute(request: CreateNewUserUseCaseDTO): Promise<Result<User>> {
        const { name } = request;

        const userOrError = User.create({ name });

        if (userOrError.error) {
            return Result.fail<User>(userOrError.error);
        }

        const user = userOrError.getValue();

        await this.userRepo.add(user);

        return Result.ok<User>(user);
    }
}
