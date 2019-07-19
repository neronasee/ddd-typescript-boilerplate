type Error = string | null;

export class Result<T> {
    public error: Error;
    private _value?: T;

    constructor(error: Error, value?: T) {
        this.error = error ? error : null;
        this._value = value;

        Object.freeze(this);
    }

    public getValue(): T {
        if (this.error || !this._value) {
            throw new Error("Can't retrieve the value from a failed result");
        }

        return this._value;
    }

    public static ok<U>(value: U): Result<U> {
        return new Result<U>(null, value);
    }

    public static fail<U>(error: string): Result<U> {
        return new Result<U>(error);
    }
}
