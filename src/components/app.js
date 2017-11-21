import React, {Component} from 'react'
import {BrowserRouter as Router,  Route } from 'react-router-dom';
import Menu from './menu';
import Intro from './intro';
import Footer from './footer';
import {Col, Grid, Row} from 'react-bootstrap';
import Icon from './icon'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//We can now
//wrap redux store with our application through the Provider Tag
//enable route for our application through the Router Tag
//bootstrap, 'Grid' get resolve to container
//attaching our app to the html dom through document.getElementById('root'))
export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            currentbg:0,
            currentView:'',
            imagePool:["bg1", "bg2","bg3","bg4","bg5","bg6","bg7"],
            animationLeaveDuration:1000,
            animationEnterDuration:900,

        }
        this.animateBackground=this.animateBackground.bind(this);
    }
    animateBackground(){
        if(this.state.currentbg===(this.state.imagePool.length-1)){
            this.setState({currentbg:0})
        }
        else{
            this.setState({currentbg:++this.state.currentbg})
        }
    }
    componentWillMount(){
         this.interval=setInterval(()=>this.animateBackground(), 7500);

    }
    componentWillUnMount(){
        clearInterval(this.interval);
    }
    changeView(view){
        console.log(view);
        this.setState({currentView:view})
    }
    hideVideo(e){
        let player = document.querySelector("#videoPlayer").pause()
        let video = document.querySelector("#video")
        video.style.display= "none"
        console.log(video)
    }
    render(){
        const {currentbg, imagePool, currentView}=this.state
        return(
            <Router>

                <Grid  fluid={true} >

                    <Row className="App nop" >
                        <Menu title="Specdios" setView={this.changeView.bind(this)} currentView={this.state.currentView}/>
                        <Intro currentViewers={this.state.currentView} closeThePanle={()=>this.setState({currentView:''})}/>
                        <Grid fluid={true}>
                            <div className="videoContainer" id="video">
                                <video preload="auto" autoPlay loop id="videoPlayer">
                                    <source type="video/mp4" src="../../videos/spectra.mp4"/>
                                </video>
                                <span className="skip" onClick={this.hideVideo.bind(this)}>
                                    Skip Video <Icon icon="angle-double-right" />
                                </span>
                            </div>
                            <span className="imageMover">
                                <div className="imageContainer">

                                    <ReactCSSTransitionGroup transitionName="picAnim">
                                        {
                                            imagePool.map((item, index)=>{
                                                return(
                                                    (index==currentbg)?
                                                        <div key={index}
                                                            className={`imgBack ${index==currentbg?'active':''}`}

                                                        >
                                                        <img src={`../../images/${item}.jpg`} width="100%" />
                                                        </div>:''
                                                )
                                            })
                                        }
                                        </ReactCSSTransitionGroup>

                                </div>
                            </span>

                                <ReactCSSTransitionGroup transitionName="promoAnim">
                                    {(currentView==='')?
                                        <div className="introText">
                                            <h4>We are giving </h4><h2>FREE Outdoor Professional Photoshoot at</h2>
                                            <h4>Famous London Landmarks</h4>
                                            <p>Starting from November 15th</p>
                                            <button onClick={()=>this.setState({currentView:'register'})}>Book an Appointment</button>
                                            <span className="closeButton" onClick={()=>this.setState({currentView:'close'})}><Icon icon="times-circle" /></span>
                                        </div>:''
                                    }
                                </ReactCSSTransitionGroup>
                        </Grid>


                        <Footer />
                    </Row>
                    <Row>
                        <Col xs={12} id="warning-message">
                            <Row className="warning-content">
                                <img src="images/logo2.png" />
                                This website is only viewable in landscape mode.<br />
                                <div className="icon-stack rotateClockwise">
                                    <Icon icon="refresh" className="iconLg" />
                                    <Icon icon="mobile" />
                                </div>
                                 <strong>Please flip your device.</strong>
                            </Row>
                        </Col>
                    </Row>
                </Grid>

            </Router>
        )
    }
}
