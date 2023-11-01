/* eslint-disable react/prop-types */
import { useState } from "react";
import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 10,
    name: "Pedro",
  });
  const handlerUser = (newUser) => {
    setUser(newUser);
  };
  return (
    <UserContext.Provider value={{ message: "Hola", user, handlerUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
