import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Product from './components/Product';

export default class ProductsList extends Component {
    componentDidMount() {
        this.props.requestProducts();
    }

    render() {
        const products = this.props.products,
              productElements = [];

        Object.keys(products).map((key, index) => productElements.push(<Col xs={3}><Product key={products[index]._id} {...products[index]} /></Col>));

        return (
            <Grid>
                <Row>
                    <Col xs={2}>
                        Refinements
                    </Col>
                    <Col xs={10}>
                        <Row>
                            <Col xs={12}>
                                Filter and Sort elements
                            </Col>
                        </Row>
                        <Row>
                            {productElements}
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <button>Load more</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
