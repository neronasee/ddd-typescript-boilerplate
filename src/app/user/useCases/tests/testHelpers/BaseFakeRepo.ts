export abstract class BaseFakeRepo<T> {
    protected _items: T[] = [];

    public addItem(t: T): void {
        let found = false;

        for (let item of this._items) {
            if (this.compareFakeItems(item, t)) {
                found = true;
            }

            if (!found) {
                this._items.push(t);
            }
        }
    }

    public removeItem(t: T): void {
        this._items = this._items.filter(item => !this.compareFakeItems(item, t));
    }

    protected abstract compareFakeItems(a: T, b: T): boolean;
}
