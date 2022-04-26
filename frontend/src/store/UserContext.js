import React, { useState } from "react";
import { login } from "../services/Login";

export const UserContext = React.createContext({
  user: {},
  auth: () => {},
  isLogged: false,
});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  const auth = (username, password) => {
    login(username, password).then((response) => {
      if (response.IdEmployee) {
        setIsLogged(true);
        setUser(response);
        console.log(response);
      } else {
        console.log(response);
      }
    });
  };

  const getUser = () => user;

  const UserContextValue = {
    user,
    auth,
    isLogged,
  };
  return (
    <UserContext.Provider value={UserContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
