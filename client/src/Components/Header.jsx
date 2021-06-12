import React, { useEffect, useState } from "react";
import "./Header.css";
import { cart, arrowDown, menu } from "../svg/svg";
import { Link, useHistory } from "react-router-dom";
import mainLogo from "../images/logo2.png";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, logout } from "../Redux/actions/user";
import { getProducts } from "../Redux/actions/products";
import { Loading } from "./Loading";
import { getTopUp } from "../Redux/actions/topUp";

export default function Header() {
    //local states (display)
    // eslint-disable-next-line
    const [resultProducts, setresultProducts] = useState([1, 2]);
    const history = useHistory();
    //local states (data)
    const dispatch = useDispatch();
    // eslint-disable-next-line
    const [searchInput, setsearchInput] = useState("0000");
    const [windowPosition, setwindowPosition] = useState();
    const [headerModifiedDown, setheaderModifiedDown] = useState("");
    const [showDrop, setshowDrop] = useState("");
    const [showSideResponsive, setshowSideResponsive] = useState("");
    //redux states
    const products = useSelector((state) => state.productsReducer.products);
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const user = useSelector((state) => state.userReducer.user);
    const userLoading = useSelector((state) => state.userReducer.loading);
    const admin = useSelector((state) => state.userReducer.admin);
    //effect

    useEffect(() => {
        dispatch(getCurrentUser());
        dispatch(getProducts());
        dispatch(getTopUp());
    }, [dispatch]);
    useEffect(() => {
        setresultProducts(
            products.filter((el) =>
                el.name.toLowerCase().includes(searchInput.toLowerCase())
            )
        ); // eslint-disable-next-line
    }, [searchInput]);
    //functions
    window.addEventListener("scroll", () => {
        setwindowPosition(window.pageYOffset);
        if (windowPosition > 100) {
            setheaderModifiedDown("headerChangeNow");
        }
        if (windowPosition < 100) {
            setheaderModifiedDown("");
        }
    });

    return userLoading ? (
        <Loading />
    ) : (
        <div className={`allHeader ${headerModifiedDown}`}>
            {" "}
            <div className="headerIconBox">
                {" "}
                <Link className="HeaderIconLink" to="/">
                    <img className="headerIconImg" src={mainLogo} alt="" />
                </Link>{" "}
            </div>
            <div
                className={`responsiveNav ${showSideResponsive}`}
                onClick={() => setshowSideResponsive("")}
            >
                <div className="headerNavigation">
                    {" "}
                    <Link to="/topup">
                        {" "}
                        <li className="headerNavigationItems">TOP-UP</li>
                    </Link>
                    <Link to="/giftcards">
                        <li className="headerNavigationItems">GIFT CARDS</li>
                    </Link>
                </div>

                <div className="headerUserSearchCart">
                    {isAuth ? (
                        <Link to="/cart">
                            <li className="headerNavigationItems">
                                {cart}
                                {user.cart.length}
                            </li>
                        </Link>
                    ) : null}

                    <li
                        className="headerNavigationItems headerUserName"
                        onMouseOver={() => {
                            if (user) {
                                setshowDrop("dropdownUserShown");
                            }
                        }}
                    >
                        {user ? (
                            <span>
                                {arrowDown} {user.name}
                            </span>
                        ) : (
                            <Link to="/login">LOGIN</Link>
                        )}
                    </li>
                </div>
                {user ? (
                    <div
                        className={`dropdownUser ${showDrop}`}
                        onMouseLeave={() => setshowDrop("")}
                    >
                        <div className="dropDowntriangle"></div>
                        {admin ? (
                            <Link to="/adminPanel">
                                {" "}
                                <li className="dropDownUserAdmin dropDownItem">
                                    {" "}
                                    Admin
                                </li>
                            </Link>
                        ) : null}
                        <Link to="/Profile">
                            {" "}
                            <li className="dropDownUserProfile dropDownItem">
                                {" "}
                                Profile
                            </li>
                        </Link>
                        <Link to="/myOrders">
                            {" "}
                            <li className="dropDownUserOrders dropDownItem">
                                {" "}
                                Orders
                            </li>
                        </Link>{" "}
                        <Link to="/Notif">
                            {" "}
                            <li className="dropDownUserNotifications dropDownItem">
                                {" "}
                                Notifications
                            </li>
                        </Link>
                        <li
                            className="dropDownUserLogout dropDownItem"
                            onClick={() => dispatch(logout(history))}
                        >
                            LogOut
                        </li>
                    </div>
                ) : null}
            </div>{" "}
            <div
                className="openMenuIcon"
                onClick={() =>
                    showSideResponsive
                        ? setshowSideResponsive("")
                        : setshowSideResponsive("sideMenuShown")
                }
            >
                {menu}
            </div>
        </div>
    );
}
