import React from "react";
import { useSelector } from "react-redux";
import Banner from "./Banner";
import { Loading } from "./Loading";
import "./MyNotifications.css";

export default function MyNotifications() {
    const notif = useSelector((state) => state.userReducer.user.notifications);
    const notifLoading = useSelector((state) => state.userReducer.loading);

    return notifLoading ? (
        <Loading />
    ) : (
        <>
            <Banner
                firstWord="MY"
                secondWord="Notifications"
                pathName="Notifications"
            />
            {notif.length === 0 ? (
                <div className="emptyOrders">
                    {" "}
                    <span>
                        No Notifications <br />{" "}
                    </span>
                </div>
            ) : (
                <div className="allNotif">
                    {notif.reverse().map((el, index) => (
                        <div className="notifBody">
                            <h3 className="notifMsg">{el.msg} </h3>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
