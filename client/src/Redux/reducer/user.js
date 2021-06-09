const initialState = {
    loading: false,
    user: null,
    error: null,
    admin: false,
    isAuth: false,
    addedToCart: false,
    addedToCartError: null,
    userUpdated: false,
    passwordUpdated: false,
};

// pure function=> (state, {type,payload})=>
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_LOADING":
            return {
                ...state,
                loading: true,
                addedToCart: false,
                error: null,
                userUpdated: false,
                passwordUpdated: false,
            };
        case "LOGIN_SUCCESS":
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                user: action.payload.user,
                loading: false,
                isAuth: true,
            };
        case "PRODUCT_ADDED_TO_CART":
            return { ...state, addedToCart: true, loading: false };
        case "PRODUCT_REMOVED_TO_CART":
            return { ...state, loading: false };
        case "CART_QUANTITY_CHANGED":
            return { ...state, loading: false };
        case "REGISTER_SUCCESS":
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null,
            };
        case "CURRENT_USER_SUCCESS":
            return {
                ...state,
                user: action.payload,
                loading: false,
                isAuth: true,
                admin: action.payload.role === 2 ? true : false,
            };
        case "USER_ERROR":
            return { ...state, loading: false, error: action.payload };
        case "CURRENT_USER_ERROR":
            return { ...state, loading: false, error: action.payload };
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                loading: false,
                user: null,
                error: null,
                admin: false,
                isAuth: false,
            };
        case "CLEAR_USER":
            return {
                ...state,
                loading: false,
                user: null,
            };

        case "ADMIN":
            return {
                ...state,
                loading: false,
                admin: true,
                isAuth: true,
                error: null,
            };
        case "USER_UPDATED":
            return { ...state, userUpdated: true, error: null, loading: false };
        case "PASSWORD_UPDATED":
            return {
                ...state,
                passwordUpdated: true,
                error: null,
                loading: false,
            };

        default:
            return state;
    }
};
