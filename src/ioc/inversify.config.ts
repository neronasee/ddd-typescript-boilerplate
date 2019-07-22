import { ContainerModule } from 'inversify';
import { TYPES } from './types';
import {
    IHttpController,
    IControllerHttpMethod,
    IUserRepo,
    IMiddleware,
    Server,
    AppRouter,
    Config,
} from './interfaces';

import { CreateNewUserUseCase } from '../app/user/useCases/CreateNewUserUseCase';

import { BodyParserMiddleware } from '../interfaces/http/middlewares';
import { PostUserHttpMethod } from '../interfaces/http/controllers/user/PostUserHttpMethod';
import { UserController } from '../interfaces/http/controllers/user/UserController';

import { getUserRepository } from '../infra/database/repositories';

export const applicationDependencies = new ContainerModule(bind => {
    bind<Config>(Config).toSelf();
    bind<AppRouter>(AppRouter).toSelf();
    bind<Server>(Server).toSelf();

    /** controllers */
    bind<IHttpController>(TYPES.HttpController).to(UserController);

    /** controller http methods */
    bind<IControllerHttpMethod>(TYPES.ControllerHttpMethod).to(PostUserHttpMethod);

    /** use cases */
    bind<CreateNewUserUseCase>(TYPES.CreateNewUserUseCase).to(CreateNewUserUseCase);

    /** repos */
    bind<IUserRepo>(TYPES.UserRepository).toDynamicValue(() => getUserRepository());

    /** middlewares */
    bind<IMiddleware>(TYPES.Middleware).to(BodyParserMiddleware);
});
