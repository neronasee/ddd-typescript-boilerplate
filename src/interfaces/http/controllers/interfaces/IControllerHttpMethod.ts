import { Router } from '../../../../ioc/interfaces';

export interface IControllerHttpMethod {
    register(r: Router): void;
}
