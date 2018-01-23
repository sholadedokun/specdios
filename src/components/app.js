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
            imagePool:["bg1", "bg2","bg5","bg6","bg7"],
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
        // let video = document.querySelector("#video")
        // video.style.display= "none"
        // console.log(video)
    }
    render(){
        const {currentbg, imagePool, currentView}=this.state
        return(
            <Router>
                <Grid  fluid={true} >
                    <Row xs="12">
                        <Col xs="12" className="videoContainer" id="video">
                            <Row>
                                <video preload="auto" autoPlay loop  id="videoPlayer" width="100%">
                                    <source type="video/mp4" src="../../videos/spectra.mp4"/>
                                </video>
                                <span className="skip" onClick={this.hideVideo.bind(this)}>
                                    Skip Video <Icon icon="angle-double-right" />
                                </span>
                            </Row>
                        </Col>
                        <Col xs="12" className="imageMover">
                            <Row className="allContainer">
                                <Col xs="12" sm="6" md="4" className="imageContainer">
                                    {
                                        imagePool.filter((item,index)=>(index+1)%3==1).map(item=>
                                            <div className="imageDetails">
                                                <img src={`../../images/${item}.jpg`} width="100%" />
                                                <span>
                                                    <p className="title">somefadein details</p>
                                                </span>
                                            </div>
                                        )
                                    }
                                </Col>
                                <Col xs="12" sm="6" md="4" className="imageContainer">
                                    {
                                        imagePool.filter((item,index)=>(index+1)%3==2).map(item=>
                                            <div className="imageDetails">
                                                <img src={`../../images/${item}.jpg`} width="100%" />
                                                <span>
                                                    <p className="title">somefadein details</p>
                                                </span>
                                            </div>
                                        )
                                    }
                                </Col>
                                <Col xs="12" sm="6" md="4" className="imageContainer">
                                    {
                                        imagePool.filter((item,index)=>(index+1)%3==0).map(item=>
                                            <div className="imageDetails">
                                                <img src={`../../images/${item}.jpg`} width="100%" />
                                                <span>
                                                    <p className="title">somefadein details</p>
                                                </span>
                                            </div>
                                        )
                                    }
                                </Col>
                            </Row>
                                {/*<ReactCSSTransitionGroup transitionName="picAnim">
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
                                    </ReactCSSTransitionGroup>*/}
                        </Col>
                    </Row>
                </Grid>

            </Router>
        )
    }
}
