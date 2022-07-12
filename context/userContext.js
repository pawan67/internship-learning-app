import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({});
export const useUserContext = () => useContext(UserContext);
export const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const contextValue = { isLoggedIn, setIsLoggedIn };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
