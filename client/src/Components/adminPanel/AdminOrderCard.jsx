import React from "react";
import { Link } from "react-router-dom";
import AdminDeliveringOrder from "./AdminDeliveringOrder";
import "./AdminOrderCard.css";

export default function AdminOrderCard({ order }) {
    return (
        <>
            <div className="oneOrderItem">
                <div className="oneOrderHeader">
                    <div className="oneOrderNumber">
                        <span className="oneOrderOrange"> Order N° : </span>
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
                        <AdminDeliveringOrder product={product} key={ind} />
                    ))}
                </div>
            </div>{" "}
            <Link
                className="orderCardButtonBox"
                to={`/AdminPanelOrdersMngmt/${order.orderNumber}`}
            >
                <button className="orderCardButton setPrepared">MANAGE</button>
            </Link>
        </>
    );
}
