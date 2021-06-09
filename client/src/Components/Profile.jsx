import React, { useState } from "react";
import "./Profile.css";

import { useDispatch, useSelector } from "react-redux";
import { Loading } from "./Loading";
import Banner from "./Banner";
import { edit } from "../svg/svg";
import { updatePassword, updateUser } from "../Redux/actions/user";

export const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer.user);
    const loading = useSelector((state) => state.userReducer.loading);
    const error = useSelector((state) => state.userReducer.error);
    const userUpdated = useSelector((state) => state.userReducer.userUpdated);
    const passwordUpdated = useSelector(
        (state) => state.userReducer.passwordUpdated
    );

    //Display States
    const [inputShown, setinputShown] = useState("");
    const [passwordinputShown, setpasswordinputShown] = useState("");
    //local error state
    const [passwordDifferent, setpasswordDifferent] = useState(false);

    //new Inputs Profile
    const [newName, setnewName] = useState(user.name);
    const [newEmail, setnewEmail] = useState(user.email);
    const [newPhoneNumber, setnewPhoneNumber] = useState(user.phoneNumber);
    //new Inputs Password
    const [oldPassword, setoldPassword] = useState();
    const [newPassword, setnewPassword] = useState();
    const [newPasswordConfirmation, setnewPasswordConfirmation] = useState();
    //functions
    const handleInputShow = () => {
        inputShown === "" ? setinputShown("inputShow") : setinputShown("");
    };
    const handlePasswordInputShow = () => {
        passwordinputShown === ""
            ? setpasswordinputShown("inputShow")
            : setpasswordinputShown("");
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(
            updateUser({
                newName: newName,
                newEmail: newEmail,
                newPhoneNumber: newPhoneNumber,
            })
        );
    };
    const handlePasswordUpdate = (e) => {
        e.preventDefault();
        setpasswordDifferent(false);
        if (newPassword !== newPasswordConfirmation) {
            setpasswordDifferent(true);
        } else {
            dispatch(
                updatePassword({
                    oldPassword: oldPassword,
                    newPassword: newPassword,
                })
            );
        }
    };

    return loading ? (
        <Loading />
    ) : (
        <>
            <Banner firstWord="MY" secondWord="PROFILE" pathName="Profile" />
            <div className="updateUserError">{error ? error : null}</div>

            <div className="allProfilePage">
                <form className="UpdateUserForm" onSubmit={handleUpdate}>
                    <span
                        className="UpdateUserFormEditIcon"
                        onClick={handleInputShow}
                    >
                        {edit}
                    </span>
                    <h3 className="updateUserFormLabel">
                        <span className="updateUserFormLabelTitle">
                            User Name
                        </span>{" "}
                        <br />
                        <span className="updateUserFormLabelValue">
                            {user.name}
                        </span>
                    </h3>
                    <input
                        type="text"
                        className={`UpdateUserFormInputs ${inputShown}`}
                        defaultValue={user.name}
                        onChange={(e) => setnewName(e.target.value)}
                    />
                    <h3 className="updateUserFormLabel">
                        <span className="updateUserFormLabelTitle">
                            Email Adress
                        </span>{" "}
                        <br />
                        <span className="updateUserFormLabelValue">
                            {user.email}{" "}
                        </span>{" "}
                    </h3>{" "}
                    <input
                        type="text"
                        className={`UpdateUserFormInputs ${inputShown}`}
                        defaultValue={user.email}
                        onChange={(e) => setnewEmail(e.target.value)}
                    />
                    <h3 className="updateUserFormLabel">
                        <span className="updateUserFormLabelTitle">
                            Phone Number{" "}
                        </span>{" "}
                        <br />
                        <span className="updateUserFormLabelValue">
                            {user.phoneNumber}
                        </span>{" "}
                    </h3>{" "}
                    <input
                        type="text"
                        className={`UpdateUserFormInputs ${inputShown}`}
                        defaultValue={user.phoneNumber}
                        onChange={(e) => setnewPhoneNumber(e.target.value)}
                    />
                    <div className="successmsgupdateUser">
                        {userUpdated ? "Changes Saved" : null}
                    </div>
                    <button type="submit" className="UpdateUserFormSubmit">
                        {" "}
                        Save Changes
                    </button>
                </form>
                {/* second Form */}
                <form
                    className="UpdateUserForm"
                    onSubmit={handlePasswordUpdate}
                >
                    <span
                        className="UpdateUserFormEditIcon"
                        onClick={handlePasswordInputShow}
                    >
                        {edit}
                    </span>
                    <h3 className="updateUserFormLabel">
                        <span className="updateUserFormLabelTitle">
                            Old <span className="passwordWhite">Password</span>
                        </span>{" "}
                    </h3>
                    <input
                        type="text"
                        className={`UpdateUserFormInputs ${passwordinputShown}`}
                        placeholder="Old Password"
                        onChange={(e) => setoldPassword(e.target.value)}
                    />
                    <h3 className="updateUserFormLabel">
                        <span className="updateUserFormLabelTitle">
                            New <span className="passwordWhite">Password</span>
                        </span>{" "}
                    </h3>{" "}
                    <input
                        type="text"
                        className={`UpdateUserFormInputs ${passwordinputShown}`}
                        placeholder="New Password"
                        onChange={(e) => setnewPassword(e.target.value)}
                    />
                    <h3 className="updateUserFormLabel">
                        <span className="updateUserFormLabelTitle">
                            New{" "}
                            <span className="passwordWhite">
                                Password Confirmation
                            </span>
                        </span>{" "}
                        <br />
                    </h3>{" "}
                    <input
                        type="text"
                        className={`UpdateUserFormInputs ${passwordinputShown}`}
                        placeholder="New Password Confirmation"
                        onChange={(e) =>
                            setnewPasswordConfirmation(e.target.value)
                        }
                    />
                    <div className="passwordDifferent">
                        {passwordDifferent
                            ? "Password And Password Confirmation Are Different"
                            : null}
                    </div>
                    <div className="successmsgupdateUser">
                        {passwordUpdated ? "Password Saved Successfully" : null}
                    </div>
                    <button type="submit" className="UpdateUserFormSubmit">
                        {" "}
                        Change Password
                    </button>
                </form>
            </div>
        </>
    );
};
