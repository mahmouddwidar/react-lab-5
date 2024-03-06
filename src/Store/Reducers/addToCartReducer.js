import { INCREMENT_CART_COUNT } from "../Actions/addToCartAction";

const initialState = {
    cartCount: 0
};

const addToCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_CART_COUNT:
            return {
                ...state,
                cartCount: state.cartCount + 1
            };
        default:
            return state;
    }
};

export default addToCartReducer;
