import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export const Store = (props) => {
  const [user, setUserState] = useState({});
  const initialState = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    setUserState(initialState);
  }, [initialState]);

  function setUser(user) {
    setUserState(user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  function resetUser() {
    setUser(null);
    localStorage.removeItem("user");
  }
  return (
    <UserContext.Provider value={{ user, setUser, resetUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
