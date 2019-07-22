import { multiInject, injectable } from 'inversify';
import { Router, IControllerHttpMethod, IHttpController } from '../../../../ioc/interfaces';
import { TYPES } from '../../../../ioc/types';

@injectable()
export class UserController implements IHttpController {
    private _router: Router;

    constructor(@multiInject(TYPES.ControllerHttpMethod) methods: IControllerHttpMethod[]) {
        this._router = Router();

        methods.forEach(method => method.register(this._router));
    }

    register(router: Router): void {
        router.use('/users', this._router);
    }
}
