import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { CartElement } from "./CartElement";
// eslint-disable-next-line
import { Paypal } from "./Paypal";
import { Loading } from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import d17 from "../images/logod17.png";
import runpay from "../images/logoRunpay.png";
import edinar from "../images/logoEdinar.png";

import { newOrder } from "../Redux/actions/orders";

export const Cart = () => {
    const dispatch = useDispatch();
    const [totalPrice, settotalPrice] = useState(0);
    const user = useSelector((state) => state.userReducer.user);
    const orderAdded = useSelector((state) => state.ordersReducer.orderAdded);
    let x = 0;
    useEffect(() => {
        user.cart.forEach((item) => {
            // eslint-disable-next-line
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
                            Thank You For Your Purchase. Please Send Your
                            Payment Receipt To One Of Our Social Channels. or to
                            bshopGames@gmail.com.
                        </h4>
                    ) : null}

                    <div className="paiementMethods">
                        We Are Currently Integrating In-App Payement. Meanwhile
                        You Can Pay Via :
                        <li className="PaiementList">
                            <img
                                src={edinar}
                                alt="d17"
                                className="paimenetlogo"
                            />{" "}
                            E-DINAR : 5359-4017-1801-5809{" "}
                        </li>
                        <li className="PaiementList">
                            {" "}
                            <img
                                src={d17}
                                alt="runpay"
                                className="paimenetlogo"
                            />{" "}
                            D17 : 54857558
                        </li>
                        <li className="PaiementList">
                            {" "}
                            <img
                                src={runpay}
                                alt="d17"
                                className="paimenetlogo"
                            />{" "}
                            RUNPAY : 54857558{" "}
                        </li>
                        Please Place Your Order. then Send The Payment Receipt
                        to bshopGames@gmail.com , To Our{" "}
                        <a
                            href="https://www.facebook.com/bshop4"
                            className="PaimentLink"
                        >
                            FACEBOOK
                        </a>{" "}
                        Page or Our{" "}
                        <a
                            className="PaimentLink"
                            href="https://www.instagram.com/bshopgames/"
                        >
                            INSTAGRAM
                        </a>
                        .
                        <br />
                        <button
                            className="checkoutButton"
                            onClick={() => {
                                if (user.cart.length !== 0) {
                                    dispatch(
                                        newOrder({
                                            clientId: user._id,
                                            products: user.cart,
                                            totalPrice: totalPrice,
                                        })
                                    );
                                }
                            }}
                        >
                            PLACE ORDER
                        </button>
                    </div>
                    {/* {user.cart.length !== 0 ? (
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
                    </div> */}
                </div>
            </div>
        </>
    );
};
