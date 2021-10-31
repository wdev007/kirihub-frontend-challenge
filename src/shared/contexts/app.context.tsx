import React, { createContext, useEffect, useState } from "react";
import { IAppContext } from "../types/app.context.interface";
import { ITodoItem } from "../../modules/todolist/types/todo.item.interface";
import authService from "../../modules/auth/services/auth.service";
import { IUser } from "../types/user.interface";
import todoListService from "../../modules/todolist/services/todolist.service";

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AUTHENTICATION_STORAGE_KEY = "@todoList:authenticated";
export const USER_STORAGE_KEY = "@todoList:username";

const AppProvider: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser>({
    username: "",
    id: 0,
  });
  const [todoList, setTodoList] = useState<ITodoItem[]>([]);
  const [todoListToSearch, setTodoListToSearch] = useState<ITodoItem[]>([]);

  useEffect(() => {
    const findAllTodos = async () => {
      if (user && user.id) {
        setLoading(true);
        const items = await todoListService.findAll(user.id);
        setLoading(false);
        setTodoList(items);
        setTodoListToSearch(items);
      }
    };
    findAllTodos();
  }, [user]);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem(AUTHENTICATION_STORAGE_KEY);
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);

    if (isAuthenticated) {
      setAuthenticated(JSON.parse(isAuthenticated));
    }
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const signIn = async (paramUsername: string): Promise<void> => {
    setLoading(true);
    const user = await authService.signIn(paramUsername);

    if (!user) return;

    setAuthenticated(true);
    setUser(user);
    setLoading(false);

    localStorage.setItem(AUTHENTICATION_STORAGE_KEY, JSON.stringify(true));
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  };

  const signOut = async (): Promise<void> => {
    setAuthenticated(false);
    localStorage.removeItem(AUTHENTICATION_STORAGE_KEY);
    localStorage.removeItem(USER_STORAGE_KEY);
  };

  const addItem = async (item: ITodoItem) => {
    setLoading(true);
    await todoListService.create(item, user.id);

    const items = await todoListService.findAll(user.id);

    setLoading(false);
    setTodoList(items);
    setTodoListToSearch(items);
  };

  const removeItem = async (todoItem: ITodoItem) => {
    if (!todoItem?.id) return;

    setLoading(true);

    await todoListService.delete(todoItem.id);

    const items = await todoListService.findAll(user.id);

    setLoading(false);
    setTodoList(items);
    setTodoListToSearch(items);
  };

  const searchTodos = (value: string) => {
    if (!value) {
      setTodoListToSearch(todoList);
      return;
    }
    const found = todoList.filter((item) =>
      item.title.toLocaleUpperCase().includes(value.toLocaleUpperCase())
    );
    setTodoListToSearch(found);
  };

  return (
    <AppContext.Provider
      value={{
        authenticated,
        signIn,
        signOut,
        addItem,
        todoList,
        removeItem,
        user,
        loading,
        searchTodos,
        todoListToSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
