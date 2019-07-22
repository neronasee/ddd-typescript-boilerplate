import { Router } from '../../../../ioc/interfaces';

export interface IHttpController {
    register(r: Router): void;
}
