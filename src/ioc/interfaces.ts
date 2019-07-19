// /** core */
// export { IUseCase } from '../app/core/IUseCase';
// export { IBaseRepo } from '../domain/core/IBaseRepo';

/** middlewares */
export { IMiddleware } from '../interfaces/http/middlewares/interfaces/IMiddleware';

/** controllers */
export { IHttpController } from '../interfaces/http/controllers/interfaces/IHttpController';

/** controller methods */
export { IControllerHttpMethod } from '../interfaces/http/controllers/interfaces/IControllerHttpMethod';

/** use cases */
export { CreateNewUserUseCase, CreateNewUserUseCaseDTO } from '../app/user/useCases/CreateNewUserUseCase';

/** respositories */
export { IUserRepo } from '../domain/user/repo/IUserRepo';

export { AppRouter } from '../interfaces/http/AppRouter';
export { Server } from '../interfaces/http/Server';

export { Result } from '../lib';

/** third parties */
export { Response, Request, Router } from 'express';
