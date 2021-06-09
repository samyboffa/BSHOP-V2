import { Loading } from "./Loading";
import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./SignUp.css";
import mainLogo from "../images/logo2.png";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, register } from "../Redux/actions/user";

export const SignUp = () => {
    //form values
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCurrentUser());
        // eslint-disable-next-line
    }, []);

    const [fullName, setfullName] = useState("");
    const [mail, setmail] = useState("");
    const [password, setpassword] = useState("");
    const [passwordAgain, setpasswordAgain] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [resError, setresError] = useState(); //error message front

    //redux states
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const error = useSelector((state) => state.userReducer.error); //error message front
    const userLoading = useSelector((state) => state.userReducer.loading);
    const registerySuccess = useSelector((state) => state.userReducer.user);
    //functions
    const handleRegister = (e) => {
        setresError("");
        e.preventDefault();
        if (password === passwordAgain) {
            dispatch(
                register({
                    name: fullName,
                    email: mail,
                    password: password,
                    phoneNumber: phoneNumber,
                })
            );
        } else {
            setresError("Password & Confirmation are different");
        }
    };

    return isAuth ? (
        <Redirect to="/" />
    ) : userLoading ? (
        <Loading />
    ) : (
        <div className="signUpPage">
            <img src={mainLogo} alt="" className="LoginMainLogo" />
            <h2 className="LoginTitle">CREATE ACCOUNT</h2>
            <h5 className="responseInfo SignUpSuccessMsg">
                {registerySuccess === "USER_REGISTERED" ? (
                    <span>
                        You Are Successfully Registered...{" "}
                        <Link className="toLoginAftersuccess" to="/login">
                            LOGIN NOW
                        </Link>
                    </span>
                ) : null}
            </h5>
            <h5 className="responseInfo" className="responseError">
                {error ? error : null}
                {resError ? resError : null}
            </h5>
            <form className="loginBox" onSubmit={handleRegister}>
                <input
                    required
                    type="text"
                    className="boxInput"
                    placeholder="UserName"
                    onChange={(e) => setfullName(e.target.value)}
                />
                <input
                    required
                    type="text"
                    className="boxInput"
                    placeholder="Email Adress"
                    onChange={(e) => setmail(e.target.value)}
                />

                <input
                    required
                    type="password"
                    className="boxInput"
                    placeholder="Password"
                    onChange={(e) => setpassword(e.target.value)}
                />
                <input
                    required
                    type="password"
                    className="boxInput"
                    placeholder="Confirm Password"
                    onChange={(e) => setpasswordAgain(e.target.value)}
                />
                <input
                    required
                    type="tel"
                    className="boxInput"
                    placeholder="Phone Number"
                    onChange={(e) => setphoneNumber(e.target.value)}
                />
                <p className="notAMember">
                    Already a Member ?{" "}
                    <Link className="toLogin" to="/login">
                        {" "}
                        Login Now
                    </Link>
                </p>
                <button type="submit" className="boxInput boxInputSubmit">
                    CREATE YOUR ACCOUNT
                </button>
            </form>
        </div>

        /* {registerySuccess ? (
                <div className="registerySuccess">
                    {okListing}
                    <h1>You Are Successfully Registered </h1>
                    <button
                        className="registerySuccessButton"
                        onClick={() => {
                            dispatch(clearUser());
                            history.push("/login");
                        }}
                    >
                        {" "}
                        Go To Login{" "}
                    </button>
                </div>
            ) : null}
            <Link to="/">
                <div className="logoSignUpPage">
                    <img className="logoSignUp" src={mainLogo} alt="" />
                </div>
            </Link>
            <div className="SignUpBox">
                <div className="SignUpTitle">Sign Up to B-SHOP</div>
                <div className="SignUpInputs">
                    {/* the error message to be shown */
        /* 

                    <form
                        action="/login"
                        onSubmit={(e) => {
                            setresError("");
                            e.preventDefault();
                            if (password === passwordAgain) {
                                dispatch(
                                    register({
                                        name: fullName,
                                        email: mail,
                                        password: password,
                                        phoneNumber: phoneNumber,
                                    })
                                );
                            } else {
                                setresError(
                                    "Password & Confirmation are different"
                                );
                            }
                        }}
                    >
                        <div className="nameSignUp field">
                            <span className="SVGSignUp">{user}</span>

                            <input
                                type="text"
                                name="name"
                                required
                                
                                placeholder="Full-Name"
                            />
                        </div>
                        <div className="mailSignUp field">
                            <span className="SVGSignUp">{user}</span>

                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="email"
                            />
                        </div>

                        <div className="passwordSignUp field">
                            <span className="SVGSignUp">{lock}</span>

                            <input
                                type="password"
                                required
                                placeholder="password"
                            />
                        </div>
                        <div className="passwordConfirmSignUp field">
                            <span className="SVGSignUp">{lock}</span>

                            <input
                                type="password"
                                required
                                
                                placeholder="Confirm Password"
                            />
                        </div>
                        <div className="phoneNumberSignUp field">
                            <span className="SVGSignUp">{phone}</span>

                            <input
                                type="text"
                                required
X                                placeholder="Phone Number"
                            />
                        </div>
                        <button
                            type="submit"
                            className="submitSignUp"
                            onClick={() => {}}
                        >
                            {" "}
                            SignUp
                        </button>

                        
                    </form>
                </div>
            </div> */
    );
};
