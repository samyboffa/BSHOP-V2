import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "./Loading";
import { getMyOrders } from "../Redux/actions/orders";
import "./MyOrders.css";
import Banner from "./Banner";
import { Link } from "react-router-dom";

export const MyOrders = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMyOrders(userId));
        // eslint-disable-next-line
    }, []);
    const userId = useSelector((state) => state.userReducer.user._Id);
    const orderLoading = useSelector((state) => state.ordersReducer.loading);
    const myOrders = useSelector((state) => state.ordersReducer.orders);
    const [retreiveKey, setretreiveKey] = useState(false);

    return orderLoading ? (
        <Loading />
    ) : (
        <>
            <Banner firstWord="MY" secondWord="ORDERS" pathName="ORDERS" />
            {myOrders.length === 0 ? (
                <div className="emptyOrders">
                    {" "}
                    <span>
                        No Orders <br />{" "}
                        <Link to="/giftcards" className="colorizedLink">
                            Go Back
                        </Link>{" "}
                        Shopping{" "}
                    </span>
                </div>
            ) : (
                <div className="myOrdersPage">
                    {myOrders.map((order, index) => (
                        <div className="oneOrderItem" key={index}>
                            <div className="oneOrderHeader">
                                <div className="oneOrderNumber">
                                    <span className="oneOrderOrange">
                                        {" "}
                                        Order N° :{" "}
                                    </span>
                                    {order.orderNumber}
                                    <div className="oneOrderDate">
                                        {" "}
                                        created on : {order.date}
                                    </div>{" "}
                                    <div className="oneOrderStatus">
                                        Status : {order.status}
                                    </div>
                                </div>
                                <div className="oneOrderTotal">
                                    {" "}
                                    Total
                                    <div className="oneOrderOrange">
                                        {order.totalPrice} DT
                                    </div>
                                </div>
                            </div>
                            <div className="oneOrderOrdersList">
                                {order.products.map((product, ind) => (
                                    <div
                                        className="oneOrderOneProduct"
                                        key={ind}
                                    >
                                        <div className="responsiveOrderItem">
                                            <img
                                                className="oneOrderOneProductImg"
                                                src={product.img}
                                                alt="order"
                                            />
                                            <div className="oneOrderOneProductName">
                                                {product.name}
                                            </div>
                                        </div>

                                        <div className="oneOrderOneProductpriceQt">
                                            <div className="oneOrderOneProductprice ">
                                                Unit Price :{" "}
                                                <span className="oneOrderOrange">
                                                    {product.currentPrice} DT
                                                </span>
                                            </div>
                                            <div className="oneOrderOneProductQt">
                                                x {product.quantity}
                                            </div>
                                            <div className="oneOrderOneProductSubTotal">
                                                Sub-Total
                                                <span className="oneOrderOrange">
                                                    {product.currentPrice *
                                                        product.quantity}
                                                    DT
                                                </span>
                                            </div>
                                        </div>
                                        {product.type !== "TOPUP" ? (
                                            order.status === "Complete" ? (
                                                !retreiveKey ? (
                                                    <button
                                                        className="retreiveKey"
                                                        onClick={() =>
                                                            setretreiveKey(true)
                                                        }
                                                    >
                                                        Retreive Your Keys
                                                    </button>
                                                ) : (
                                                    <div className="DeliveredKeys">
                                                        {" "}
                                                        {product.key}{" "}
                                                    </div>
                                                )
                                            ) : null
                                        ) : null}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};
