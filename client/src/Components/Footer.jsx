import React from "react";
import "./Footer.css";
import footerLogo from "../images/logo2.png";
import {
    bannerArrow,
    facebook,
    googlePlus,
    instagram,
    twitter,
    youtube,
} from "../svg/svg";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footerPage">
            <div className="footerUpBlock">
                <div className="footerAbout footerSection">
                    <h2 className="footerTitle">ABOUT US</h2>
                    <p className="footerPar">
                        B-SHOP is The first Gaming Store In Tunisia. With +10000
                        Orders, We Became The Most Trustfull Gaming Web Site. We
                        are highly specialized shops selling entertainment
                        products to a targeted niche. Spanning a range of
                        niches, from video games to living room games to role
                        playing games, well-managed game stores can attract a
                        very loyal customer base.
                    </p>
                </div>
                <div className="footerBestSeller footerSection">
                    <h2 className="footerTitle">BEST SELLERS</h2>
                    <li className="footerPar">
                        {" "}
                        {bannerArrow} Fortnite VBucks
                    </li>
                    <li className="footerPar">
                        {" "}
                        {bannerArrow} Free Fire Diamonds
                    </li>
                    <li className="footerPar"> {bannerArrow} GTA V</li>
                    <li className="footerPar"> {bannerArrow} PES 2021</li>
                    <li className="footerPar"> {bannerArrow} FIFA 2021</li>
                </div>
                <div className="footerContact footerSection">
                    <h2 className="footerTitle">CONTACT US</h2>
                    <li className="footerPar">{bannerArrow} Tel : 54857558</li>
                    <li className="footerPar">
                        {" "}
                        {bannerArrow} Mail : bshopgames@gmail.com
                    </li>
                </div>
            </div>
            <hr className="footerSeparation" />
            <div className="footerInside">
                {" "}
                <img className="footerLogo" src={footerLogo} alt="" />{" "}
                <div className="footercontactsLogo">
                    <Link className="footerContactOneLogo">{facebook}</Link>
                    <Link className="footerContactOneLogo">{instagram}</Link>
                    <Link className="footerContactOneLogo">{youtube}</Link>
                    <Link className="footerContactOneLogo">{twitter}</Link>

                    <Link className="footerContactOneLogo">{googlePlus}</Link>
                </div>
            </div>
            <h2 className="Copiright">
                © Copyrights 2021 B-SHOP - All Rights Reserved
            </h2>
        </div>
    );
}
