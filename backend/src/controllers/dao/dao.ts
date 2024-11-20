export interface DAO<T> {
  getAll(): T[];
  getById(id: number):T;
  remove(toRemove: T): void;
  add(toAdd: T): number | bigint;
  update(id: number, toUpdate: T): void;
}
