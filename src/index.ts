import 'reflect-metadata';
import { Container } from 'inversify';
import { applicationDependencies } from './ioc/inversify.config';
import { Server } from './ioc/interfaces';
import { TYPES } from './ioc/types';

(async () => {
    const container = new Container();
    await container.loadAsync(applicationDependencies);

    const server = container.get(Server);
    await server.start();
})();

// TODO: add namings like BodyParserMiddleware
// TODO: fix imports -> rewrite with importing from the single source of truth
// TODO: add package json to container for convenient imports
