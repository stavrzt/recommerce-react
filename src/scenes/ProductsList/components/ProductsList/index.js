import React, {Component} from 'react';
import Product from './components/Product'

export default class ProductsList extends Component {
    componentDidMount() {
        this.props.requestProducts();
    }

    render() {
        const products = this.props.products,
              productElements = [];

        Object.keys(products).map((key, index) => productElements.push(<Product key={products[index]._id} {...products[index]} />));

        return (
            <div>
                {productElements}
            </div>
        )
    }
}
