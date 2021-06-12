import React, { useEffect, useState } from "react";
import { Loading } from "../Loading";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../Redux/actions/orders";
import { getProducts } from "../../Redux/actions/products";
import "./AdminPanel.css";
import { adminOrders, adminProduct, adminUsers } from "../../svg/svg";
import Banner from "../Banner";
import { Link } from "react-router-dom";
import { getUsersNumber } from "../../Redux/actions/user";

export const AdminPanel = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
        dispatch(getAllOrders());
        dispatch(getUsersNumber());
        // eslint-disable-next-line
    }, []);
    const [pendingOrders, setpendingOrders] = useState();
    const allProducts = useSelector((state) => state.productsReducer.products);
    const allOrders = useSelector((state) => state.ordersReducer.orders);
    const loadingProducts = useSelector(
        (state) => state.productsReducer.loading
    );
    const loadingOrders = useSelector((state) => state.ordersReducer.loading);
    const userNumber = useSelector((state) => state.userReducer.userNumber);
    useEffect(() => {
        setpendingOrders(
            allOrders.filter((order) => order.status === "Pending").length
        );
    }, [allOrders]);

    return loadingProducts || loadingOrders ? (
        <Loading />
    ) : (
        <>
            <Banner
                firstWord="ADMIN"
                secondWord="DASHBOARD"
                pathName="ADMIN DASHBOARD"
            />
            <div className="aminPanelPage">
                <div className="adminPanelBoxes">
                    <Link className="adminPanelBox userBox">
                        {adminUsers}
                        <h4 className="adminPanelBoxText">
                            <span className="adminPanelBoxTextNumber">
                                {userNumber ? userNumber : 100}
                            </span>{" "}
                            <br /> Users
                        </h4>{" "}
                    </Link>
                    <Link
                        to="AdminPanelPoductsMngmt"
                        className="adminPanelBox productsBox"
                    >
                        {adminProduct}
                        <h4 className="adminPanelBoxText">
                            <span className="adminPanelBoxTextNumber">
                                {allProducts.length}
                            </span>{" "}
                            <br /> Products
                        </h4>
                    </Link>
                    <Link
                        to="AdminPanelOrdersMngmt"
                        className="adminPanelBox OrdersBox"
                    >
                        {adminOrders}
                        <h4 className="adminPanelBoxText">
                            <span className="adminPanelBoxTextNumber">
                                {allOrders.length}
                            </span>
                            Total Orders <br />
                            <span className="adminPanelBoxTextNumber">
                                {pendingOrders}
                            </span>
                            New Orders
                        </h4>
                    </Link>
                </div>
            </div>
        </>
    );
};
