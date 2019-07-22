import { injectable } from 'inversify';
import convict from 'convict';
import dotenv from 'dotenv';
import { configSchema } from './schema';

const compiledSchema = convict(configSchema).getProperties();
type CompiledSchema = typeof compiledSchema;

@injectable()
export class Config {
    private _config: convict.Config<CompiledSchema>;

    constructor() {
        dotenv.config();

        this._config = convict(configSchema);
        this._config.validate({ strict: true });
    }

    get<K extends keyof CompiledSchema>(path: K): CompiledSchema[K] {
        return this._config.get(path);
    }
}
