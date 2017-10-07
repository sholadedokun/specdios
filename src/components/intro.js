import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap';
import Aboutus from './aboutus'
import Contactus from './contactus'
import Register from './register'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class Intro extends Component {

    switchView(){
        switch (this.props.currentViewers){
            case 'aboutUs':
                return <Aboutus closePanel={this.props.closeThePanle.bind(this)} />
            case 'contactUs':
                return <Contactus closePanel={this.props.closeThePanle.bind(this)} />
            case 'register':
                return <Register closePanel={this.props.closeThePanle.bind(this)} />
        }
        return '';
    }
    render(){
        return(
            <ReactCSSTransitionGroup transitionName="aboutImages" className="route">

                {this.switchView()}
            </ReactCSSTransitionGroup>
        )

    }
}
