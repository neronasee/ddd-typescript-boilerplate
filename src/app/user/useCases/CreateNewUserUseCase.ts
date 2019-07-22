import { injectable, inject } from 'inversify';
import { Result, IUserRepo } from '../../../ioc/interfaces';
import { TYPES } from '../../../ioc/types';

import { IUseCase } from '../../core/IUseCase';
import { User } from '../../../domain/user/entities/User';

export interface CreateNewUserUseCaseDTO {
    name: string;
}

@injectable()
export class CreateNewUserUseCase implements IUseCase<CreateNewUserUseCaseDTO, Result<User>> {
    private _userRepo: IUserRepo;

    constructor(@inject(TYPES.UserRepository) userRepo: IUserRepo) {
        this._userRepo = userRepo;
    }

    public async execute(request: CreateNewUserUseCaseDTO): Promise<Result<User>> {
        const { name } = request;

        const userOrError = User.create({ name });

        if (userOrError.error) {
            return Result.fail<User>(userOrError.error);
        }

        const user = userOrError.getValue();

        await this._userRepo.add(user);

        return Result.ok<User>(user);
    }
}
