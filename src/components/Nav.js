import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <ul>
                <li>
                    <NavLink to="/" activeClassName="active">Homepage</NavLink>
                </li>
                <li>
                    <NavLink to="/plp" activeClassName="active">PLP</NavLink>
                </li>
                <li>
                    <NavLink to="/page-not-found" activeClassName="active">Error</NavLink>
                </li>
            </ul>
        );
    }
}
