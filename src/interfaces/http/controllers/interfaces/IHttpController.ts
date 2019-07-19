import { Router } from 'express';

export interface IHttpController {
    register(r: Router): void;
}
