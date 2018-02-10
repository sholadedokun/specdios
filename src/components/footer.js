import React, {Component} from 'react';
import { Link,  } from 'react-router-dom';
import {Grid, Col, Row, Nav} from 'react-bootstrap';
import Icon from "./icon"
import _ from 'lodash'

export default class Menu extends(Component){
    constructor(props){
        super();
    }

    render(){
        return(
            <Grid fluid className="footerMenu">
                <Row>
                    <Grid>
                        <span id="copy"> Copyright © 2017 Spectra Studios.</span>
                        <ul id="social">
                          <li><a href="#"><Icon icon="facebook" /></a></li>
                          <li><a href="#"><Icon icon="twitter" /></a></li>
                          <li><a href="#"><Icon icon="instagram" /></a></li>
                          <li><a href="#"><Icon icon="snapchat" /></a></li>
                          <li><a href="#"><Icon icon="linkedin" /></a></li>
                        </ul>
                    </Grid>
                </Row>
            </Grid>
        )
    }
}
