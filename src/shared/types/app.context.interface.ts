import { ITodoItem } from "../../modules/todolist/types/todo.item.interface";

export interface IAppContext {
  authenticated: boolean;
  todoList: ITodoItem[];
  signIn(username: string): Promise<void>;
  signOut(): Promise<void>;
  addItem(item: ITodoItem): void;
}
