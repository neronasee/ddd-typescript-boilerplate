import { injectable } from 'inversify';
import bodyParser from 'body-parser';
import { Router } from 'express';
import { IMiddleware } from '../../../ioc/interfaces';

@injectable()
export class BodyParserMiddleware implements IMiddleware {
    register(router: Router) {
        router.use(bodyParser.json());
    }
}
