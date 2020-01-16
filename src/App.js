import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from "./scenes/Homepage";
import ProductsListContainer from "./scenes/ProductsList";
import NotFound from "./scenes/NotFound";
import './styles.scss'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/plp" exact component={ProductsListContainer}/>
                    <Route component={NotFound}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}
