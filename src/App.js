import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from "./scenes/Homepage";
import PLP from "./scenes/PLP";
import NotFound from "./scenes/NotFound";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Nav/>
                <Switch>
                    <Route path="/" exact component={Homepage}/> {/* TODO: Add homepage */}
                    <Route path="/plp" exact component={PLP}/>
                    <Route component={NotFound}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}
