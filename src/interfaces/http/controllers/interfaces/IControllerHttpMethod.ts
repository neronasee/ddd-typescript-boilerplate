import { Router } from 'express';

export interface IControllerHttpMethod {
    register(r: Router): void;
}
