import { inject, injectable } from 'inversify';
import {
    Response,
    Request,
    Router,
    IControllerHttpMethod,
    CreateNewUserUseCase,
    CreateNewUserUseCaseDTO,
} from '../../../../ioc/interfaces';
import { TYPES } from '../../../../ioc/types';

@injectable()
export class PostUserHttpMethod implements IControllerHttpMethod {
    private _createNewUserUseCase: CreateNewUserUseCase;

    constructor(@inject(TYPES.CreateNewUserUseCase) createNewUserUseCase: CreateNewUserUseCase) {
        this._createNewUserUseCase = createNewUserUseCase;
    }

    private async _execute(req: Request, res: Response) {
        const newUser = req.body as CreateNewUserUseCaseDTO;

        try {
            const result = await this._createNewUserUseCase.execute(newUser);
            if (result.error) throw result.error;

            res.send(result.getValue());
        } catch (error) {
            // TODO: add logging
            console.log('error');
            console.log(error);

            res.status(500);
            res.send(error.message);
        }
    }

    public register(router: Router) {
        router.post('/', this._execute.bind(this));
    }
}
