import { login as loginUser } from "../services/Login";
import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";

export const useAuth = () => {
  const userContext = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const login = ({ username, password }) => {
    setIsLoading(true);
    const user = loginUser(username, password);
    if (user) {
      userContext.setUser(user);
      console.log(user);
    }
    setIsLoading(false);
  };

  const logout = () => {
    console.log("loging out");
    setIsLoading(true);
    userContext.setUser(null);
    setIsLoading(false);
  };

  return { login, logout, isLoading };
};
