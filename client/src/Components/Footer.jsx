import React from "react";
import "./Footer.css";
import footerLogo from "../images/logo2.png";
import {
    bannerArrow,
    facebook,
    googlePlus,
    instagram,
    mail,
    phone,
    twitter,
    youtube,
} from "../svg/svg";

export default function Footer() {
    return (
        <div className="footerPage">
            <div className="footerUpBlock">
                <div className="footerAbout footerSection">
                    <h2 className="footerTitle footertitleMargin">ABOUT US</h2>
                    <p className="footerPar">
                        B-SHOP is The first Gaming Store In Tunisia. With +10000
                        Orders, We Became The Most Trustfull Gaming Web Site in
                        Tunisia. We are highly specialized shop selling
                        entertainment products. We Provide all types of gift
                        card (play store, psn, xbox, Itunes ...), In-Game
                        currency TOP-UP (fortnite Vbucks, Pubg UC, LOL RP ...),
                        And all types of accounts (netflix, spotify, discord
                        ...). <br />
                        B-SHOP : ALL YOUR GAMES .. IN ONE PLACE
                    </p>
                </div>
                <div className="footerBestSeller footerSection">
                    <h2 className="footerTitle">PAYMENT SUPPORTED</h2>
                    <li className="footerPar"> {bannerArrow} E-DINAR</li>
                    <li className="footerPar"> {bannerArrow} D17</li>
                    <li className="footerPar"> {bannerArrow} RUNPAY</li>
                    <li className="footerPar"> {bannerArrow} SOBFLOUS</li>
                    <li className="footerPar"> {bannerArrow} SWARED</li>
                </div>
                <div className="footerContact footerSection">
                    <h2 className="footerTitle">CONTACT US</h2>
                    <li className="footerPar">{phone} Tel : 54857558</li>
                    <li className="footerPar">
                        {" "}
                        {mail} Mail : bshopgames@gmail.com
                    </li>
                </div>
            </div>
            <hr className="footerSeparation" />
            <div className="footerInside">
                {" "}
                <img className="footerLogo" src={footerLogo} alt="" />{" "}
                <div className="footercontactsLogo">
                    <a
                        href="https://www.facebook.com/bshop4"
                        className="footerContactOneLogo"
                    >
                        {facebook}
                    </a>
                    <a
                        href="https://www.instagram.com/bshopgames/"
                        className="footerContactOneLogo"
                    >
                        {instagram}
                    </a>
                    <a
                        href="https://www.youtube.com/"
                        className="footerContactOneLogo"
                    >
                        {youtube}
                    </a>
                    <a
                        href="https://twitter.com/"
                        className="footerContactOneLogo"
                    >
                        {twitter}
                    </a>

                    <a
                        href="https://www.google.com/"
                        className="footerContactOneLogo"
                    >
                        {googlePlus}
                    </a>
                </div>
            </div>
            <h2 className="Copiright">
                © Copyrights 2021 B-SHOP - All Rights Reserved
            </h2>
        </div>
    );
}
