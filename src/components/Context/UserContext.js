import React, { createContext, useState, useEffect, useMemo } from "react";

export const UserContext = createContext({});

export const Store = React.memo((props) => {
  const [user, setUserState] = useState({ id: "", name: "", email: "" });
  const fetchUserDataFromLocalStorage = localStorage.getItem("user");
  const initialState = useMemo(() => {
    return JSON.parse(fetchUserDataFromLocalStorage);
  }, [fetchUserDataFromLocalStorage]);

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
});
