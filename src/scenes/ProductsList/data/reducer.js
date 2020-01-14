import { combineReducers } from 'redux';

import { reducer as productsReducer } from './products/reducer';

export const reducer = combineReducers({
    products: productsReducer,
});
