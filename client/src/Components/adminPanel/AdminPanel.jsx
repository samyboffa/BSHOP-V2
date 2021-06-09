import React, { useEffect } from "react";
import { Loading } from "../Loading";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../Redux/actions/orders";
import { getProducts } from "../../Redux/actions/products";
import "./AdminPanel.css";
import { adminOrders, adminProduct, adminUsers } from "../../svg/svg";
import Banner from "../Banner";
import { Link } from "react-router-dom";

export const AdminPanel = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
        dispatch(getAllOrders());
        // eslint-disable-next-line
    }, []);

    const allProducts = useSelector((state) => state.productsReducer.products);
    const allOrders = useSelector((state) => state.ordersReducer.orders);
    const loadingProducts = useSelector(
        (state) => state.productsReducer.loading
    );
    const loadingOrders = useSelector((state) => state.ordersReducer.loading);

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
                            <span className="adminPanelBoxTextNumber">30</span>{" "}
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
                            <br /> Orders
                        </h4>
                    </Link>
                </div>
            </div>
        </>
    );
};
