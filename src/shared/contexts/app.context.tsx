import React, { createContext, useState } from "react";
import { IAppContext } from "../types/app.context.interface";

export const AppContext = createContext<IAppContext>({} as IAppContext);

const AppProvider: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(true);

  const signIn = (): Promise<void> => {
    setAuthenticated(true);
    return Promise.resolve();
  };

  const signOut = (): Promise<void> => {
    setAuthenticated(false);
    return Promise.resolve();
  };

  return (
    <AppContext.Provider value={{ authenticated, signIn, signOut }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
