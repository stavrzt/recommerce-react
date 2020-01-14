import { GET_PRODUCTS } from './actions';

const initialState = {};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state, ...action.products};
        default:
            return state;
    }
};
