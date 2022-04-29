import React, {useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Home = () => {
  const { user, isLogged } = useContext(UserContext);
  return (
    <div>
      <h1>Hompage</h1>
      {isLogged && (
        <div>
          <p>user:{user.FirstName}</p>
          <p>is the user logged in?: {isLogged.toString()}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
