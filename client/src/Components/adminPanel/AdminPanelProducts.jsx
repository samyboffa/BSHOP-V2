import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../Redux/actions/products";
import Banner from "../Banner";
import { GiftCardCard } from "../GiftCardCard";
import { Loading } from "../Loading";

import "./AdminPanelProducts.css";

export const AdminPanelProducts = () => {
    const dispatch = useDispatch();
    const [searchField, setsearchField] = useState("");

    useEffect(() => {
        dispatch(getProducts());
        // eslint-disable-next-line
    }, []);
    const allProducts = useSelector((state) => state.productsReducer.products);
    const loadingProducts = useSelector(
        (state) => state.productsReducer.loading
    );

    const [filteredProducts, setfilteredProducts] = useState(allProducts);

    useEffect(() => {
        setfilteredProducts(
            allProducts.filter((el) =>
                el.name.toUpperCase().includes(searchField.toUpperCase())
            )
        );
    }, [searchField]);

    return loadingProducts ? (
        <Loading />
    ) : (
        <>
            <Banner
                firstWord="PRODUCTS"
                secondWord="MANAGEMENT"
                pathName="ADMIN DASHBOARD"
                secondLink="adminPanel"
                pathName2="Products Managament"
            />
            <div className="adminPanelProductsPage">
                <Link to="AdminPanelAddProduct" className="adminLinkAdd">
                    <button className="adminAddProductButton">
                        {" "}
                        ADD NEW PRODUCT
                    </button>
                </Link>
                <div className="adminSearchField">
                    <input
                        type="text"
                        placeholder="Search For The Item To Edit"
                        onChange={(e) => {
                            setsearchField(e.target.value);
                        }}
                    />
                </div>
                <div className="adminAllCards">
                    {!filteredProducts ? (
                        <Loading />
                    ) : (
                        filteredProducts.map((product, index) => (
                            <Link to={`/adminGiftCard/${product._id}`}>
                                <GiftCardCard
                                    key={index}
                                    id={product._id}
                                    img={product.img}
                                    platform={product.platform}
                                    currentPrice={product.currentPrice}
                                    originalPrice={product.originalPrice}
                                    name={product.name}
                                    imAdmin={true}
                                />
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};
