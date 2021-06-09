import axios from "axios";

export const getProducts = () => async (dispatch) => {
    dispatch({ type: "PRODUCTSLOADING" });
    try {
        let result = await axios.get("/getProduct");
        dispatch({
            type: "GETPRODUCTSSUCCESS",
            payload: result.data.reverse(),
        });
    } catch (error) {
        dispatch({ type: "PRODUCTSERROR", payload: error.response.status });
    }
};
export const getSingleProduct = (id) => async (dispatch) => {
    dispatch({ type: "PRODUCTSLOADING" });
    try {
        let result = await axios.get(`/getProductById/${id}`);

        dispatch({
            type: "GET_SINGLE_PRODUCT_SUCCESS",
            payload: result.data,
        });
    } catch (error) {}
};
export const verifyAdmin = () => async (dispatch) => {
    dispatch({ type: "PRODUCTSLOADING" });
    try {
        await axios.get("/verifyAdmin");
    } catch (error) {
        dispatch({ type: "PRODUCTSERROR", payload: error.response.status });
    }
};

export const addProducts = (newProduct) => async (dispatch) => {
    dispatch({ type: "PRODUCTSLOADING" });
    try {
        await axios.post("/addProduct", newProduct, {
            headers: { authorization: localStorage.token },
        });

        dispatch({ type: "ADDPRODUCTSSUCCESS" });

        dispatch(getProducts());
    } catch (error) {
        dispatch({ type: "PRODUCTSERROR", payload: error.response.status });
    }
};
export const updateProducts = (newProduct) => async (dispatch) => {
    dispatch({ type: "PRODUCTSLOADING" });
    try {
        let result = await axios.post(
            "/updateProduct",

            newProduct,
            {
                headers: { authorization: localStorage.token },
            }
        );
        if (result.status === 200) {
            dispatch({ type: "UPDATEPRODUCTSSUCCESS" });
        }
    } catch (error) {
        dispatch({ type: "PRODUCTSERROR", payload: error.response.status });
    }
};

export const deleteProducts = (id) => async (dispatch) => {
    dispatch({ type: "PRODUCTSLOADING" });
    try {
        await axios.post(
            "/deleteProduct",

            id,
            {
                headers: { authorization: localStorage.token },
            }
        );

        dispatch({ type: "DELETEPRODUCTSSUCCESS" });
        dispatch(getProducts());
    } catch (error) {
        dispatch({ type: "PRODUCTSERROR", payload: error.response.status });
    }
};

export const clearProduct = () => async (dispatch) => {
    dispatch({ type: "CLEARPRODUCTS" });
};
