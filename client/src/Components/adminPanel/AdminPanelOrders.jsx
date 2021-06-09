import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../Redux/actions/orders";
import Banner from "../Banner";
import { Loading } from "../Loading";
import AdminOrderCard from "./AdminOrderCard";
import "./AdminPanelOrders.css";

export const AdminPanelOrders = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllOrders());
        // eslint-disable-next-line
    }, []);

    const loadingOrders = useSelector((state) => state.ordersReducer.loading);

    const pendingOrders = useSelector((state) =>
        state.ordersReducer.orders.filter((el) => el.status === "Pending")
    );
    const preparingOrders = useSelector((state) =>
        state.ordersReducer.orders.filter((el) => el.status === "Preparing")
    );
    const completeOffers = useSelector((state) =>
        state.ordersReducer.orders.filter((el) => el.status === "Complete")
    );

    return loadingOrders ? (
        <Loading />
    ) : (
        <>
            <Banner
                firstWord="ORDERS"
                secondWord="MANAGEMENT"
                pathName="ADMIN DASHBOARD"
                secondLink="adminPanel"
                pathName2="ORDERS Managament"
            />
            <div className="adminOrdersPage">
                <h2 className="adminOrdersSubtitle"> Pending Orders</h2>
                {pendingOrders.length === 0 ? (
                    <div className="adminOrdersEmpty"> No Pending Orders</div>
                ) : (
                    pendingOrders.map((order, index) => (
                        <AdminOrderCard order={order} key={index} />
                    ))
                )}
                <hr />
                <h2 className="adminOrdersSubtitle"> Preparing Orders</h2>
                {preparingOrders.length === 0 ? (
                    <div className="adminOrdersEmpty">
                        No Under-Prepare Orders
                    </div>
                ) : (
                    preparingOrders.map((order, index) => (
                        <AdminOrderCard order={order} key={index} />
                    ))
                )}
                <hr />
                <h2 className="adminOrdersSubtitle"> Complete Orders</h2>
                {completeOffers.length === 0 ? (
                    <div className="adminOrdersEmpty">No Complete Orders</div>
                ) : (
                    completeOffers.map((order, index) => (
                        <AdminOrderCard order={order} key={index} />
                    ))
                )}
            </div>
        </>
    );
};
