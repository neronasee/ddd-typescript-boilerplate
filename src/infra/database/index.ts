import { createConnection } from 'typeorm';
import { User as UserDbEntity } from './entity/User';

export async function getDbConnection() {
    console.log('connecting to db');

    const connection = await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'secret',
        database: 'demo',
        entities: [UserDbEntity],
        synchronize: true,
        // logging: true,
    });

    return connection;
}
