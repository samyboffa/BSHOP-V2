import React, { useEffect } from "react";
import Header from "./Header";
import "./GiftCardDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "./Loading";
import { addToCart } from "../Redux/actions/user";
import { getSingleProduct } from "../Redux/actions/products";

export const GiftCardDetail = ({ match }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSingleProduct(match.params.id));
        // eslint-disable-next-line
    }, []);

    const product = useSelector((state) => state.productsReducer.singleProduct);
    const addError = useSelector((state) => state.userReducer.error);
    const isAuth = useSelector((state) => state.userReducer.isAuth);

    const addedToCart = useSelector((state) => state.userReducer.addedToCart);

    return (
        <div>
            <Header />
            {!product || !product.region ? (
                <Loading />
            ) : (
                <div className="gcDetails">
                    <div className="gcProduct">
                        <div className="productDetailImgDescription">
                            <img
                                src={product.img}
                                alt=""
                                className="productDetailsImg"
                            />
                            <div className="productDetailsDescription">
                                <h3 className="productDetailsDescriptionName">
                                    {" "}
                                    {product.name}
                                </h3>
                                <h4 className="productDetailRegion">
                                    Region : {product.region.split(" ")[0]}
                                </h4>
                                <h4 className="productDetailStore">
                                    platform :{product.platform}
                                </h4>
                            </div>
                        </div>
                        <div className="productDetailPriceBuyBox">
                            <h1 className="productDetailPrice">
                                {product.currentPrice} DT
                            </h1>
                            <div className="productDetailOldPriceAndDiscount">
                                <h4 className="productDetailOldPrice">
                                    {" "}
                                    {product.originalPrice} DT
                                </h4>
                                <h4 className="productDetailDiscount">
                                    {Math.ceil(
                                        100 -
                                            (product.currentPrice * 100) /
                                                product.originalPrice
                                    )}
                                    % OFF
                                </h4>
                            </div>
                            {!isAuth ? (
                                <h4 className="alreadyInCart">
                                    Please Login To Proceed
                                </h4>
                            ) : addError ? (
                                <h4 className="alreadyInCart">{addError}</h4>
                            ) : null}
                            {addedToCart ? (
                                <h4 className="addedToCart">
                                    Product Added To Cart
                                </h4>
                            ) : null}
                            <button
                                className="productDetailBuyBox"
                                disabled={isAuth ? false : true}
                                onClick={() => {
                                    dispatch(
                                        addToCart({
                                            newProduct: {
                                                ...product,
                                                quantity: 1,
                                            },
                                        })
                                    );
                                }}
                            >
                                BUY NOW
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
