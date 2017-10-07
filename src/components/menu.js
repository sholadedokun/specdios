import React, {Component} from 'react';
import { Link,  } from 'react-router-dom';
import {Grid, Col, Row, Nav} from 'react-bootstrap';
import _ from 'lodash'

export default class Menu extends(Component){
    constructor(props){
        super();
    }
    componentWillMount(){

    }
    componentWillReceiveProps(nextProps){

    }
    render(){
        const {setView, currentView} = this.props
        return(
            <div className="menu">
                <img src="images/logo.png" width="100px" />
                <ul className="menuList">
                    <li onClick={setView.bind(this,'')} className={(currentView=='')?"active":''}>Home</li>
                    <li onClick={setView.bind(this,'aboutUs')} className={(currentView=='aboutUs')?"active":''}>About Us</li>
                    <li onClick={setView.bind(this,'register')} className={(currentView=='register')?"active":''} >Free Photoshoot</li>
                    <li onClick={setView.bind(this,'contactUs')} className={(currentView=='contactUs')?"active":''}>Contact Us</li>
                </ul>
            </div>
        )
    }
}
