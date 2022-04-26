import React, { useState, useEffect, useContext } from "react";
import NavBarPublic from "../../components/NavMenu/NavBarPublic";
import { UserContext } from "../../store/UserContext";

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
