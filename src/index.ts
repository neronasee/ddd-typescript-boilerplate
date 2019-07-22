import 'reflect-metadata';
import { Container } from 'inversify';
import { applicationDependencies } from './ioc/inversify.config';
import { Server } from './ioc/interfaces';
import { getDbConnection } from './infra/database/index';

(async () => {
    await getDbConnection();

    const container = new Container();
    await container.load(applicationDependencies);

    const server = container.get(Server);
    await server.start();
})();

/**
 * TODO:
 *
 * - add logging
 */
