import React, { useEffect, useState } from "react";
import { bin, moin, plus } from "../svg/svg";
import "./CartElement.css";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCartQuantity } from "../Redux/actions/user";
import { Loading } from "./Loading";

export const CartElement = ({ productprops }) => {
    const dispatch = useDispatch();
    const [productSubTotal, setProductSubTotal] = useState(
        productprops.currentPrice * productprops.quantity
    );
    useEffect(() => {
        setProductSubTotal(productprops.currentPrice * productprops.quantity);
    }, [productprops]);

    return !productprops ? (
        <Loading />
    ) : (
        <tr className="cartElt">
            <img className="cartEltImg" src={productprops.img} alt="" />

            <td className="cartEltName">{productprops.name}</td>

            <td className="cartEltPrice">{productprops.currentPrice}DT</td>

            <td className="plusMoin">
                <button
                    className="CartEltMoin CartEltButton"
                    onClick={() => {
                        dispatch(
                            updateCartQuantity({
                                id: productprops._id,
                                operation: "minus",
                            })
                        );
                    }}
                >
                    {" "}
                    {moin}{" "}
                </button>
                <p>{productprops.quantity}</p>
                <button
                    className="CartEltPlus CartEltButton"
                    onClick={() => {
                        dispatch(
                            updateCartQuantity({
                                id: productprops._id,
                                operation: "plus",
                            })
                        );
                    }}
                >
                    {" "}
                    {plus}{" "}
                </button>
            </td>

            <td className="cartEltSubTotal">{productSubTotal}DT</td>

            <td
                className="cartEltRemove"
                onClick={() => {
                    dispatch(
                        removeFromCart({ gameToRemove: productprops._id })
                    );
                }}
            >
                {" "}
                {bin}
            </td>
        </tr>
    );
};
