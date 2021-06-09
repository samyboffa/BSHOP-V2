import React from "react";
import { replaceWord } from "../functions/functions";
import "./GiftCardCard.css";

export const GiftCardCard = ({
    img,
    name,
    currentPrice,
    originalPrice,
    platform,
    imAdmin,
}) => {
    return (
        <div className="gCardCard">
            <div className="test">
                <img className="gCardCardImg" src={img} alt="" />
            </div>
            <h3 className="gCardCardTitle">{replaceWord(name)}</h3>
            <p className="gCardCarddescription">platform : {platform}</p>
            <div className="gCardCardBuyBox">
                <div className="gCardCardBuyBoxPrice">
                    <h4>{currentPrice} DT</h4>
                    <p className="PriceDiscount">
                        {Math.ceil(100 - (currentPrice * 100) / originalPrice)}%
                        OFF
                    </p>
                </div>
                <div className="gCardCardBuyNow">
                    <button className="gCardCardBuyNowButton">
                        {imAdmin ? "EDIT" : "VIEW"}
                    </button>
                </div>
            </div>
        </div>
    );
};
