const isEntity = (v: any): v is Entity<any> => {
    return v instanceof Entity;
};

export abstract class Entity<T> {
    public readonly props: T;

    constructor(props: T) {
        this.props = props;
    }

    public equals(object?: Entity<T>): boolean {
        if (object === null || object === undefined) {
            return false;
        }

        if (this === object) {
            return true;
        }

        if (!isEntity(object)) {
            return false;
        }

        return this.equalsCore(object);
    }

    protected abstract equalsCore(object: Entity<T>): boolean;

    public getHashCode(): string {
        return this.getHashCodeCore();
    }

    protected abstract getHashCodeCore(): string;
}
