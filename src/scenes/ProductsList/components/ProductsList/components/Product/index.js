import React, {Component} from 'react';

export default class Product extends Component {
    render() {
        return (
            <div>
                <img src={this.props.imagesrc} alt={this.props.name}/>
                <h2>{this.props.name}</h2>
                <b>{this.props.price}</b>
            </div>
        )
    }
}
