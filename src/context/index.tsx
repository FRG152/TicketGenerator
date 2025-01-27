import { createContext, useState } from "react";

export const GlobalContext = createContext("");

export const GlobalProvider = ({ children }) => {
  const [avatar, setAvatar] = useState("");

  return (
    <GlobalContext.Provider value={{ avatar, setAvatar }}>
      {children}
    </GlobalContext.Provider>
  );
};
