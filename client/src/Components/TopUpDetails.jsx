import axios from "axios";
import React, { useEffect, useState } from "react";

import "./TopUpDetails.css";
import worldIcon from "../images/world.png";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import { Loading } from "./Loading";
import { getCurrentUser } from "../Redux/actions/user";

export const TopUpDetails = (match) => {
    const dispatch = useDispatch();
    const [topUp, settopUp] = useState();
    const [topUpId, settopUpId] = useState();
    const [selectedValue, setselectedValue] = useState();
    const [selectedPrice, setselectedPrice] = useState();
    const [accountOrId, setaccountOrId] = useState();
    const [credentials, setcredentials] = useState({
        id: "",
        accountType: "",
        login: "",
        password: "",
    });
    const [errMessage, seterrMessage] = useState();

    useEffect(() => {
        axios
            .get("/getTopUp", {
                headers: { searchName: match.match.params.gameName },
            })
            .then((data) => {
                settopUp(data.data);
                setaccountOrId(data.data.accountOrId);
                settopUpId(data.data._id);
            })
            .catch((err) => console.log(err)); // eslint-disable-next-line
    }, []);
    const user = useSelector((state) => state.userReducer.user);

    return topUp !== undefined ? (
        <div>
            <Banner
                secondWord={topUp.gameName}
                pathName="TOP UP"
                secondLink="/topup"
                pathName2={topUp.gameName}
            />

            <Header />

            <div className="fortniteTopUp">
                <div className="topUpHeader">
                    <div>
                        <img
                            className="topUpImg"
                            src={topUp.img}
                            alt="fortnite"
                        />
                    </div>
                    <div className="topUpNameAndInfo">
                        <h1 className="topUpName">{`${topUp.gameName} ${topUp.currency}`}</h1>
                        <div className="topUpRegion">
                            <div>
                                <img
                                    className="regionIcon"
                                    src={worldIcon}
                                    alt=""
                                />
                            </div>
                            <h3> {topUp.region}</h3>
                        </div>
                        <p className="topUpDescription">{topUp.description}</p>
                    </div>
                </div>
                <hr />
                <h1 className="topUpTitle">Select Top-Up Amount</h1>
                <div className="topUpBody">
                    <form className="choosingAmount">
                        {topUp !== undefined ? (
                            topUp.topUp.map((el, key) => (
                                <label className="choosingCheck" key={key}>
                                    {" "}
                                    <input
                                        type="radio"
                                        name="value"
                                        onClick={() => {
                                            setselectedValue(el.number);
                                            setselectedPrice(el.price);
                                        }}
                                    />
                                    <h5>{`${el.number} ${topUp.currency}`}</h5>
                                    <h2>{el.price} DT</h2>
                                </label>
                            ))
                        ) : (
                            <Loading />
                        )}
                    </form>

                    <div className="formandTotalLeft">
                        <form
                            className="topUpForm"
                            onSubmit={(e) => {
                                seterrMessage("");
                                e.preventDefault();
                                axios
                                    .post(
                                        "/addToCartTopUp",
                                        {
                                            _id: topUpId,
                                            credentials: credentials,
                                            gameTopUp:
                                                match.match.params.gameName,
                                            amount: selectedValue,
                                            price: selectedPrice,
                                        },
                                        {
                                            headers: {
                                                authorization:
                                                    localStorage.getItem(
                                                        "token"
                                                    ),
                                            },
                                        }
                                    )
                                    .then((res) => {
                                        if (res.status === 208) {
                                            seterrMessage(res.data);
                                        }
                                        dispatch(getCurrentUser());
                                    })
                                    .catch((err) => console.log(err));
                            }}
                        >
                            <div>
                                {accountOrId === "id" ? (
                                    <label>
                                        {" "}
                                        Account ID :{" "}
                                        <input
                                            required={true}
                                            className="topUpInput"
                                            type="text"
                                            name="accountType"
                                            placeholder="Account ID "
                                            onChange={(e) => {
                                                setcredentials({
                                                    ...credentials,
                                                    id: e.target.value,
                                                });
                                            }}
                                        />
                                    </label>
                                ) : (
                                    <div>
                                        <label>
                                            Login Type :
                                            <input
                                                required={true}
                                                className="topUpInput"
                                                type="text"
                                                name="LoginType"
                                                placeholder="fb, google, PSN, Xbox ..."
                                                onChange={(e) => {
                                                    setcredentials({
                                                        ...credentials,
                                                        accountType:
                                                            e.target.value,
                                                    });
                                                }}
                                            />
                                        </label>

                                        <label>
                                            {" "}
                                            Login :{" "}
                                            <input
                                                required={true}
                                                className="topUpInput"
                                                type="text"
                                                name="accountType"
                                                placeholder="Login"
                                                onChange={(e) => {
                                                    setcredentials({
                                                        ...credentials,
                                                        login: e.target.value,
                                                    });
                                                }}
                                            />
                                        </label>

                                        <label>
                                            {" "}
                                            password :{" "}
                                            <input
                                                required={true}
                                                className="topUpInput"
                                                type="text"
                                                name="accountType"
                                                placeholder="password"
                                                onChange={(e) => {
                                                    setcredentials({
                                                        ...credentials,
                                                        password:
                                                            e.target.value,
                                                    });
                                                }}
                                            />
                                        </label>
                                    </div>
                                )}
                            </div>

                            <div type="submit" className="totalAndBuy">
                                <div className="total">
                                    <h2>TOTAL</h2>
                                    <h2>{selectedPrice} DT</h2>
                                </div>
                                <h4 className="topUpErrMessage">
                                    {errMessage}
                                </h4>
                                <div className="buyButtonTopUp">
                                    <button disabled={user ? false : true}>
                                        {user ? "Buy" : "Please Login To Buy"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <h1>Loading</h1>
    );
};
