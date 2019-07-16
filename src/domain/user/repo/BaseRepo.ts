export interface BaseRepo<T> {
    exists(t: T): Promise<boolean>;
}
