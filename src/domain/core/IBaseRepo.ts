export interface IBaseRepo<T> {
    exists(t: T): Promise<boolean>;
}
