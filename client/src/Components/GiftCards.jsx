import React, { useState, useEffect } from "react";
import { GiftCardCard } from "./GiftCardCard";
import "./GiftCards.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loading } from "./Loading";
import Banner from "./Banner";
export const GiftCards = () => {
    const loading = useSelector((state) => state.productsReducer.loading);
    const products = useSelector((state) => state.productsReducer.products);
    const [filteredProducts, setfilteredProducts] = useState([]);
    const [searchInput, setsearchInput] = useState("");
    const [platformFilter, setplatformFilter] = useState("");
    const [regionFilter, setregionFilter] = useState("");
    const [typeFilter, settypeFilter] = useState("");
    const [sort, setsort] = useState();

    //filter function
    const handleFilter = () => {
        setfilteredProducts(products);
        setfilteredProducts(
            products
                .filter(
                    (game) =>
                        game.name
                            .toUpperCase()
                            .includes(searchInput.toUpperCase()) &&
                        game.platform.includes(platformFilter) &&
                        game.type.includes(typeFilter) &&
                        game.region.includes(regionFilter)
                )
                .sort((a, b) =>
                    sort === "NEWEST"
                        ? a - b
                        : sort === "LTH"
                        ? a.currentPrice - b.currentPrice
                        : sort === "HTL"
                        ? b.currentPrice - a.currentPrice
                        : sort === "DEALS"
                        ? Math.ceil(
                              100 - (b.currentPrice * 100) / b.originalPrice
                          ) -
                          Math.ceil(
                              100 - (a.currentPrice * 100) / a.originalPrice
                          )
                        : null
                )
        );
    };
    const clearFilter = () => {
        setfilteredProducts(products);
        setsearchInput("");
        setplatformFilter("");
        setregionFilter("");
        settypeFilter("");
        setsort("");
    };
    useEffect(() => {
        setfilteredProducts(products);
    }, [products]);

    return loading || !filteredProducts ? (
        <Loading />
    ) : (
        <>
            <Banner firstWord="GIFT" secondWord="CARDS" pathName="GIFT CARDS" />
            <div className="giftCardsPageAll">
                {/* filter BOX */}

                <form
                    className="giftCardsFilterBox"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleFilter();
                    }}
                >
                    <div className="filterBoxHeader">
                        <h2 className="filterBoxTitle"> Filters</h2>
                        <button
                            type="reset"
                            className="filterBoxClear"
                            onClick={() => clearFilter()}
                        >
                            {" "}
                            Clear All
                        </button>
                    </div>
                    <div className="filterBoxBody">
                        <div className="filterBoxInptBox">
                            <p className="filterBoxInptBoxSubTitle">
                                KeyWord :{" "}
                            </p>
                            <input
                                type="text"
                                className="filterBoxInputInput"
                                placeholder="KeyWord"
                                onChange={(e) => setsearchInput(e.target.value)}
                            />
                        </div>
                        <div className="filterBoxInptBox">
                            <p className="filterBoxInptBoxSubTitle">
                                Sort By :{" "}
                            </p>
                            <select
                                onChange={(e) => setsort(e.target.value)}
                                className="filterBoxInputInput"
                            >
                                <option value="NEWEST">Newest</option>
                                <option value="LTH">Price Low To High</option>
                                <option value="HTL">Price High To Low</option>
                                <option value="DEALS">Best Deals</option>
                            </select>
                        </div>
                        <div className="filterBoxInptBox">
                            <p className="filterBoxInptBoxSubTitle">
                                platform :{" "}
                            </p>
                            <div
                                className="filterBoxRadio"
                                onChange={(e) =>
                                    setplatformFilter(e.target.value)
                                }
                            >
                                {" "}
                                <label className="filterBoxRadiocontainer">
                                    <input
                                        className="checkBoxRadio"
                                        type="radio"
                                        name="platform"
                                        value="PS4-PS5"
                                    />
                                    Playstation
                                </label>{" "}
                                <label className="filterBoxRadiocontainer">
                                    <input
                                        className="checkBoxRadio"
                                        type="radio"
                                        name="platform"
                                        value="XBOX"
                                    />
                                    Microsoft Xbox
                                </label>{" "}
                                <label className="filterBoxRadiocontainer">
                                    <input
                                        className="checkBoxRadio"
                                        type="radio"
                                        name="platform"
                                        value="Android"
                                    />
                                    Android
                                </label>{" "}
                                <label className="filterBoxRadiocontainer">
                                    <input
                                        className="checkBoxRadio"
                                        type="radio"
                                        name="platform"
                                        value="STEAM"
                                    />
                                    Steam
                                </label>{" "}
                            </div>
                        </div>
                        <div
                            className="filterBoxInptBox"
                            onChange={(e) => settypeFilter(e.target.value)}
                        >
                            <p className="filterBoxInptBoxSubTitle">Type : </p>
                            <div className="filterBoxRadio">
                                {" "}
                                <label className="filterBoxRadiocontainer">
                                    <input
                                        className="checkBoxRadio"
                                        type="radio"
                                        name="type"
                                        value="GC"
                                    />
                                    Gift Cards
                                </label>{" "}
                                <label className="filterBoxRadiocontainer">
                                    <input
                                        className="checkBoxRadio"
                                        type="radio"
                                        name="type"
                                        value="SUB"
                                    />
                                    Subscriptions
                                </label>{" "}
                                <label className="filterBoxRadiocontainer">
                                    <input
                                        className="checkBoxRadio"
                                        type="radio"
                                        name="type"
                                        value="Android"
                                    />
                                    Games
                                </label>{" "}
                            </div>
                        </div>
                        <div
                            className="filterBoxInptBox"
                            onChange={(e) => setregionFilter(e.target.value)}
                        >
                            <p className="filterBoxInptBoxSubTitle">
                                Region :{" "}
                            </p>
                            <div className="filterBoxRadio">
                                {" "}
                                <label className="filterBoxRadiocontainer">
                                    <input
                                        className="checkBoxRadio"
                                        type="radio"
                                        name="region"
                                        value="USA"
                                    />
                                    United States
                                </label>{" "}
                                <label className="filterBoxRadiocontainer">
                                    <input
                                        className="checkBoxRadio"
                                        type="radio"
                                        name="region"
                                        value="FR"
                                    />
                                    France
                                </label>{" "}
                            </div>
                        </div>
                    </div>
                    <button className="FilterBoxApplyFilters" type="submit">
                        {" "}
                        APPLY FILTERS
                    </button>
                </form>

                {/* GIFT CARDS */}
                <div className="giftCardsAllCards">
                    {filteredProducts.map((product, index) => (
                        <Link to={`/giftcards/${product._id}`}>
                            <GiftCardCard
                                key={index}
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
        </>
    );
};
