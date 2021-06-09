import axios from "axios";

export const register = (credentials) => async (dispatch) => {
    dispatch({ type: "USER_LOADING" });
    try {
        let result = await axios.post("/register", credentials);
        dispatch({ type: "REGISTER_SUCCESS", payload: result.data });
    } catch (error) {
        dispatch({ type: "USER_ERROR", payload: error.response.data });
    }
};

export const login = (credentials) => async (dispatch) => {
    dispatch({ type: "USER_LOADING" });
    try {
        let result = await axios.post("/login", credentials);

        dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
    } catch (error) {
        dispatch({
            type: "USER_ERROR",
            payload: error.response.data,
        });
    }
};
export const logout = (history) => async (dispatch) => {
    dispatch({ type: "LOGOUT" });
    localStorage.clear();
    history.push("/");
};

export const getCurrentUser = () => async (dispatch) => {
    dispatch({ type: "USER_LOADING" });
    try {
        let result = await axios.get("/getUser", {
            headers: { authorization: localStorage.token },
        });
        dispatch({ type: "CURRENT_USER_SUCCESS", payload: result.data });
    } catch (error) {
        dispatch({ type: "CURRENT_USER_ERROR", error: error.response.data });
    }
};

export const addToCart = (product) => async (dispatch) => {
    dispatch({ type: "USER_LOADING" });
    try {
        await axios.post("/addToCart", product, {
            headers: { authorization: localStorage.token },
        });

        dispatch({ type: "PRODUCT_ADDED_TO_CART" });
        dispatch(getCurrentUser());
    } catch (error) {
        dispatch({ type: "USER_ERROR", payload: error.response.data });
    }
};
export const removeFromCart = (gameToRemove) => async (dispatch) => {
    dispatch({ type: "USER_LOADING" });
    try {
        await axios.post("/removeFromCart", gameToRemove, {
            headers: { authorization: localStorage.token },
        });

        dispatch({ type: "PRODUCT_REMOVED_TO_CART" });
        dispatch(getCurrentUser());
    } catch (error) {
        dispatch({ type: "USER_ERROR", payload: error.response.data });
    }
};
export const updateCartQuantity = (ItemAndOperation) => async (dispatch) => {
    dispatch({ type: "USER_LOADING" });
    try {
        await axios.post("/changeQuantity", ItemAndOperation, {
            headers: { authorization: localStorage.token },
        });

        dispatch({ type: "CART_QUANTITY_CHANGED" });
        dispatch(getCurrentUser());
    } catch (error) {
        dispatch({ type: "USER_ERROR", payload: error.response.data });
    }
};
//user CRUDS
export const updateUser = (newCredentials) => async (dispatch) => {
    dispatch({ type: "USER_LOADING" });
    try {
        await axios.post("/updateUser", newCredentials, {
            headers: { authorization: localStorage.token },
        });

        dispatch({ type: "USER_UPDATED" });
        dispatch(getCurrentUser());
    } catch (error) {
        dispatch({ type: "USER_ERROR", payload: error.response.data });
    }
};
export const updatePassword = (newCredentials) => async (dispatch) => {
    dispatch({ type: "USER_LOADING" });
    try {
        await axios.post("/updatePassword", newCredentials, {
            headers: { authorization: localStorage.token },
        });

        dispatch({ type: "PASSWORD_UPDATED" });
    } catch (error) {
        dispatch({ type: "USER_ERROR", payload: error.response.data });
    }
};

export const clearUser = () => async (dispatch) => {
    dispatch({ type: "CLEAR_USER" });
};
