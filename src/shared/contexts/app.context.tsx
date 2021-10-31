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
  const [user, setUser] = useState<IUser>({
    username: "",
    id: 0,
  });
  const [todoList, setTodoList] = useState<ITodoItem[]>([]);

  useEffect(() => {
    const findAllTodos = async () => {
      if (user && user.id) {
        const items = await todoListService.findAll(user.id);
        setTodoList(items);
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
      console.log("storedUser: ", storedUser);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const signIn = async (paramUsername: string): Promise<void> => {
    const user = await authService.signIn(paramUsername);

    if (!user) return;

    setAuthenticated(true);
    setUser(user);

    localStorage.setItem(AUTHENTICATION_STORAGE_KEY, JSON.stringify(true));
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  };

  const signOut = (): Promise<void> => {
    setAuthenticated(false);
    localStorage.removeItem(AUTHENTICATION_STORAGE_KEY);
    return Promise.resolve();
  };

  const addItem = async (item: ITodoItem) => {
    await todoListService.create(item, user.id);
    const items = await todoListService.findAll(user.id);
    setTodoList(items);
  };

  const removeItem = (todoItem: ITodoItem) => {
    const remainingItems = todoList.filter(
      (item) => item.title !== todoItem.title
    );
    setTodoList(remainingItems);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
