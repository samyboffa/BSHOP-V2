import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Games.css";
import { GiftCardCard } from "./GiftCardCard";

export const Games = () => {
    const games = useSelector((state) =>
        state.productsReducer.products.filter((el) => el.type === "GAME")
    );
    useEffect(() => {}, []);

    return (
        <div className="totalGameCards">
            <div className="totalGamesCardsTitleBox">
                <h1 className="totalGamesCardsTitle">
                    OUR <span className="TitleOrange">GAMES</span>{" "}
                </h1>
                <div className="TitleUnderline"></div>
            </div>

            <div className="totalGameCardsallCards">
                {games.map((product, index) =>
                    index < 8 ? (
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
                    ) : null
                )}
            </div>
        </div>
    );
};
