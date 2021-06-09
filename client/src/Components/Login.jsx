import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, Redirect, useHistory } from "react-router-dom";
import mainLogo from "../images/logo2.png";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "./Loading";
import { getCurrentUser, login } from "../Redux/actions/user";

export const LoginSignUp = () => {
    useEffect(() => {
        dispatch(getCurrentUser());
        // eslint-disable-next-line
    }, []);
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const dispatch = useDispatch();
    const [mail, setmail] = useState("");
    const [password, setpassword] = useState("");
    const error = useSelector((state) => state.userReducer.error);
    const userLoading = useSelector((state) => state.userReducer.loading);
    const user = useSelector((state) => state.userReducer.user);
    const history = useHistory(); //for redirecting

    //function
    const LoginFunction = (e) => {
        dispatch(login({ email: mail, password: password }));
        e.preventDefault();
        if (user) {
            history.push("/");
        }
    };
    return isAuth ? (
        <Redirect to="/" />
    ) : userLoading ? (
        <Loading />
    ) : (
        <div className="loginPage">
            <img src={mainLogo} alt="" className="LoginMainLogo" />
            <h2 className="LoginTitle">ACCOUNT LOGIN</h2>
            <h5 className="responseInfo responseError">{error}</h5>
            <form className="loginBox" onSubmit={LoginFunction}>
                <input
                    type="text"
                    className="boxInput"
                    placeholder="Email Adress"
                    onChange={(e) => setmail(e.target.value)}
                />

                <input
                    type="password"
                    className="boxInput"
                    placeholder="Password"
                    onChange={(e) => setpassword(e.target.value)}
                />
                <p className="notAMember">
                    Not a Member ?{" "}
                    <Link className="toSignUp" to="signup">
                        {" "}
                        Sign-Up Now
                    </Link>
                </p>
                <button type="submit " className="boxInput boxInputSubmit">
                    LOGIN TO YOUR ACCOUNT
                </button>
            </form>
        </div>
        // <div className="loginPage">
        //     {registerySuccess ? (
        //         <div className="registerySuccess">
        //             {okListing}
        //             <h1>You Are Logged In </h1>

        //             <button
        //                 className="registerySuccessButton"
        //                 onClick={() => {
        //                     dispatch(clearUser());
        //                     history.push("/");
        //                 }}
        //             >
        //                 {" "}
        //                 Go To Home Page{" "}
        //             </button>
        //         </div>
        //     ) : null}
        //     <Link to="/">
        //         <div className="logoLoginPage">
        //             <img className="logoLogin" src={mainLogo} alt="" />
        //         </div>
        //     </Link>
        //     <div className="loginBox">
        //         <div className="loginTitle">Login to B-SHOP</div>
        //         <div className="loginInputs">
        //             <h5 className="responseInfo">{error}</h5>

        //             <form
        //                 action=""
        //
        //             >
        //                 <div className="mailLogin field">
        //                     <span className="SVGLogin">{user}</span>

        //                     <input
        //                         type="email"
        //                         name="email"
        //                         required
        //                         placeholder="email"
        //                     />
        //                 </div>

        //                 <div className="passwordLogin field">
        //                     <span className="SVGLogin">{lock}</span>

        //                     <input
        //                         type="password"
        //                         required
        //                         placeholder="password"
        //
        //                     />
        //                 </div>
        //                 <button type="submit" className="submitLogin">
        //                     {" "}
        //                     Login
        //                 </button>

        //
        //             </form>
        //         </div>
        //     </div>
        // </div>
    );
};
