import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { useMoralis } from "react-moralis";



const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useMoralis();
    console.log(isAuthenticated)
  
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
