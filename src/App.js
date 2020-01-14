import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from "./scenes/Homepage";
import ProductsListContainer from "./scenes/ProductsList";
import NotFound from "./scenes/NotFound";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Nav/>
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
