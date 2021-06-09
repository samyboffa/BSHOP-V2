import axios from "axios";
import { getCurrentUser } from "./user";

export const getMyOrders = (userId) => async (dispatch) => {
    dispatch({ type: "ORDERSLOADING" });
    try {
        let result = await axios.get("/getMyOrders", {
            headers: { authorization: localStorage.token },
        });
        dispatch({
            type: "GETMYORDERSSUCCESS",
            payload: result.data.reverse(),
        });
    } catch (error) {
        dispatch({ type: "ORDERSERROR", payload: error.response.status });
    }
};

export const getAllOrders = () => async (dispatch) => {
    dispatch({ type: "ORDERSLOADING" });
    try {
        let result = await axios.get("/getAllOrders", {
            headers: { authorization: localStorage.token },
        });
        dispatch({
            type: "GETALLORDERSSUCCESS",
            payload: result.data.reverse(),
        });
    } catch (error) {
        dispatch({ type: "ORDERSERROR", payload: error.response.status });
    }
};

export const changeStatusOrders =
    (orderNumberOperationKey) => async (dispatch) => {
        dispatch({ type: "ORDERSLOADING" });
        try {
            await axios.post("/changeStatusOrders", orderNumberOperationKey, {
                headers: { authorization: localStorage.token },
            });
            dispatch({
                type: "CHANGESTATUSORDERSSUCCESS",
            });
            dispatch(getAllOrders());
        } catch (error) {
            dispatch({ type: "ORDERSERROR", payload: error.response.status });
        }
    };
export const newOrder = (order) => async (dispatch) => {
    dispatch({ type: "ORDERSLOADING" });
    try {
        await axios.post("/newOrder", order, {
            headers: { authorization: localStorage.token },
        });
        dispatch({
            type: "ORDER_ADDED_SUCCESS",
        });
        dispatch(getCurrentUser());
    } catch (error) {
        dispatch({ type: "ORDERSERROR", payload: error.response.data });
    }
};

export const clearOrders = () => async (dispatch) => {
    dispatch({ type: "CLEARORDERS" });
};
