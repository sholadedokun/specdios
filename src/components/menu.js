import React, {Component} from 'react';
import { Link,  } from 'react-router-dom';
import {Grid, Col, Row, Nav} from 'react-bootstrap';
import Icon from "./icon"
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
                <img src="images/logo2.png" />
                <ul className="menuList">
                    <li onClick={setView.bind(this,'')} className={(currentView=='')?"active":''}><Icon icon="home" /></li>
                    <li onClick={setView.bind(this,'aboutUs')} className={(currentView=='aboutUs')?"active":''}><Icon icon="users" /></li>
                    <li onClick={setView.bind(this,'register')} className={(currentView=='register')?"active":''} ><Icon icon="camera-retro" /></li>
                    <li onClick={setView.bind(this,'contactUs')} className={(currentView=='contactUs')?"active":''}><Icon icon="envelope" /></li>
                </ul>
            </div>
        )
    }
}
