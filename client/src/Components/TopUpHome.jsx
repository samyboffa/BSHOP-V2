import React from "react";
import "./TopUpHome.css";
import fortniteLogo from "../images/fortniteLogo.jpg";
import pubgLogo from "../images/pubgLogo.jpg";
import ffLogo from "../images/ffLogo.jpg";
import codMobileLogo from "../images/codMobileLogo.jpg";
import codWarzoneLogo from "../images/codWarzoneLogo.jpg";
import valorantLogo from "../images/valorantLogo.jpg";
import lolLogo from "../images/lolLogo.jpg";
import robloxLogo from "../images/robloxLogo.jpg";
import { Link } from "react-router-dom";

export const TopUpHome = () => {
    return (
        <>
            <div className="totalGamesCardsTitleBox">
                <h1 className="totalGamesCardsTitle">
                    TOP <span className="TitleOrange">UP</span>{" "}
                </h1>
                <div className="TitleUnderline"></div>
            </div>
            <div className="topUpHome">
                <div className="topUpCards">
                    <Link to="/topup/Fortnite" className="topUpCard fortnite">
                        {" "}
                        <div className="logoTopUp">
                            <img src={fortniteLogo} alt="" />
                        </div>
                        <h3> Fortnite</h3>{" "}
                    </Link>

                    <Link to="/topup/PUBGMobile" className="topUpCard pubg">
                        {" "}
                        <div className="logoTopUp">
                            <img src={pubgLogo} alt="" />
                        </div>
                        <h3> PUBG</h3>{" "}
                    </Link>

                    <Link to="/topup/FreeFire" className="topUpCard ff">
                        {" "}
                        <div className="logoTopUp">
                            <img src={ffLogo} alt="" />
                        </div>
                        <h3> Free Fire</h3>{" "}
                    </Link>
                    <Link to="/topup/CODMobile" className="topUpCard codMobile">
                        {" "}
                        <div className="logoTopUp">
                            <img src={codMobileLogo} alt="" />
                        </div>
                        <h3> COD (Mobile) </h3>{" "}
                    </Link>
                    <Link
                        to="/topup/CODWarzone"
                        className="topUpCard codWarzone"
                    >
                        {" "}
                        <div className="logoTopUp">
                            <img src={codWarzoneLogo} alt="" />
                        </div>
                        <h3> COD (Warzone) </h3>{" "}
                    </Link>
                    <Link to="/topup/Valorant" className="topUpCard valorant">
                        {" "}
                        <div className="logoTopUp">
                            <img src={valorantLogo} alt="" />
                        </div>
                        <h3> Valorant </h3>
                    </Link>

                    <Link to="/topup/LeagueOfLegends" className="topUpCard lol">
                        <div className="logoTopUp">
                            <img src={lolLogo} alt="" />
                        </div>
                        <h3> League Of Legends </h3>
                    </Link>

                    <Link to="/topup/ROBLOX" className="topUpCard roblox">
                        <div className="logoTopUp">
                            <img src={robloxLogo} alt="" />
                        </div>
                        <h3> ROBLOX </h3>{" "}
                    </Link>
                </div>
            </div>
        </>
    );
};
