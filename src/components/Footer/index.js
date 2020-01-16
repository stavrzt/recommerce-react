import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from  './styles.module.scss';

export default class Footer extends Component {
    render() {
        return (
            <footer className={styles.footer}>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            Footer
                        </Col>
                    </Row>
                </Grid>
            </footer>
        );
    }
}
