import { Router } from '../../../../ioc/interfaces';

export interface IMiddleware {
    register(r: Router): void;
}
