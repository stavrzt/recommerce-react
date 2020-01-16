import React, {Component} from 'react';
import styles from './styles.module.scss';

export default class Product extends Component {
    render() {
        return (
            <div className={styles.product}>
                <img className={styles.product__image} src={this.props.imagesrc} alt={this.props.name}/>
                <h2 className={styles.product__name} >{this.props.name}</h2>
                <b className={styles.product__price} >{this.props.price}</b>
            </div>
        )
    }
}
