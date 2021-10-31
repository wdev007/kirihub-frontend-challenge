import { ITodoItem } from "./todo.item.interface";

export interface ITodoListService {
  findAll(userId: number): Promise<ITodoItem[]>;
  create(item: ITodoItem, userId: number): Promise<void>;
}
