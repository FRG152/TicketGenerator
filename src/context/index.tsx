import React, { createContext } from "react";

export const GlobalContext = createContext("");

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return <GlobalContext.Provider value="">{children}</GlobalContext.Provider>;
};
