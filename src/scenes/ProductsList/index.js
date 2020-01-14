// import React from 'react';
import {connect} from 'react-redux';
import ProductsList from './components/ProductsList';
import { requestProducts } from './data/products/actions'


let mapStateToProps = (state) => ({products: state.productList.data.products});

export default connect(mapStateToProps, { requestProducts })(ProductsList);
