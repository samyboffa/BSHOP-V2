import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuth = useSelector((state) => state.userReducer.isAuth);

    if (isAuth) {
        return <Route component={Component} {...rest} />;
    }
    return <Redirect to="/" />;
};

export default PrivateRoute;
