import { createContext, useState } from "react";

//Context provides a way to pass data through the component tree without having to pass props down manually at every level.

//as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//every context gets built for us, there is a .Provider, .Provider is the component that will wrap around any other components that need access to the values inside.
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
