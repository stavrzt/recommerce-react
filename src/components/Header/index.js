import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import Nav from "./components/Nav";
import styles from  './styles.module.scss';

export default class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <Logo/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Nav />
                        </Col>
                    </Row>
                </Grid>
            </header>
        );
    }
}
