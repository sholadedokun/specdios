import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap';
import Aboutus from './aboutus'
import Contactus from './contactus'
import Register from './register'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class Intro extends Component {
    constructor(props){
        super(props)
        this.state={
            currentView:'About Us'
        }
    }
    switchView(){
        switch (this.state.currentView){
            case 'About Us':
                return <Aboutus />
            case 'Contact Us':
                return <Contactus />
            case 'Register':
                return <Register />
        }
        return 'Hello World';
    }
    render(){
        return(
            <Grid className="infoSpace">
                <Row>
                    <Col style={{background:`url('../../images/bgoverlay.png') repeat`, padding:'10px 20px',  borderRadius: '5px'}} sm={4} xs={12}>
                        <Col xs={12}  className="App-header">
                            <div className="companyName">
                                <span className="logoHead">Spectra</span>
                                <span className="logoSubHead">Studios</span>
                            </div>
                        </Col>
                        <span className='workSlide'>
                            <ul>
                                <li>Coming Soon</li>
                                <li>Watch This Space</li>
                                <li>Under Construction</li>
                                <li>In a Moment</li>
                            </ul>
                        </span>
                        <ReactCSSTransitionGroup transitionName="aboutImages" transitionEnterTimeout={900} transitionLeaveTimeout={1000} className="route">
                            {this.switchView()}
                        </ReactCSSTransitionGroup>
                        <ReactCSSTransitionGroup transitionName="aboutImages" transitionEnterTimeout={900} transitionLeaveTimeout={1000}>
                            {
                                (this.state.currentView==='Contact Us' || this.state.currentView==='Register')?
                                <a onClick={()=>this.setState({currentView:'About Us'})}>About Us</a>:''
                            }
                            {
                                (this.state.currentView==='About Us' || this.state.currentView==='Register')?
                                <a onClick={(e)=>this.setState({currentView:'Contact Us'})}>Contact Us</a>:''
                            }
                            {
                                (this.state.currentView==='Contact Us' || this.state.currentView==='About Us')?
                                <a  onClick={()=>this.setState({currentView:'Register'})}>Get Free Photoshoot</a>:''
                            }
                        </ReactCSSTransitionGroup>
                    </Col>
                </Row>
            </Grid>
        )

    }
}
