import { inject, injectable } from 'inversify';
import express, { Express } from 'express';
import { AppRouter } from './AppRouter';
// TODO: get from config
const PORT = 3000;

@injectable()
export class Server {
    private _serverInstance: Express;

    constructor(@inject(AppRouter) router: AppRouter) {
        this._serverInstance = express();
        this._serverInstance.use(router.mainRouter);
    }

    start() {
        return new Promise(resolve =>
            this._serverInstance.listen(PORT, () => {
                console.log(`Listening on port ${PORT}`);
                resolve();
            }),
        );
    }
}
