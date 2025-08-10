import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("users")) || null
  );

  const login = (data) => {};

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(JSON.stringify("user", currentUser));
    }
  }, currentUser);

  return (
    <AuthContext.Provider value={(currentUser, login)}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
