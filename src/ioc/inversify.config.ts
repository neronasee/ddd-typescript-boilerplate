import { AsyncContainerModule } from 'inversify';
import { TYPES } from './types';
import { IHttpController, IControllerHttpMethod, IUserRepo, IMiddleware, Server, AppRouter } from './interfaces';

import { CreateNewUserUseCase } from '../app/user/useCases/CreateNewUserUseCase';

import { BodyParserMiddleware } from '../interfaces/http/middlewares';
import { PostUserHttpMethod } from '../interfaces/http/controllers/user/PostUserHttpMethod';
import { UserController } from '../interfaces/http/controllers/user/UserController';

import { getDbConnection } from '../infra/database';
import { getUserRepository } from '../infra/database/repositories';

// import { Server } from '../interfaces/http/Server';
// import { AppRouter } from '../interfaces/http/AppRouter';

export const applicationDependencies = new AsyncContainerModule(async bind => {
    // TODO: move it out from here
    await getDbConnection();

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
