import { ITodoItem } from "./todo.item.interface";

export interface ITodoListApi {
  findAll(): Promise<void>;
  create(item: ITodoItem): Promise<void>;
}
