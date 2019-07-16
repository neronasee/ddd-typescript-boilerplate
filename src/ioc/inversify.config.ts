import typeorm from 'typeorm';
import { AsyncContainerModule, Container, ContainerModule } from 'inversify';
import { getDbConnection } from '../infra/database';
import { IUserRepo } from '../domain/user/repo/UserRepo';
import { CreateNewUserUseCase } from '../domain/user/useCases/createNewUser';
import { TYPES } from './types';
import { TypeOrm } from './interfaces';
import { getUserRepository } from '../infra/database/repositories';

export const thirdPartyDependencies = new ContainerModule(bind => {
    bind<TypeOrm>(TYPES.TypeOrm).toConstantValue(typeorm);
});

export const applicationDependencies = new AsyncContainerModule(async bind => {
    await getDbConnection();

    await require('../interfaces/http/user/UserController');

    bind<CreateNewUserUseCase>(TYPES.CreateNewUserUseCase).to(CreateNewUserUseCase);
    bind<IUserRepo>(TYPES.UserRepository).toDynamicValue(() => getUserRepository());
});
