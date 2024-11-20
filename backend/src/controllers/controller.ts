export interface Controller<T> {
  getAll(): T[];
  getById(id: number): T;
  remove(toRemove: T): void;
  add(toAdd: T): void;
  update(id: number, toUpdate: T): void;
}
