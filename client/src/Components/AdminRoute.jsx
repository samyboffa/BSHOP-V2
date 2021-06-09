import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router";
import { getCurrentUser } from "../Redux/actions/user";

const AdminRoute = ({ component: Component, ...rest }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCurrentUser());
        // eslint-disable-next-line
    }, []);
    const admin = useSelector((state) => state.userReducer.admin);
    const token = localStorage.getItem("token");

    if (token && admin) {
        return <Route component={Component} {...rest} />;
    }
    return <Redirect to="/" />;
};

export default AdminRoute;
