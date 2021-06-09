import React from "react";
import "./AdminDeliveringOrder.css";

export default function AdminDeliveringOrder({ product, ind }) {
    return (
        <div className="oneOrderOneProduct" key={ind}>
            <img className="oneOrderOneProductImg" src={product.img} alt="" />
            <div className="adminoneOrderOneProductName">{product.name} </div>

            <div className="oneOrderOneProductpriceQt">
                <div className="oneOrderOneProductprice ">
                    Unit Price :{" "}
                    <span className="oneOrderOrange">
                        {product.currentPrice} DT
                    </span>
                </div>
                <div className="oneOrderOneProductQt">x {product.quantity}</div>
            </div>
            <div className="oneOrderOneProductSubTotal">
                Sub-Total <br />
                <span className="oneOrderOrange">
                    {product.currentPrice * product.quantity}
                    DT
                </span>
            </div>
        </div>
    );
}
