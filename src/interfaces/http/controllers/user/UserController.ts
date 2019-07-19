import { multiInject, injectable } from 'inversify';
import { TYPES } from '../../../../ioc/types';
import { Router, IControllerHttpMethod, IHttpController } from '../../../../ioc/interfaces';

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
