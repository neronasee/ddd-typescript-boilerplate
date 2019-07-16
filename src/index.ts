import 'reflect-metadata';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import { applicationDependencies, thirdPartyDependencies } from './ioc/inversify.config';
import bodyParser from 'body-parser';

(async () => {
    const port = 3000;
    const container = new Container();
    container.load(thirdPartyDependencies);
    await container.loadAsync(applicationDependencies);
    const app = new InversifyExpressServer(container);
    app.setConfig(app => {
        app.use(bodyParser.json());
    });
    const server = app.build();

    server.listen(port, () => {
        console.log(`Server running at http://127.0.0.1:${port}/`);
    });
})();
