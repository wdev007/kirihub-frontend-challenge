import React, { createContext, useEffect, useState } from "react";
import { IAppContext } from "../types/app.context.interface";
import { ITodoItem } from "../../modules/todolist/types/todo.item.interface";
// import { useHistory } from "react-router-dom";

export const AppContext = createContext<IAppContext>({} as IAppContext);

const KEY_AUTHENTICATION_STORE = "@todoList:authenticated";

const AppProvider: React.FC = ({ children }) => {
  // const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);
  const [todoList, setTodoList] = useState<ITodoItem[]>([]);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem(KEY_AUTHENTICATION_STORE);

    if (isAuthenticated) {
      setAuthenticated(JSON.parse(isAuthenticated));
    }
  }, []);

  const signIn = (): Promise<void> => {
    setAuthenticated(true);
    // history.push("/home");
    localStorage.setItem(KEY_AUTHENTICATION_STORE, JSON.stringify(true));
    return Promise.resolve();
  };

  const signOut = (): Promise<void> => {
    setAuthenticated(false);
    // history.push("/login");
    localStorage.removeItem(KEY_AUTHENTICATION_STORE);
    return Promise.resolve();
  };

  const addItem = (item: ITodoItem) => {
    setTodoList((prevState) => [...prevState, item]);
  };

  const removeItem = (todoItem: ITodoItem) => {
    const remainingItems = todoList.filter(
      (item) => item.title !== todoItem.title
    );
    setTodoList(remainingItems);
  };

  return (
    <AppContext.Provider
      value={{ authenticated, signIn, signOut, addItem, todoList, removeItem }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
