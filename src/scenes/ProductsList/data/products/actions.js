import { API } from './api';

// Actions
export const GET_PRODUCTS = 'PLP/data/products/GET_PRODUCTS';

// Action creators
export const getProducts = products => ({type: GET_PRODUCTS, products});

// Thunks
export const requestProducts = (page, pageSize) => {
    return async (dispatch) => {
        let data = await API.getProducts();
        
        dispatch(getProducts(data));
    }
};
