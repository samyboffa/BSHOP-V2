import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import { useSelector } from "react-redux";
import "./Search.css";
import { Loading } from "./Loading";
import { Link } from "react-router-dom";
import { GiftCardCard } from "./GiftCardCard";

export default function Search({ match }) {
    const products = useSelector((state) => state.productsReducer.products);
    const [filteredProducts, setfilteredProducts] = useState();
    useEffect(() => {
        if (products) {
            setfilteredProducts(
                products.filter((product) =>
                    product.name
                        .toLowerCase()
                        .includes(match.params.searchInput.toLowerCase())
                )
            );
        } // eslint-disable-next-line
    }, [products]);
    return !filteredProducts ? (
        <Loading />
    ) : (
        <div className="totalSearchPage">
            <Banner firstWord="RELATED" secondWord="SEARCH" pathName="SEARCH" />
            <div className="SearchgiftCardsAllCards">
                {filteredProducts.map((product, index) => (
                    <Link to={`/giftcards/${product._id}`} key={index}>
                        <GiftCardCard
                            img={product.img}
                            currentPrice={product.currentPrice}
                            originalPrice={product.originalPrice}
                            name={product.name}
                            platform={product.platform}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
