import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import addToCartReducer from './addToCartReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    addToCart: addToCartReducer
});

export default rootReducer;
