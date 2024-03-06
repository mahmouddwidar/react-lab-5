import { GET_PRODUCTS } from "../Actions/productsAction";

const INITIAL_STATE = {
    list:[]
}

export default function productsReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                list:action.payload
            }
        default:
            return state;
    }
}