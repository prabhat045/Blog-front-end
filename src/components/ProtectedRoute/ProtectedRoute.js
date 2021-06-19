import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component /> : <Redirect to={{ pathname: "/signin" }} />
      }
    />
  );
};

export default ProtectedRoute;
