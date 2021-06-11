import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { changeStatusOrders } from "../../Redux/actions/orders";
import Banner from "../Banner";
import Header from "../Header";
import "./AdminOrderDetail.css";

export default function AdminOrderDetail({ match }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [keys, setkeys] = useState();
    const oneOrder = useSelector(
        (state) =>
            state.ordersReducer.orders.filter(
                (el) => el.orderNumber === match.params.orderNumber
            )[0]
    );
    useEffect(() => {
        dispatch(
            changeStatusOrders({
                orderNumber: match.params.orderNumber,
                operation: "Preparing",
                msg: `Your Order Number "${match.params.orderNumber}" is Being Prepared. Please Wait For Delivery`,
            })
        );
        // eslint-disable-next-line
    }, []);
    const completeOrder = () => {
        dispatch(
            changeStatusOrders({
                orderNumber: match.params.orderNumber,
                operation: "Complete",
                msg: `Your Order Number "${match.params.orderNumber}" is Complete. You Can Retreive Your Keys From Your Orders Panel`,
                keys: keys,
            })
        );
        history.push("/adminPanel");
    };
    const handleChange = (e) => {
        setkeys({ ...keys, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <Header />
            <Banner
                firstWord="ORDERS"
                secondWord="MANAGEMENT"
                pathName="ADMIN DASHBOARD"
                secondLink="/adminPanel"
                pathName2="ORDER MANAGEMENT"
            />
            <div className="OrderDetailPage">
                <h1>Order Number : {oneOrder.orderNumber} </h1>
                <h4>Created On : {oneOrder.date}</h4>
                <h4>Status : {oneOrder.status}</h4>
                <div className="OrderDetailProducts">
                    {oneOrder.products.map((product, index) => (
                        <div className="OrderDetailsOneProduct" key={index}>
                            <img
                                className="OrderDetailsOneProductImg"
                                src={product.img}
                                alt="detailProduct"
                            />
                            <p> x {product.quantity}</p>
                            <div className="OrderDetailsOneProductName">
                                <h3>{product.name}</h3>
                                {product.credentials ? (
                                    <p className="OrderDetailsOneProductCredentials">
                                        In-Game ID: {product.credentials.id}
                                    </p>
                                ) : null}
                            </div>
                            <input
                                type="text"
                                name={product.name}
                                className="OrderDetailsOneProductInput"
                                placeholder="Product Key"
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                </div>
                <div className="OrderDetailProductsButtonBox">
                    <button
                        className="orderCardButton setPrepared"
                        onClick={completeOrder}
                    >
                        Send Keys And Set As Complete
                    </button>
                </div>
            </div>
        </div>
    );
}
