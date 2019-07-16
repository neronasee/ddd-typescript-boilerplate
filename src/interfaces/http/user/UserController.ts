import express from 'express';
import { inject } from 'inversify';

import { CreateNewUserUseCase, CreateNewUserUseCaseDTO } from '../../../domain/user/useCases/createNewUser';
import { controller, httpPost, response, requestBody } from 'inversify-express-utils';
import { TYPES } from '../../../ioc/types';

@controller('/api/v1/users')
export class UsersController {
    private _createNewUserUseCase: CreateNewUserUseCase;

    constructor(@inject(TYPES.CreateNewUserUseCase) createNewUserUseCase: CreateNewUserUseCase) {
        this._createNewUserUseCase = createNewUserUseCase;
    }

    @httpPost('/')
    public async post(@response() res: express.Response, @requestBody() newUser: CreateNewUserUseCaseDTO) {
        try {
            const res = await this._createNewUserUseCase.execute(newUser);

            if (res.error) throw res.error;

            return res.getValue();
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }
}
