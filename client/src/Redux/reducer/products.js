const initialState = {
    loading: false,
    products: [],
    singleProduct: {},
    error: null,
    productAdded: false,
    productUpdated: false,
    productDeleted: false,
};

// pure function=> (state, {type,payload})=>
export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PRODUCTSLOADING":
            return {
                ...state,
                loading: true,
                productAdded: false,
                productUpdated: false,
                productDeleted: false,
            };
        case "PRODUCTSERROR":
            return { ...state, loading: false, error: action.payload };
        case "CLEARPRODUCTS":
            return {
                ...state,
                loading: false,
                productAdded: false,
                productUpdated: false,
                productDeleted: false,
                error: false,
            };
        case "GET_SINGLE_PRODUCT_SUCCESS":
            return {
                ...state,
                loading: false,
                singleProduct: action.payload,
            };
        case "GETPRODUCTSSUCCESS":
            return { ...state, products: action.payload, loading: false };
        case "ADDPRODUCTSSUCCESS":
            return { ...state, loading: false, productAdded: true };
        case "UPDATEPRODUCTSSUCCESS":
            return { ...state, loading: false, productUpdated: true };
        case "DELETEPRODUCTSSUCCESS":
            return { ...state, loading: false, productDeleted: true };

        default:
            return state;
    }
};
