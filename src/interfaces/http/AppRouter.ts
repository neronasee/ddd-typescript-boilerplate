import { Router } from 'express';
import { multiInject, injectable } from 'inversify';
import { TYPES } from '../../ioc/types';
import { IHttpController, IMiddleware } from '../../ioc/interfaces';

@injectable()
export class AppRouter {
    public mainRouter: Router;
    private _apiRouter: Router;

    constructor(
        @multiInject(TYPES.Middleware) middlewares: IMiddleware[],
        @multiInject(TYPES.HttpController) httpControllers: IHttpController[],
    ) {
        this.mainRouter = Router();
        this._apiRouter = Router();

        this._registerMiddlewares(middlewares);
        this._registerControllers(httpControllers);

        this.mainRouter.use('/api', this._apiRouter);
    }

    private _registerMiddlewares(middlewares: IMiddleware[]) {
        middlewares.forEach(middleware => middleware.register(this._apiRouter));
    }

    private _registerControllers(controllers: IHttpController[]) {
        controllers.forEach(controller => controller.register(this._apiRouter));
    }
}
