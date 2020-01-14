import * as axios from "axios";

export const API = {
    getProducts(currentPage = 1, pageSize = 12) {
        return axios.get(`/api/products?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
};
