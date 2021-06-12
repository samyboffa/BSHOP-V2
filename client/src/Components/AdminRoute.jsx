import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";

const AdminRoute = ({ component: Component, ...rest }) => {
    const user = useSelector((state) => state.userReducer.user);
    const admin = useSelector((state) => state.userReducer.admin);

    if (user && admin) {
        return <Route component={Component} {...rest} />;
    }
    return <Redirect to="/" />;
};

export default AdminRoute;
