import React from "react";
import { Link } from "react-router-dom";
import { bannerArrow, home } from "../svg/svg";
import "./Banner.css";

export default function Banner({
    firstWord,
    secondWord,
    secondLink,
    pathName,
    pathName2,
}) {
    return (
        <div className="totalBanner">
            <h1 className="BannerTitle">
                {firstWord}{" "}
                <span className="BannerTitleOrange">{secondWord}</span>{" "}
            </h1>
            <div className="BannerPath">
                <div>{home}</div>
                <Link to="/">Home</Link>
                <div> {bannerArrow}</div>
                <Link to={secondLink}>{pathName}</Link>
                {pathName2 ? (
                    <>
                        {" "}
                        <div> {bannerArrow}</div>
                        <div>{pathName2}</div>
                    </>
                ) : null}
            </div>
        </div>
    );
}
