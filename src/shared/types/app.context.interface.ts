import { ITodoItem } from "../../modules/todolist/types/todo.item.interface";
import { IUser } from "./user.interface";

export interface IAppContext {
  authenticated: boolean;
  todoList: ITodoItem[];
  todoListToSearch: ITodoItem[];
  user: IUser;
  loading: boolean;
  signIn(username: string): Promise<void>;
  signOut(): Promise<void>;
  addItem(item: ITodoItem): void;
  removeItem(item: ITodoItem): void;
  searchTodos(value: string): void;
}
