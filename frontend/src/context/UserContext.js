import React, { useEffect, useState } from "react";

export const UserContext = React.createContext({
  user: {},
  isLogged: false,
});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(window.localStorage.getItem("user") || null);

  useEffect(() => {
    console.log("useEffect", user);
    user
      ? window.localStorage.setItem("user", JSON.stringify(user))
      : window.localStorage.removeItem("user");
  }, [user]);

  const UserContextValue = {
    user,
    setUser,
  };
  return (
    <UserContext.Provider value={UserContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
