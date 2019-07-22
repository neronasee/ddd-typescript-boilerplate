import { inject, injectable } from 'inversify';
import express, { Express } from 'express';
import { Config, AppRouter } from '../../ioc/interfaces';

@injectable()
export class Server {
    private _config: Config;
    private _serverInstance: Express;

    constructor(@inject(AppRouter) router: AppRouter, @inject(Config) config: Config) {
        this._config = config;
        this._serverInstance = express();
        this._serverInstance.use(router.mainRouter);
    }

    start() {
        const port = this._config.get('port');

        return new Promise(resolve =>
            this._serverInstance.listen(port, () => {
                console.log(`Listening on port ${port}`);
                resolve();
            }),
        );
    }
}
