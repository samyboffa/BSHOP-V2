import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { CartElement } from "./CartElement";

import { Paypal } from "./Paypal";
import { Loading } from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import { newOrder } from "../Redux/actions/orders";

export const Cart = () => {
    const dispatch = useDispatch();
    const [totalPrice, settotalPrice] = useState(0);
    const user = useSelector((state) => state.userReducer.user);
    const orderAdded = useSelector((state) => state.ordersReducer.orderAdded);
    let x = 0;
    useEffect(() => {
        user.cart.forEach((item) => {
            x = x + item.currentPrice * item.quantity;
        });
        settotalPrice(x);
    }, [user]);

    return !user.cart || user.Loading ? (
        <Loading />
    ) : (
        <>
            {" "}
            <Banner firstWord="SHOPPING" secondWord="CART" pathName="CART" />
            <div className="allCart">
                <table className="leftCart">
                    <thead className="leftCartTitles">
                        <th className="leftCarteTitleTops leftCartReview ">
                            Preview
                        </th>
                        <th className="leftCarteTitleTops leftCartName">
                            Name
                        </th>
                        <th className="leftCarteTitleTops leftCartPrice">
                            Price
                        </th>
                        <th className="leftCarteTitleTops">Quantity</th>
                        <th className="leftCarteTitleTops">SubTotal</th>
                        <th className="leftCarteTitleTops">Delete</th>
                    </thead>
                    <tbody className="cartBody">
                        {user.cart.length === 0 ? (
                            <div className="emptyCart">
                                <h1 className="emptyCartTitle">
                                    No Items In Cart
                                </h1>
                                <Link to="/">Go Back Shopping</Link>
                            </div>
                        ) : (
                            user.cart.map((element, key) => (
                                <CartElement productprops={element} key={key} />
                            ))
                        )}
                    </tbody>
                </table>
                <div className="cartRight">
                    <h1 className="rightCartTitle">Summary</h1>
                    <div className="precheckoutBox">
                        <div className="precheckoutBoxinfo">
                            <p>Items Number</p> <p>{user.cart.length}</p>
                        </div>
                        <hr className="cartSeparation" />
                        <div className="precheckoutBoxinfo">
                            {" "}
                            <p>Sub-Total</p>
                            <p> {totalPrice} DT</p>
                        </div>{" "}
                        <hr className="cartSeparation" />
                        <div className="checkoutBoxTotal">
                            <h2>TOTAL</h2>
                            <h2>{totalPrice} DT</h2>
                        </div>
                    </div>
                    {orderAdded ? (
                        <h4 className="OrderAdded">
                            Thank You For Your Purchase. An Email Was Sent with
                            All Details
                        </h4>
                    ) : null}
                    {user.cart.length !== 0 ? (
                        <div className="checkoutButtonBox">
                            <button
                                className="checkoutButton"
                                onClick={() =>
                                    dispatch(
                                        newOrder({
                                            clientId: user._id,
                                            products: user.cart,
                                            totalPrice: totalPrice,
                                        })
                                    )
                                }
                            >
                                PROCEED TO CHECKOUT
                            </button>
                        </div>
                    ) : null}
                    <div className="checkoutBoxPaypal">
                        <Paypal amount={Math.round(totalPrice / 3.2)} />
                    </div>
                </div>
            </div>
        </>
    );
};
