import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import styles from './styles.module.scss';

export default class Nav extends Component {
    render() {
        return (
            <nav className={styles.navigation}>
                <ul className={styles.navigation__list}>
                    <li className={styles.navigation__item}>
                        <NavLink to="/" className={styles.navigation__link} activeClassName="active">Homepage</NavLink>
                    </li>
                    <li className={styles.navigation__item}>
                        <NavLink to="/plp" className={styles.navigation__link} activeClassName="active">PLP</NavLink>
                    </li>
                    <li className={styles.navigation__item}>
                        <NavLink to="/page-not-found" className={styles.navigation__link} activeClassName="active">Error</NavLink>
                    </li>
                </ul>
            </nav>

        );
    }
}
