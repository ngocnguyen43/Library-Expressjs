export interface IBaseService<T> {
  exists(t: T): Promise<boolean>;
  delete(id: string): Promise<any>;
  getById(id: string): Promise<T>;
  save(t: T): Promise<any>;
}
